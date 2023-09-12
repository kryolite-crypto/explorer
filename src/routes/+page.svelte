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
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { instance } from "@viz-js/viz";

    onMount(async () => {
        let viz = await instance();
        let graph = document.getElementById("graph");

        if (graph == null) {
            return;
        }

        graph.appendChild(viz.renderSVGElement($page.data.graph));

        setTimeout(() => {
            var ellipses = graph?.getElementsByTagName("ellipse") ?? [];

            if (ellipses.length > 0) {
                ellipses[0].scrollIntoView({behavior: "instant", block: "center", inline: "center"});
            }
        });

        let mouseDown = false;
        let startX = 0, startY = 0, scrollLeft = 0, scrollTop = 0;

        // @ts-ignore
        let startDragging = function (e) {
            if (graph == null) {
                return;
            }

            mouseDown = true;
            startX = e.pageX - graph.offsetLeft;
            startY = e.pageY - graph.offsetTop;
            scrollLeft = graph.scrollLeft;
            scrollTop = graph.scrollTop;
        };

        // @ts-ignore
        let stopDragging = function (event) {
            mouseDown = false;
        };

        graph.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) { return; }

            if (graph == null) {
                return;
            }

            const x = e.pageX - graph.offsetLeft;
            const scrollX = x - startX;
            graph.scrollLeft = scrollLeft - scrollX;

            const y = e.pageY - graph.offsetTop;
            const scrollY = y - startY;
            graph.scrollTop = scrollTop - scrollY;
        });

        // Add the event listeners
        graph.addEventListener('mousedown', startDragging, false);
        graph.addEventListener('mouseup', stopDragging, false);
        graph.addEventListener('mouseleave', stopDragging, false);
    });


</script>

<p class="title">Chain Stats</p>
<div class="stats-container">
    <div class="column">
        <p class="header">Height</p>
        <a class="text" href="/height/{$page.data.chainstate.height}">{$page.data.chainstate.height}</a>
    </div>

    <div class="column">
        <p class="header">Weight</p>
        <p class="text">
            {#if ($page.data.chainstate.weight / 1_000_000) > 1_000_000_000_000}
                {($page.data.chainstate.weight / 1_000_000 / 1_000_000_000_000).toFixed(2) + 'T'}
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
        <a class="text" href="/tx/{transactionId}">{transactionId.substring(0, 12)}</a>
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
                <a class="text" href="/height/{height}">{height}</a>
            {/if}
        {/each}
    </div>

    <div class="column">
        <p class="header">Sender</p>
        {#each $page.data.transactions as {from}, i}
            {#if from == null || from == "kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
                <p class="text"><br/></p>
            {:else}
                <a class="text" href="/ledger/{from}">{from}</a>
            {/if}
        {/each}
    </div>

    <div class="column">
        <p class="header">Recipient</p>
        {#each $page.data.transactions as {to}, i}
            {#if to == null || to == "kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
                <p class="text"><br/></p>
            {:else}
            <a class="text" href="/ledger/{to}">{to}</a>
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
