<script>
    import router from 'page';

    // Include our Routes
    import home from './pages/home.svelte';
    import result from './pages/result.svelte';
    import embed from './pages/embed.svelte';

    // Variables
    let page;
    let params;


    // Set up the pages to watch for
    router('/', () => window.location = '//www.shipkore.com'); // Set up the router to start and actively watch for changes
    router(
        '/:provider/:waybill',

        // Before we set the component
        (ctx, next) => {
            params = ctx.params;
            next();
        }, // Finally set the component
        () => (page = result),
    );
    router(
        '/:provider/:waybill/embed',

        // Before we set the component
        (ctx, next) => {
            params = ctx.params;
            next();
        }, // Finally set the component
        () => (page = embed),
    );
    router.start();
</script>

<svelte:component this={page} {params} />
