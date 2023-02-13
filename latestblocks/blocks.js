const blockdiv = document.querySelector("#blocks")
const loading_indicator = document.querySelector("#loading_indicator")

function addBlock_inner(id,height,timestamp_date,transaction_count) {
    const blockString = `
        <div class = "block">
            <h3>{id}</h3>
            <div class = "block_info">
                <p>Height: {height}</p>
                <p>Time: {timestamp_date}</p>
                <p>Transactions: {transaction_count}</p>
            </div>
        </div>
    `
    .replace("{id}",id)
    .replace("{height}",height)
    .replace("{timestamp_date}",timestamp_date)
    .replace("{transaction_count}",transaction_count)
    blockdiv.innerHTML += blockString
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
        loading_indicator.innerHTML = `Search range: ${end-start}`
        let attempt = Math.floor((start + end)/2)
        let success = false
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
    let block = 0
    let attempt = 1
    let finished = false
    while (!finished) {
        loading_indicator.innerHTML = `Highest found Block: ${block}`
        try {
            await getBlock(attempt)
            block = attempt
            attempt *= 2;
        } catch {
            finished = true
        }
    }
    const latestBlock = await BSearchBlock(block,attempt)
    console.log("Latest block is",latestBlock)
    return latestBlock
}

async function renderBlocks() {
    let latestBlock = await figureOutLatestBlock(); // Thanks Kryolite API For being easy to work with :>
    blockdiv.innerHTML = "";
    let i = latestBlock;
    let loops = 0;
    while (loops < MAX_RENDER_BLOCKS || i < 1) {
        addBlock(await getBlock(i))
        i--;
        loops++;
    }
}

const MAX_RENDER_BLOCKS = 100;
renderBlocks()