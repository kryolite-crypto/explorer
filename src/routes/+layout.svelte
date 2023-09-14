<style>
    input {
        background-color: #191919FF;
        border-color: darkgray;
        border-style: solid;
        border-width: 1px;
    }

    .topbar {
        display: flex;
        justify-content: space-between;
        height: 32px;
    }

    .search {
        width: 100%;
        margin-right: 20px;
        color: white;
        padding-left: 15px;
        height: 32px;
    }

    .links {
        border-color: darkgray;
        border-style: solid;
        border-width: 1px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .links > a {
        margin-right: 15px;
    }

    a.active {
        font-weight: bold;
    }

    .links a:first-child {
        margin-left: 15px;
    }

    input.search::placeholder {
        opacity: 0.5;
        color: white;
    }

    .form {
        width: 100%;
        margin-right: 20px;
    }

    .logo {
        margin: 0;
        margin-right: 20px;
        margin-top: -1px;
        opacity: 0.7;
    }
</style>

<script>
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    
    let searchWord = '';

    function search() {
        if(Number.isInteger(+searchWord)) {
            goto(`${base}/height/${searchWord}`);
        }
        else if (searchWord.startsWith("kryo:")) {
            goto(`${base}/ledger/${searchWord}`);
        }
        else {
            goto(`${base}/tx/${searchWord}`);
        }

        searchWord = '';
    }
</script>

<div class="topbar">
    <div><a href="{base}/">
<pre class="logo">█▄▀ █▀▄ ▀▄▀ ▄▀▄ █   █ ▀█▀ ██▀
█ █ █▀▄  █  ▀▄▀ █▄▄ █  █  █▄▄</pre>
</a>
    </div>
    <form class="form" on:submit|preventDefault={search}>
        <input class="search" type="search" placeholder="Search (address, txid, height)" bind:value={searchWord} on:submit={() => search()}>
    </form>
    <div class="links">
        <a href="{base}/" class:active={$page.url.pathname == base + "/"}>Overview</a>
        <a href="{base}/richlist" class:active={$page.url.pathname == base + "/richlist"}>Richlist</a>
        <a href="{base}/validators" class:active={$page.url.pathname == base + "/validators"}>Validators</a>
        <p style="margin-right: 15px">|</p>
        <a href="https://kryolite.io">Website</a>
        <a href="https://github.com/kryolite-crypto/kryolite">Github</a>
        <a href="https://discord.gg/wfPRKJtrUP">Discord</a>
    </div>
</div>

<slot />