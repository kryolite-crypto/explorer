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

    .notbutton {
        background: none;
        color: white;
        margin: 0;
        border: none;
        padding: 0;
        font: inherit;
        margin-right: 15px;
    }

    .notbutton:hover {
        cursor: pointer;
        color: darkgray;
    }

    .menu {
        position: absolute;
        background-color: #191919FF !important;
        border: 1px solid darkgray;
        background: inherit;
        padding: 0;
        z-index: 10;
    }

    /** todo: should be dynamic!*/
    .dappsmenu {
        margin-left: -55px;
    }

    /** todo: should be dynamic!*/
    .linksmenu {
        margin-left: -12px;
    }

    .menu li {
        display: block;
        background-color: #191919FF !important;
    }

    .menu li:hover {
        cursor: pointer;
        background-color: darkgray !important;
    }

    .menu a {
        display: block;
        padding-left: 0;
        display: flex;
        align-items: center;
        margin-left: 0 !important;
        padding: 5px;
    }

    .menu a:hover {
        color: white;
    }

    .mdi {
        font-size: 18px;
        color: white;
        margin-right: 5px;
        margin-top: -2px;
    }
</style>

<script>
// @ts-nocheck

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

    let isDappsDropdownOpen = false
    let isLinksDropdownOpen = false

    const handleDappsDropdownClick = () => {
        isDappsDropdownOpen = !isDappsDropdownOpen // togle state on click
    }

    const handleLinksDropdownClick = () => {
        isLinksDropdownOpen = !isLinksDropdownOpen // togle state on click
    }

    const handleDappsDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
        // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
        if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null) 
        isDappsDropdownOpen = false
    }

    const handleLinksDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
        // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
        if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null) 
        isLinksDropdownOpen = false
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
        <a href="{base}/nodes" class:active={$page.url.pathname == base + "/nodes"}>Nodes</a>
        <a href="{base}/richlist" class:active={$page.url.pathname == base + "/richlist"}>Richlist</a>
        <a href="{base}/validators" class:active={$page.url.pathname == base + "/validators"}>Validators</a>
        <div class="dropdown" on:focusout={handleDappsDropdownFocusLoss}>
            <button class="notbutton" on:click={handleDappsDropdownClick}>DApps</button>
            <ul class="menu dappsmenu" style:visibility={isDappsDropdownOpen ? 'visible' : 'hidden'}>
                <li><a href="http://kryolite.io"><span class="mdi mdi-faucet"></span>Faucet</a></li>
                <li><a href="https://kryolite-crypto.github.io/kryolottery"><span class="mdi mdi-slot-machine"></span>Saturday Night Lotto</a></li>
            </ul>
        </div>
        <div class="dropdown" on:focusout={handleLinksDropdownFocusLoss}>
            <button class="notbutton" on:click={handleLinksDropdownClick}>Links</button>
            <ul class="menu linksmenu" style:visibility={isLinksDropdownOpen ? 'visible' : 'hidden'}>
                <li><a href="https://discord.gg/wfPRKJtrUP">Discord</a></li>
                <li><a href="https://github.com/kryolite-crypto/kryolite">Github</a></li>
                <li><a href="http://kryolite.io">Website</a></li>
            </ul>
        </div>
    </div>
</div>

<slot />