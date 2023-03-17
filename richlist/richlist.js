async function getRichlist() {
  let rawString = await fetchContent("/richlist");
  let wallets = JSON.parse(rawString);
  return wallets;
}

async function renderRichList() {
  const table = document.querySelector("#table > tbody");
  table.innerHTML = `<tr><th>ADDRESS</th><th>BALANCE</th><th>PENDING</th></tr>`;
  let wallets = await getRichlist()
    .then((wallets) => {
      wallets.forEach((wallet) => {
        table.innerHTML += `<tr>
            <th><a href = "../wallet?wallet=${wallet.address}">${wallet.address}</a></th>
            <th>${wallet.balance}</th>
            <th>${wallet.pending}</th>
            </tr>`;
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

renderRichList();
