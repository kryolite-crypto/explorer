/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`http://localhost:5100/richlist?count=50`);
    const ledger = await res.json();

    return { ledger };
}
