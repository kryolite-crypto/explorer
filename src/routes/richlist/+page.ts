/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`https://testnet-1.kryolite.io/richlist?count=50`);
    const ledger = await res.json();

    return { ledger };
}
