<style>
    .main {
        display:flex;
        align-content: space-between;
    }

    .info {
        min-width: 500px;
        margin-right: 20px;
        height: 100%;
    }

    .effects {
        width: 100%;
    }

    .info .text {
        margin-bottom: 15px;
        word-break: break-all;
    }
</style>

<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
</script>


<div class="main">
    <div class="info">
        <p class="title">Transaction details</p>
        <div class="container">
            <div>
                <p class="header">
                    Transaction Id
                </p>
                <p class="text">
                    {$page.data.transaction.transactionId}
                </p>
                <p class="header">
                    Transaction Type
                </p>
                <p class="text">
                    {#if $page.data.transaction.transactionType == 0}
                    Transaction
                    {:else if $page.data.transaction.transactionType == 1}
                        Genesis
                    {:else if $page.data.transaction.transactionType == 2}
                        Block
                    {:else if $page.data.transaction.transactionType == 3}
                        View
                    {:else if $page.data.transaction.transactionType == 4}
                        Contract
                    {:else if $page.data.transaction.transactionType == 5}
                        RegValidator
                    {:else if $page.data.transaction.transactionType == 6}
                        Vote
                    {:else}
                        n/a
                    {/if}
                </p>
                <p class="header">
                    Height
                </p>
                {#if $page.data.transaction.height == null}
                    <p class="text"><br/></p>
                {:else}
                    <a class="text" href="{base}/height/{$page.data.transaction.height}">{$page.data.transaction.height}</a>
                {/if}
                <p class="header">
                    Timestamp / Nonce
                </p>
                <p class="text">
                    {$page.data.transaction.timestamp}
                </p>
                <p class="header">
                    Public Key
                </p>
                <p class="text">
                    {$page.data.transaction.publicKey}
                </p>
                <p class="header">
                    Sender
                </p>
                <p class="text">
                    {#if $page.data.transaction.from == null || $page.data.transaction.from == "kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
                        <p class="text"><br/></p>
                    {:else}
                        <a class="text" href="{base}/ledger/{$page.data.transaction.from}">{$page.data.transaction.from}</a>
                    {/if}
                </p>
                <p class="header">
                    Recipient
                </p>
                <p class="text">
                    {#if $page.data.transaction.to == null || $page.data.transaction.to == "kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
                        <p class="text"><br/></p>
                    {:else}
                        <a class="text" href="{base}/ledger/{$page.data.transaction.to}">{$page.data.transaction.to}</a>
                    {/if}
                </p>
                <p class="header">
                    Value
                </p>
                <p class="text">
                    {($page.data.transaction.value / 1_000_000).toFixed(2)}
                </p>
                <p class="header">
                    Signature
                </p>
                <p class="text">
                    {$page.data.transaction.signature}
                </p>
                <p class="header">
                    Execution Result
                </p>
                <p class="text">
                    {#if $page.data.transaction.executionResult == 0}
                        Waiting
                    {:else if $page.data.transaction.executionResult == 1}
                        Verifying
                    {:else if $page.data.transaction.executionResult == 2}
                        Pending
                    {:else if $page.data.transaction.executionResult == 3}
                        Success
                    {:else if $page.data.transaction.executionResult == 4}
                        Too low balance
                    {:else if $page.data.transaction.executionResult == 5}
                        Invalid contract
                    {:else if $page.data.transaction.executionResult == 6}
                        Contract execution failed
                    {:else if $page.data.transaction.executionResult == 7}
                        Contract entrypoint missing
                    {:else if $page.data.transaction.executionResult == 8}
                        Contract snapshot missing
                    {:else if $page.data.transaction.executionResult == 9}
                        Invalid payload
                    {:else if $page.data.transaction.executionResult == 10}
                        Invalid method
                    {:else if $page.data.transaction.executionResult == 11}
                        Verify failed
                    {:else if $page.data.transaction.executionResult == 12}
                        Unknown
                    {:else if $page.data.transaction.executionResult == 13}
                        Duplicate contract
                    {:else if $page.data.transaction.executionResult == 14}
                        Stale
                    {:else}
                        n/a
                    {/if}
                </p>
                <p class="header">
                    Parents
                </p>
                <p class="text">
                    {#each $page.data.transaction.parents as parent, i}
                        <a class="text" href="{base}/tx/{parent}">{parent}</a>
                    {/each}
                </p>
                <p class="header">
                    Data
                </p>
                <p class="text">
                    {$page.data.transaction.data}
                </p>
            </div>
        </div>
    </div>

    <div class="effects">
        <p class="title">Transaction effects</p>
        <div class="container">
            <div class="column">
                <p class="header">Recipient</p>
                {#each $page.data.transaction.effects as {to}, i}
                    {#if to == null || to == "kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
                        <p class="text"><br/></p>
                    {:else}
                    <a class="text" href="{base}/ledger/{to}">{to}</a>
                    {/if}
                {/each}
            </div>
            <div class="column">
                <p class="header">TokenId</p>
                {#each $page.data.transaction.effects as {tokenId}, i}
                <a class="text" href="{base}/tx/{tokenId}">{tokenId?.substring(0, 12) ?? ''}</a>
                {/each}
            </div>
            <div class="column">
                <p class="header">Value</p>
                {#each $page.data.transaction.effects as {value}, i}
                <p class="text">{(value / 1_000_000).toFixed(2)}</p>
                {/each}
            </div>
            <div class="column">
                <p class="header">Consume Token</p>
                {#each $page.data.transaction.effects as {consumeToken}, i}
                <p class="text">{consumeToken}</p>
                {/each}
            </div>
        </div>
    </div>
</div>