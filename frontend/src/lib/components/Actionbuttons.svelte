<script lang="ts">
    import type { ActionButton } from '$lib/data/index';

    interface Props {
        buttons?: ActionButton[];
    }

    const { buttons = [] }: Props = $props();
</script>

<div class="grid grid-cols-3 gap-3 bg-white rounded-2xl shadow-lg mx-4 -mt-8 relative z-20 p-4">
    {#each buttons as btn}
    <button class="flex flex-col items-center gap-2 group cursor-pointer">
        <div class="w-12 h-12 rounded-xl bg-green-50 group-hover:bg-green-100 transition-colors flex items-center justify-center text-xl shadow-sm border border-green-100">
            {btn.icon}
        </div>
        <span class="text-[10px] text-gray-600 font-medium text-center leading-tight">
            {btn.label}
        </span>
    </button>
    {/each}
</div>