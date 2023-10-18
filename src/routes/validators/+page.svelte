<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
</script>

<p class="title">Validators</p>
<div class="container">
    <div class="column">
        <p class="header">Address</p>
        {#each $page.data.validators as {nodeAddress}, i}
            <a class="text" href="{base}/ledger/{nodeAddress}">{nodeAddress}</a>
        {/each}
    </div>

    <div class="column">
        <p class="header">Stake</p>
        {#each $page.data.validators as {stake}, i}
        <p class="text">{(stake / 1_000_000).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        {/each}
    </div>

    <div class="column">
        <p class="header">Reward Address</p>
        {#each $page.data.validators as {rewardAddress}, i}
            {#if rewardAddress != 'kryo:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
                <a class="text" href="{base}/ledger/{rewardAddress}">{rewardAddress}</a>
            {/if}
        {/each}
    </div>
</div>
