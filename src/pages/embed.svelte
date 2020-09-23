

<script>
    import queryString from 'query-string';
    import { onMount } from 'svelte'
  

    import Serial from '../components/serial.svelte';

    import { TrackRequest } from '../services/API';

    export let params;
    let promise;
    promise = TrackRequest(params['provider'], params['waybill']);
    
</script>



<svelte:head>
    <title>Track order from {params['provider']}</title>
</svelte:head>
{#await promise}
    <p>...waiting</p>
{:then trackResp}
    <Serial checkpoints={trackResp.result.checkpoints} />
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
