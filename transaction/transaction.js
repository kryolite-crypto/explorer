const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

async function getTransaction() {
    return new Promise(async (resolve, reject) => {
        let transaction = params.transaction
        if (transaction === null || transaction.length < 1) {
            transaction = prompt("Transaction hash?")
        }
        resolve(transaction)
    })
}

async function renderTransaction() {
    let transaction_hash = await getTransaction()
    await fetchContent(`/tx/${transaction_hash}`)
    .then(transactionString => {
        tData = JSON.parse(transactionString)
        transaction.innerHTML = transaction.innerHTML
        .replaceAll("{id}",tData.id)
        .replaceAll("{from}",`${tData.from}`)
        .replaceAll("{to}",bufferToWallet(tData.to.buffer))
        .replaceAll("{transactiontype}",tData.transactionType)
        .replaceAll("{value}",tData.value)
        .replaceAll("{maxfee}",tData.maxFee)
        .replaceAll("{hash}",bufferToString(tData.hash.buffer))
    })
    .catch(error => {
        console.log(error)
    })
}
let global;
renderTransaction()