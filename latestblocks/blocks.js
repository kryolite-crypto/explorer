function addBlock_inner(id,height,timestamp_date,transaction_count) {
    const blockString = `
        <div class = "block">
            <p>Height: {height}</p>
            <p>Time: {timestamp_date}</p>
            <p>Transactions: {transaction_count}</p>
        </div>
    `
    .replace("{id}",id)
    .replace("{height}",height)
    .replace("{timestamp_date}",timestamp_date)
    .replace("{transaction_count}",transaction_count)
    blocks.innerHTML += blockString
}

function addBlock(bData) {
    let id = bData.id
    let height = bData.height
    let timestamp_date = UnixToDateStr(bData.timestamp)
    let transaction_count = bData.pow.transactions.length
    addBlock_inner(id,height,timestamp_date,transaction_count)
}

async function getBlock(height) {
    return new Promise(async (resolve, reject) => {
        let response = await fetchContent(`/block/pos?height=${height}`)
        if (!response) {reject("No response")} else {
            let block = JSON.parse(response)
            resolve(block)
        }
    })
}

async function BSearchBlock(start,end) {
    return new Promise(async (resolve, reject) => {
        let attempt = Math.floor((start + end)/2)
        let success = false
        console.log("Narrowed the latest block down to a range of",end-start)
        try {
            await getBlock(attempt)
            success = true
        } catch {}
        if (success) {
            if (end - attempt != 1) {
                await resolve(BSearchBlock(attempt,end))
            }
            resolve(attempt)
        } else {
            await resolve(BSearchBlock(start,attempt))
        }
    })
}
async function figureOutLatestBlock() {
    try {
        let latestBlockRaw = await fetchContent("/block/latest");
        let latestBlock = JSON.parse(latestBlockRaw);
        return latestBlock.height;
    } catch {
        console.error("API does not yet support /block/latest, using old version")
        let block = 0
        let attempt = 1
        let finished = false
        while (!finished) {
            try {
                await getBlock(attempt)
                block = attempt
                attempt *= 2;
                console.log("Highest verified block:",block)
            } catch {
                finished = true
            }
        }
        const latestBlock = await BSearchBlock(block,attempt)
        console.log("Latest block is",latestBlock)
        return latestBlock
    }
}

async function renderBlocks() {
    let latestBlock = await figureOutLatestBlock(); // Thanks Kryolite API For being easy to work with :>
    blocks.innerHTML = "";
    let i = latestBlock;
    let loops = 0;
    while (loops < MAX_RENDER_BLOCKS && i > 0) {
        addBlock(await getBlock(i))
        i--;
        loops++;
    }
}

const MAX_RENDER_BLOCKS = 100;
renderBlocks()