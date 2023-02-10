const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const address_text = document.querySelector("#wallet_address")
const id_text = document.querySelector("#wallet_id")
const balance_text = document.querySelector("#wallet_balance")
const pending_text = document.querySelector("#wallet_pending")

async function getWallet() {
    return new Promise(async (resolve, reject) => {
        let wallet = params.wallet
        if (wallet === null || wallet.length < 1) {
            wallet = prompt("Wallet address?")
        }
        resolve(wallet)
    })
}

async function renderWallet() {
    let wallet = await getWallet()
    await fetchContent(`/ledger/${wallet}`)
    .then(walletData => {
        try {
            walletData = JSON.parse(walletData)
            address_text.innerHTML += bufferToWallet(walletData.address.buffer)
            id_text.innerHTML += walletData.id
            balance_text.innerHTML += walletData.balance
            pending_text.innerHTML += walletData.pending
        } catch {
            alert("Invalid address")
            window.history.back()
        }
    })
    .catch(error => {console.error(error)})
}
renderWallet()