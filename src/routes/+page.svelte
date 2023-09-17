<style>
    .stats-container {
        margin-top: 20px;
        border-color: darkgray;
        border-style: solid;
        border-width: 1px;
        height: 45px;
        display:flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
    }

    .graph-container {
        margin-top: 20px;
        border-color: darkgray;
        border-style: solid;
        border-width: 1px;
        height: 250px;
        overflow: hidden;
    }

    .graph-container:active {
        cursor: all-scroll;
    }

    .tx-container {
        margin-top: 20px;
        border-color: darkgray;
        border-style: solid;
        border-width: 1px;
        padding: 10px;
        min-height: 350px;
        display:flex;
        justify-content: space-between;
    }

    .tx-container .header {
        margin-bottom: 5px;
    }

</style>

<script>
    import { afterUpdate, onMount } from 'svelte';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import * as d3 from 'd3-graphviz';
    import * as d3t from 'd3-transition';
    import * as d3e from 'd3-ease';
    import * as d3s from 'd3-selection';
    import * as d3z from 'd3-zoom';
    import { invalidate } from '$app/navigation';

    /**
     * @type {d3.Graphviz<import("d3-selection").BaseType, any, import("d3-selection").BaseType, any>}
     */
    let graphControl;
    let init = false;

    onMount(() => {
        graphControl = d3.graphviz("#graph")
            .options(
                {
                    height: 250
                }
            )
            // @ts-ignore
            /*.transition(() => {
                if (!init)
                {
                    init = true;
                    return d3t.transition("main").duration(0);
                }

                return d3t.transition("main").ease(d3e.easeLinear).duration(1000)
            })*/
            .fade(true)
            .growEnteringEdges(true)
            .keyMode('tag-index');

        function doInvalidate(data = '') {
            if (data == 'RESYNC') {
                invalidate('app:height');
            }
            else {
                invalidate('app:graph');
            }
        }

        const evtSource = new EventSource('http://localhost:5000/events/newtx');
        
        let timeout = 0;
        let debounceCount = 0;

        evtSource.onmessage = (event) => {
            clearTimeout(timeout);
            debounceCount++;

            if (debounceCount >= 25) {
                doInvalidate(event.data);
                debounceCount = 0;
            }

            timeout = setTimeout(() => doInvalidate(event.data), 250);
        }

        return () => {
            clearTimeout(timeout);
            evtSource.onmessage = null;
            evtSource.close();
        }
    });

    afterUpdate(() => {
        graphControl.renderDot($page.data.graph, () => {
            const svg = d3s.select("svg");
            const g = svg.select("g");
            const [x, y, width, height] = svg.attr("viewBox").split(" ");
            const zoom = d3z.zoom();
            // @ts-ignore
            svg.call(zoom.on("zoom", ({ transform }) => g.attr("transform", transform)));
            // @ts-ignore
            svg.transition().duration(1000).call(zoom.translateTo, width, -height);
        });
    });
</script>

<p class="title">Chain Stats</p>
<div class="stats-container">
    <div class="column">
        <p class="header">Height</p>
        <a class="text" href="{base}/height/{$page.data.chainstate.height}">{$page.data.chainstate.height}</a>
    </div>

    <div class="column">
        <p class="header">Blocks</p>
        <p class="text">{$page.data.chainstate.blocks}</p>
    </div>

    <div class="column">
        <p class="header">Weight</p>
        <p class="text">
            {#if ($page.data.chainstate.weight / 1_000_000_000) > 1}
                {($page.data.chainstate.weight / 1_000_000_000).toFixed(2) + 'G'}
            {/if}
        </p>
    </div>

    <div class="column">
        <p class="header">Votes</p>
        <p class="text">{$page.data.chainstate.votes}</p>
    </div>

    <div class="column">
        <p class="header">Difficulty</p>
        <p class="text">{Math.log2($page.data.chainstate.currentDifficulty).toFixed(2)}</p>
    </div>

    <div class="column">
        <p class="header">Transactions</p>
        <p class="text">{$page.data.chainstate.transactions}</p>
    </div>
</div>

<p class="title">Chain Graph</p>
<div id="graph" class="graph-container"></div>

<p class="title">Latest Transactions</p>
<div class="tx-container">
    <div class="column">
        <p class="header">TransactionId</p>
        {#each $page.data.transactions as {transactionId}, i}
        <a class="text" href="{base}/tx/{transactionId}">{transactionId.substring(0, 12)}</a>
        {/each}
    </div>

    <div class="column">
        <p class="header">Type</p>
        {#each $page.data.transactions as {transactionType}, i}
        <p class="text">
            {#if transactionType == 0}
                Transaction
            {:else if transactionType == 1}
                Genesis
            {:else if transactionType == 2}
                Block
            {:else if transactionType == 3}
                View
            {:else if transactionType == 4}
                Contract
            {:else if transactionType == 5}
                RegValidator
            {:else if transactionType == 6}
                Vote
            {:else}
                n/a
            {/if}
        </p>
        {/each}
    </div>

    <div class="column">
        <p class="header">Height</p>
        {#each $page.data.transactions as {height}, i}
            {#if height == null}
                <p class="text"><br/></p>
            {:else}
                <a class="text" href="{base}/height/{height}">{height}</a>
            {/if}
        {/each}
    </div>

    <div class="column">
        <p class="header">Sender</p>
        {#each $page.data.transactions as {from}, i}
            {#if from == null || from == "kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
                <p class="text"><br/></p>
            {:else}
                <a class="text" href="{base}/ledger/{from}">{from}</a>
            {/if}
        {/each}
    </div>

    <div class="column">
        <p class="header">Recipient</p>
        {#each $page.data.transactions as {to}, i}
            {#if to == null || to == "kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
                <p class="text"><br/></p>
            {:else}
            <a class="text" href="{base}/ledger/{to}">{to}</a>
            {/if}
        {/each}
    </div>

    <div class="column">
        <p class="header">Value</p>
        {#each $page.data.transactions as {value}, i}
        <p class="text">{(value / 1_000_000).toFixed(2)}</p>
        {/each}
    </div>

    <div class="column">
        <p class="header">Status</p>
        {#each $page.data.transactions as {executionResult}, i}
        <p class="text">
            {#if executionResult == 0}
                Waiting
            {:else if executionResult == 1}
                Verifying
            {:else if executionResult == 2}
                Pending
            {:else if executionResult == 3}
                Success
            {:else if executionResult == 4}
                Too low balance
            {:else if executionResult == 5}
                Invalid contract
            {:else if executionResult == 6}
                Contract execution failed
            {:else if executionResult == 7}
                Contract entrypoint missing
            {:else if executionResult == 8}
                Contract snapshot missing
            {:else if executionResult == 9}
                Invalid payload
            {:else if executionResult == 10}
                Invalid method
            {:else if executionResult == 11}
                Verify failed
            {:else if executionResult == 12}
                Unknown
            {:else if executionResult == 13}
                Duplicate contract
            {:else if executionResult == 14}
                Stale
            {:else}
                n/a
            {/if}
        </p>
        {/each}
    </div>
</div>
