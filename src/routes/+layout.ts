/** @type {import('./$types').PageLoad} */
export async function load({fetch, depends}) {
    const chainstateRes = await fetch(`http://localhost:5100/chainstate`);
    const chainstate = await chainstateRes.json();

    depends('app:height');

    return { height: Math.max(chainstate.id - 20, -1) };
}
