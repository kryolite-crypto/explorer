/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`http://localhost:5100/tx/${params.txid}`);
    const transaction = await res.json();

    return { transaction };
}
