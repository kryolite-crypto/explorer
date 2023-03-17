const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

async function getWallet() {
  return new Promise(async (resolve, reject) => {
    let wallet = params.wallet;
    if (wallet === null || wallet.length < 1) {
      wallet = prompt("Wallet address?");
    }
    resolve(wallet);
  });
}

async function renderWalletTransactions() {
  let wallet = await getWallet();
  let transactions = {};
  await fetchContent(`/ledger/${wallet}/transactions`)
    .then(async (transactions_raw) => {
      try {
        transactions = JSON.parse(transactions_raw);
        if (transactions.title && transactions.title === "Bad Request")
          throw "Invalid address";
      } catch {
        alert("Invalid address");
        window.history.back();
      }
      for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        if (i % 25 === 0) {
          await delay(1);
        }
        createNode(
          transaction.transactionType,
          transaction.value,
          transaction.nonce,
          transaction.from,
          transaction.to,
          transaction.hash
        );
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

let owo = "";
function showOrHide(hash) {
  try {
    let hideable = document.getElementById(hash).querySelector(".hideable");
    if (hideable.classList.contains("show")) {
      hideable.classList.remove("show");
    } else {
      hideable.classList.add("show");
    }
  } catch {}
}

function createNode(type, value, nonce, from, to, hash) {
  const transaction = document.createElement("div");
  transaction.id = hash;
  transaction.classList.add("transaction");
  transaction.innerHTML = `
        <h1 onClick='showOrHide("{hash}")'>{hash}</h1>
        <div class = "hideable">
            <p>Type: {type}</p>
            <p>Value: {value}</p>
            <p>Nonce: {nonce}</p>
            <p>From: <a href="../?wallet={from}">{from}</a></p>
            <p>To: <a href="../?wallet={to}">{to}</a></p>
            <p>Hash: <a href="../../transaction?transaction={hash}">{hash}</a></p>
        </div>
    `
    .replaceAll("{type}", type)
    .replaceAll("{value}", value)
    .replaceAll("{nonce}", nonce)
    .replaceAll("{from}", from)
    .replaceAll("{to}", to)
    .replaceAll("{hash}", hash);
  main.appendChild(transaction);
}

renderWalletTransactions();
