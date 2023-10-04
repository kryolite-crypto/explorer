/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const res = await fetch(`http://localhost:5100/validator`);
    const validators = await res.json();

    return { validators };
}
