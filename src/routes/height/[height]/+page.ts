/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`https://testnet-1.kryolite.io/tx/height/${params.height}`);
    const transactions = await res.json();

    return { transactions };
}
