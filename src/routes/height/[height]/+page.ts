/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`http://localhost:5100/tx/height/${params.height}`);
    const transactions = await res.json();

    return { transactions };
}
