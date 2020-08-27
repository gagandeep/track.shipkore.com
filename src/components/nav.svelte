<script>
    let showMenu = false;
</script>

<nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3
    navbar-expand-lg mb-3">
    <div
        class="container px-4 mx-auto flex flex-wrap items-center
        justify-between">
        <div
            class="w-full relative flex justify-between lg:w-auto px-4 lg:static
            lg:block lg:justify-start">
            <a
                class="font-bold leading-relaxed inline-block mr-4 py-2
                whitespace-no-wrap uppercase text-purple-500"
                href="#pablo">
                ShipKore
            </a>
            <button
                class="text-purple-500 cursor-pointer text-xl leading-none px-3
                py-1 border border-solid border-transparent rounded
                bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                on:click={() => (showMenu = !showMenu)}>
                <svg
                    viewBox="0 0 100 80"
                    style="fill: #aaa;"
                    width="40"
                    height="40">
                    <rect width="100" height="5" />
                    <rect y="30" width="100" height="5" />
                    <rect y="60" width="100" height="5" />
                </svg>
            </button>
        </div>
        <div
            class="{!showMenu ? 'hidden' : 'flex'} lg:flex lg:flex-grow
            items-center">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
                <li class="nav-item">
                    <a
                        class="px-3 py-2 flex items-center text-xs uppercase
                        font-bold leading-snug text-purple-500 hover:opacity-75"
                        href="#pablo">
                        <i
                            class="fab fa-facebook-square text-lg leading-lg
                            text-purple-500 opacity-75" />
                        <span class="ml-2">Share</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="px-3 py-2 flex items-center text-xs uppercase
                        font-bold leading-snug text-purple-500 hover:opacity-75"
                        href="#pablo">
                        <i
                            class="fab fa-twitter text-lg leading-lg
                            text-purple-500 opacity-75" />
                        <span class="ml-2">Tweet</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="px-3 py-2 flex items-center text-xs uppercase
                        font-bold leading-snug text-purple-500 hover:opacity-75"
                        href="#pablo">
                        <i
                            class="fab fa-pinterest text-lg leading-lg
                            text-purple-500 opacity-75" />
                        <span class="ml-2">Pin</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
