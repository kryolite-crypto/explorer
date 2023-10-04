/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`https://testnet-1.kryolite.io/tx/${params.txid}`);
    const transaction = await res.json();

    return { transaction };
}
