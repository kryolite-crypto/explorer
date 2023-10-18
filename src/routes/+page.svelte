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
    let dotIndex = 0;
    let elementIndex = 0;

    onMount(() => {
        graphControl = d3.graphviz("#graph")
            .options({
                height: 250
            })
            .keyMode('title')
            .fade(true)
            .tweenShapes(false)
            // @ts-ignore
            .transition(() => {
                return d3t.transition("main")
                    .duration(dotIndex == 0 ? 0 : 2000)
            });

        function doInvalidate(data = '') {
            if (data == 'RESYNC') {
                invalidate('app:height');
            }
            else {
                invalidate('app:graph');
            }
        }

        const evtSource = new EventSource('https://testnet-1.kryolite.io/events/newtx');
        
        let timeout = 0;
        let debounceCount = 0;
        let hasUpdates

        evtSource.onmessage = (event) => {
            if (document.hidden) {
                hasUpdates = true;
                return;
            }

            clearTimeout(timeout);

            debounceCount++;

            if (debounceCount >= 25) {
                debounceCount = 0;
                doInvalidate(event.data);
            }

            timeout = setTimeout(() => {
                hasUpdates = false;
                doInvalidate(event.data)
            }, 500);
        }

        function handleVisibilityChange() {
            if (document.hidden) {
                clearTimeout(timeout);
            } else {
                doInvalidate();
            }
        }

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            clearTimeout(timeout);

            evtSource.onmessage = null;
            evtSource.close();

            document.removeEventListener("visibilitychange", handleVisibilityChange);
        }
    });

    afterUpdate(() => {
        graphControl.renderDot($page.data.graph, () => {
            dotIndex++;

            const ellipses = d3s.selectAll("ellipse").nodes();
            let cx = 0;
            let cy = 0;

            for (let i = 0; i < ellipses.length; i++) {
                // @ts-ignore
                if (ellipses[i].cx.baseVal.value > cx) {
                    // @ts-ignore
                    cx = ellipses[i].cx.baseVal.value;
                    // @ts-ignore
                    cy = ellipses[i].cy.baseVal.value;
                }
            }

            const graphArea = document.getElementById("graph");
            const svg = d3s.select("svg");
            const g = svg.select("g");
            const zoom = d3z.zoom();
            // const [x, y, width, height] = svg.attr("viewBox").split(" ");

            // @ts-ignore
            svg.call(zoom
                // @ts-ignore
                .extent([[0, 0], [graphArea?.clientWidth, 250]])
                .scaleExtent([0.1, 8])
                .on("zoom", ({ transform }) => g.attr("transform", transform)));
            // @ts-ignore
            svg.transition().duration(1000).call(zoom.translateTo, cx, cy / 2);
        });
    });

    let weight = $page.data.chainstate.weight;
    let unit = 0;

    while (weight > 1000)
    {
        weight /= 1000;
        unit++;
    }

    let unitstr = '';

    if (unit == 1)
    {
        unitstr = 'K';
    }
    else if (unit == 2)
    {
        unitstr = 'M'
    }
    else if (unit == 3)
    {
        unitstr = 'G'
    }
    else if (unit == 4)
    {
        unitstr = 'T'
    }

    const null_address = 'kryo:weamtrfsr7twjpbkybbfbudkp4fzmw97zrdk4yvkbi';

    const chainstate = $page.data.chainstate;
    const milestones = Math.floor(chainstate.id / 5);
    const total_supply = (milestones * 1000) + (milestones * 50) + (chainstate.blocks * 1000);
    console.log(chainstate, milestones);
</script>

<p class="title">Chain Stats</p>
<div class="stats-container">
    <div class="column">
        <p class="header">Height</p>
        <a class="text" href="{base}/height/{$page.data.chainstate.id}">{$page.data.chainstate.id.toLocaleString(undefined)}</a>
    </div>

    <div class="column">
        <p class="header">Weight</p>
        <p class="text">
            {weight.toFixed(2) + unitstr}
        </p>
    </div>

    <div class="column">
        <p class="header">Total Supply</p>
        <p class="text">
            {total_supply.toLocaleString(undefined)}
        </p>
    </div>

    <div class="column">
        <p class="header">Blocks</p>
        <p class="text">{$page.data.chainstate.blocks.toLocaleString(undefined)}</p>
    </div>

    <div class="column">
        <p class="header">Votes</p>
        <p class="text">{$page.data.chainstate.votes.toLocaleString(undefined)}</p>
    </div>

    <div class="column">
        <p class="header">Difficulty</p>
        <p class="text">{$page.data.chainstate.currentDifficulty}</p>
    </div>

    <div class="column">
        <p class="header">Transactions</p>
        <p class="text">{$page.data.chainstate.transactions.toLocaleString(undefined)}</p>
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
                Block reward
            {:else if transactionType == 2}
                Stake reward
            {:else if transactionType == 3}
                Contract
            {:else if transactionType == 4}
                Reg Validator
            {:else if transactionType == 5}
                Dev reward
            {:else}
                n/a
            {/if}
        </p>
        {/each}
    </div>

    <div class="column">
        <p class="header">Sender</p>
        {#each $page.data.transactions as {from}, i}
            <!-- = null address-->
            {#if from == null || from == null_address}
                <p class="text"><br/></p>
            {:else}
                <a class="text" href="{base}/ledger/{from}">{from}</a>
            {/if}
        {/each}
    </div>

    <div class="column">
        <p class="header">Recipient</p>
        {#each $page.data.transactions as {to}, i}
            {#if to == null || to == null_address}
                <p class="text"><br/></p>
            {:else}
            <a class="text" href="{base}/ledger/{to}">{to}</a>
            {/if}
        {/each}
    </div>

    <div class="column">
        <p class="header">Value</p>
        {#each $page.data.transactions as {value}, i}
        <p class="text">{(value / 1_000_000).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
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
