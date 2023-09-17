<script>
// @ts-nocheck

    import { base } from '$app/paths';
    import { page } from '$app/stores';
</script>

<p class="title">Nodes</p>
<div class="container">
    <div class="column">
        <p class="header">Url</p>
        {#each $page.data.nodes as {url}, i}
            <p class="text">{url}</p>
        {/each}
    </div>

    <div class="column">
        <p class="header">Reachable</p>
        {#each $page.data.nodes as {isReachable}, i}
        <p class="text">{isReachable}</p>
        {/each}
    </div>

    <div class="column">
        <p class="header">Last seen</p>
        {#each $page.data.nodes as {lastSeen}, i}
        <p class="text">{Date(lastSeen)}</p>
        {/each}
    </div>
</div>
