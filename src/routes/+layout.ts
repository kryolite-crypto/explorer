/** @type {import('./$types').PageLoad} */
export async function load({fetch, depends}) {
    const chainstateRes = await fetch(`https://testnet-1.kryolite.io/chainstate`);
    const chainstate = await chainstateRes.json();

    depends('app:height');

    return { height: Math.max(chainstate.height - 10, -1) };
}
