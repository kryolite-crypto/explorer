<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
</script>

<p class="title">Transactions at Height</p>
<div class="container transactions">
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
