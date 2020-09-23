<script>
    import { onMount } from 'svelte';
    import orderBy from 'lodash/orderBy';
    import Checkpoint from './checkpoint.svelte';
    export let checkpoints = [];
    onMount(async () => {
        checkpoints = orderBy(checkpoints, ['checkpoint_time'], ['desc']);
    });
</script>

<div class="relative w-1/1 m-8">
    <div class="my-5">
        <span class="text-xl">Shipment progress</span>
        <span>(in local time)</span>
    </div>
    <div
        class="border-r-2 border-gray-200 border-dotted absolute h-full z-0"
        style="left: 7px;" />
    <ul class="list-none m-0 p-0">
        {#each checkpoints as checkpoint}
            <Checkpoint {checkpoint} />
        {/each}
    </ul>
</div>
