function addBlock_inner(id,height,timestamp_date,transactions) {
    let blockString = `
        <div class = "block">
            <p>Height: {height}</p>
            <p>Time: {timestamp_date}</p>
            {transaction_placeholder}
        </div>
    `
    .replace("{id}",id)
    .replace("{height}",height)
    .replace("{timestamp_date}",timestamp_date)
    if (transactions.length === 1) {
        blockString = blockString
        .replaceAll(
            "{transaction_placeholder}",
            `<p>Transactions: ${transactions.length} <a href="./transaction?transaction=${transactions[0].hash}">(Click to view)</a></p>`
        )
    } else {
        blockString = blockString
        .replaceAll(
            "{transaction_placeholder}",
            `<p>Transactions: ${transactions.length}</p>`
        )
    }
    blocks.innerHTML += blockString
}

function addBlock(bData) {
    let id = bData.id
    let height = bData.height
    let timestamp_date = UnixToDateStr(bData.timestamp)
    let transactions = bData.pow.transactions
    addBlock_inner(id,height,timestamp_date,transactions)
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


async function initialRenderBlocks() {
    let latestBlockRaw = await fetchContent("/block/latest");
    let latestBlock = JSON.parse(latestBlockRaw);''
    renderBlocks(latestBlock.height,latestBlock.height-20)
}
async function renderBlocks(max,min) {
    RENDERING = true
    let i = max;
    while (i >= min && i > 0) {
        addBlock(await getBlock(i))
        i--;
        BLOCK_INDEX = i;
    }
    RENDERING = false;
}

window.onscroll = function() {
    if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
        if (!RENDERING) {
            renderBlocks(BLOCK_INDEX,BLOCK_INDEX-5)
        }
    }
}
let BLOCK_INDEX = 0;
let RENDERING = true;
initialRenderBlocks()