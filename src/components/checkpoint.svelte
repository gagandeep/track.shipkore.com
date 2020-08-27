<script>
    import moment from 'moment';
    export let checkpoint = {};
    console.log(checkpoint);
    const checkpointTime = moment(checkpoint.checkpoint_time).format('lll');
</script>

<style>
    @keyframes appear {
        0% {
            opacity: 0;
        }
    }
</style>

<li class="mb-2 text-sm">
    <div class="flex items-center mb-1">
        <div
            class="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2
            z-10" />
        <div class="flex-1 ml-4 font-semibold">
            <div class="text-gray-500">{checkpointTime}</div>
        </div>
    </div>
    <div class="ml-8 font-semibold">
        <span>{checkpoint.status}</span>
        -
        <span>{checkpoint.message}</span>
    </div>
    <div class="ml-8">{checkpoint.location}</div>
</li>
