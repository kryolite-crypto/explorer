/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`http://localhost:5100/ledger/${params.address}`);
    const ledger = await res.json();

    const txRes = await fetch(`http://localhost:5100/ledger/${params.address}/transactions`);
    const transactions = await txRes.json();

    return { ledger, transactions };
}
