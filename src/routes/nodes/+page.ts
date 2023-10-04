/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`http://localhost:5100/nodes`);
    const nodes = await res.json();

    return { nodes };
}
