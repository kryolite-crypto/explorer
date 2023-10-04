import type { Transaction } from '$lib/transaction.js';

/** @type {import('./$types').PageLoad} */
export async function load({fetch, depends, parent}) {
    const { height } = await parent();

    const chainstateRes = await fetch(`http://localhost:5100/chainstate`);
    const res = await fetch(`http://localhost:5100/tx?pageNum=0&pageSize=20`);
    const graphRes = await fetch(`http://localhost:5100/tx/graph?startHeight=${height}`);
    
    const chainstate = await chainstateRes.json();
    const transactions = await res.json() as Transaction[];
    const graph = (await graphRes.text());

    depends('app:graph');

    return { chainstate, transactions, graph };
}
