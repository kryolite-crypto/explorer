async function renderRichList(url) {
    url += "/richlist"
    try {
        const table = document.querySelector("#table > tbody")
        table.innerHTML = `<tr><th>ID</th><th>ADDRESS</th><th>BALANCE</th><th>PENDING</th></tr>`;
        let wallets = await getRichlist(url)
        wallets.forEach(wallet => {
            table.innerHTML += `<tr>
            <th>${wallet.id}</th
            ><th>${wallet.address}</th>
            <th>${wallet.balance}</th>
            <th>${wallet.pending}</th>
            </tr>`
        });
        return true // Success
    } catch {
        return false // Not success
    }
}

async function render() {
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        console.log(`Rendering richlist from url ${url}`)
        let result = await renderRichList(url)
        if (result) break;
        console.error(`Rendering from ${url} failed!`)
        if (i === urls.length-1) alert("Rendering richlist failed")
    }
}

render()