// https://gist.github.com/diafygi/90a3e80ca1c2793220e5/
var to_b58 = function(B,A){var d=[],s="",i,j,c,n;for(i in B){j=0,c=B[i];s+=c||s.length^i?"":1;while(j in d||c){n=d[j];n=n?n*256+c:c;c=n/58|0;d[j]=n%58;j++}}while(j--)s+=A[d[j]];return s};
var from_b58 = function(S,A){var d=[],b=[],i,j,c,n;for(i in S){j=0,c=A.indexOf(S[i]);if(c<0)return undefined;c||b.length^i?i:b.push(0);while(j in d||c){n=d[j];n=n?n*58+c:c;c=n>>8;d[j]=n%256;j++}}while(j--)b.push(d[j]);return new Uint8Array(b)};

function Base64ToUint8Array(base64) {
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}

function bufferToWallet(base64) {
    var MAP = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
    var int8array = Base64ToUint8Array(base64)
    var encoded = to_b58(int8array,MAP)
    // add kryo prefix
    encoded = "kryo:" + encoded
    return encoded
}

async function fetchContent(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.text())
        .then(text => resolve(text))
        .catch((error) => {
            console.error(error)
            resolve("[]") // Professional errorhandling
        });
    })
}

async function getRichlist(url) {
    let rawString = await fetchContent(url)
    let wallets = JSON.parse(rawString)
    return wallets
}

async function renderRichList(url) {
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
}

let url = "https://testnet-1.kryolite.io/richlist" // Hardcoded for now :(
renderRichList(url)