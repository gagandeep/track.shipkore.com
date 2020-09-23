<script>
    import moment from 'moment-timezone';
    export let checkpoint = {};
    var tz = moment.tz.guess();
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
            <div class="text-gray-500">
                {moment
                    .utc(checkpoint.checkpoint_time)
                    .tz(tz)
                    .format('lll')}
            </div>
        </div>
    </div>
    <div class="ml-8 font-semibold">
        <span>{checkpoint.status}</span>
        -
        <span>{checkpoint.message}</span>
    </div>
    <div class="ml-8">{checkpoint.location}</div>
</li>
