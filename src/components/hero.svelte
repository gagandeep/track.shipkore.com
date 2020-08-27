<script>
    import queryString from 'query-string';

    import Checkpoints from './checkpoints.svelte';
    export let checkpoints = [];
</script>

<section class="text-gray-700 body-font">
    <div class="container px-5 py-2 mx-auto flex flex-wrap items-top">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <Checkpoints {checkpoints} />
        </div>
        <form
            class="lg:w-2/6 md:w-1/2 md:border-l rounded-lg p-8 flex flex-col
            md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Track a Package
            </h2>
            <input
                class="bg-white rounded border border-gray-400
                focus:outline-none focus:border-indigo-500 text-base px-4 py-2
                mb-4"
                name="waybill"
                placeholder="Tracking/Waybill Number"
                type="text" />
            <input
                class="bg-white rounded border border-gray-400
                focus:outline-none focus:border-indigo-500 text-base px-4 py-2
                mb-4"
                name="provider"
                placeholder="Courier provider"
                type="text" />
            <button
                class="text-white bg-purple-500 border-0 py-2 px-8
                focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Track
            </button>
            <p class="text-xs text-gray-500 mt-3">
                Analysis and more through tracking from our paid plans.
            </p>
        </form>
    </div>
</section>
