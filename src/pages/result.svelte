

<script>
    import queryString from 'query-string';
    import { onMount } from 'svelte'
    import Nav from '../components/nav.svelte';
    import Footer from '../components/footer.svelte';


    import Hero from '../components/hero.svelte';

    import { TrackRequest } from '../services/API';

    export let params;
    let promise;
    promise = TrackRequest(params['provider'], params['waybill']);
    
</script>



<svelte:head>
    <title>Track order from {params['provider']}</title>
</svelte:head>

<Nav />

<section class="text-gray-700 body-font min-h-screen">
    <div class="container px-5 py-2 mx-auto flex flex-wrap items-top">
{#await promise}
<div class="loader ease-linear rounded-full border-8 border-t-8 my-40 border-gray-200 h-10 w-10 mx-auto"></div>
{:then trackResp}
    <Hero checkpoints={trackResp.result.checkpoints} />
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
</div>
</section>

<Footer />

<style>
    .loader {
      border-top-color: #3498db;
      -webkit-animation: spinner 1.5s linear infinite;
      animation: spinner 1.5s linear infinite;
    }
    
    @-webkit-keyframes spinner {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spinner {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    </style>
    