<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
</script>

<p class="title">Richlist</p>
<div class="container">
    <div class="column">
        <p class="header">Address</p>
        {#each $page.data.ledger as {address}, i}
            <a class="text" href="{base}/ledger/{address}">{address}</a>
        {/each}
    </div>

    <div class="column">
        <p class="header">Value</p>
        {#each $page.data.ledger as {balance}, i}
        <p class="text">{(balance / 1_000_000).toFixed(2)}</p>
        {/each}
    </div>
</div>