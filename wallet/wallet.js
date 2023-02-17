const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

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
    let wallet_id = await getWallet()
    await fetchContent(`/ledger/${wallet_id}`)
    .then(walletData => {
        try {
            walletData = JSON.parse(walletData)
            wallet_address.innerHTML += walletData.address
            wallet_balance.innerHTML += walletData.balance
            wallet_pending.innerHTML += walletData.pending
            wallet.innerHTML += `<a href="./transactions?wallet=${wallet_id}">View transaction history</a>`
        } catch {
            alert("Invalid address")
            window.history.back()
        }
    })
    .catch(error => {console.error(error)})
}
renderWallet()