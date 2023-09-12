import type { Transaction } from '$lib/transaction.js';

/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const chainstateRes = await fetch(`https://testnet-1.kryolite.io/chainstate`);
    const res = await fetch(`https://testnet-1.kryolite.io/tx?pageNum=0&pageSize=20`);
    const graphRes = await fetch(`https://testnet-1.kryolite.io/tx/graph?pageNum=0&pageSize=500`);
    
    const chainstate = await chainstateRes.json();
    const transactions = await res.json() as Transaction[];
    const graph = await graphRes.text();

    return { chainstate, transactions, graph };
}
