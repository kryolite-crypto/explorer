/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`https://testnet-1.kryolite.io/ledger/${params.address}`);
    const ledger = await res.json();

    const txRes = await fetch(`https://testnet-1.kryolite.io/ledger/${params.address}/transactions`);
    const transactions = await txRes.json();

    return { ledger, transactions };
}
