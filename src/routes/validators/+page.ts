/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`https://testnet-1.kryolite.io/validator`);
    const validators = await res.json();

    return { validators };
}
