<script>
    import queryString from 'query-string';
    import Nav from './components/nav.svelte';
    import Hero from './components/hero.svelte';
    import Footer from './components/footer.svelte';

    import Checkpoints from './components/checkpoints.svelte';
    import { TrackRequest } from './services/API';
    let menuItems = [
        { link: '#', name: 'Docs' },
        { link: '#', name: 'Home' },
        { link: '#', name: 'Blog' },
    ];

    let parsed = {};

    if (typeof window !== 'undefined') {
        parsed = queryString.parse(window.location.search);
    }
    let promise;
    if (parsed['provider'] || parsed['waybill']) {
        promise = TrackRequest(parsed['provider'], parsed['waybill']);
    } else {
        promise = new Promise((resolve, reject) => {
            reject(new Error('Something went wrong'));
        });
    }
</script>

<svelte:head>
    <title>Track order from {parsed['provider']}</title>
</svelte:head>
<Nav {menuItems} />
{#await promise}
    <p>...waiting</p>
{:then trackResp}
    <Hero checkpoints={trackResp.result.checkpoints} />

{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
<Footer />
