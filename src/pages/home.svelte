

<script>
    import queryString from 'query-string';
  

    import Hero from '../components/hero.svelte';

    import { TrackRequest } from '../services/API';

    let parsed = {};
    export let params
    let promise
    onMount(async () => {
        promise = TrackRequest(params['provider'], params['waybill']);
  });
    
</script>



<svelte:head>
    <title>Track order from {parsed['provider']}</title>
</svelte:head>
{#await promise}
    <p>...waiting</p>
{:then trackResp}
    <Hero checkpoints={trackResp.result.checkpoints} />
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
