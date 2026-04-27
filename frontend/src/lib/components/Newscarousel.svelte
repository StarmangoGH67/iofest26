<script lang="ts">
    import type { NewsItem, NewsType } from '$lib/data/index';

    interface Props {
        items?: NewsItem[];
    }

    const { items = [] }: Props = $props();

    interface TypeConfig {
        bg: string;
        badge: string;
        button: string;
        buttonClass: string;
        label: string;
    }

    const typeConfig: Record<NewsType, TypeConfig> = {
        darurat: {
        bg: 'from-red-600 to-red-500',
        badge: 'bg-red-800/60 text-red-100',
        button: 'Tanggap',
        buttonClass: 'bg-white text-red-600',
        label: 'Darurat',
        },
        warning: {
        bg: 'from-amber-500 to-orange-400',
        badge: 'bg-amber-700/60 text-amber-100',
        button: 'Waspada',
        buttonClass: 'bg-white text-amber-600',
        label: 'Peringatan',
        },
        informasi: {
        bg: 'from-blue-600 to-cyan-500',
        badge: 'bg-blue-800/60 text-blue-100',
        button: 'Pantau',
        buttonClass: 'bg-white text-blue-600',
        label: 'Info type',
        },
    };

    let activeIndex = $state<number>(0);

    const current = $derived(items[activeIndex]);
    const config = $derived(typeConfig[current?.type] ?? typeConfig.informasi);

    function setActive(i: number): void {
        activeIndex = i;
    }
</script>

<div class="mx-4 mt-4">
    {#if current}
    <div class="relative rounded-2xl overflow-hidden shadow-md bg-gradient-to-r {config.bg} p-4 transition-all duration-300">
        <span class="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 {config.badge}">
            {config.label}
        </span>

        <h3 class="text-white font-bold text-base leading-tight">
            {current.title}
        </h3>
        <p class="text-white/80 text-xs mt-1 leading-relaxed">
            {current.description}
        </p>
        
        <div class="flex items-center justify-between mt-3">
            <span class="text-white/60 text-[10px]">
                {current.time} | {current.location}
            </span>
            <button class="text-xs font-semibold px-3 py-1 rounded-lg shadow {config.buttonClass}">
                {config.button}
            </button>
        </div>
    </div>
    {/if}

    <!-- Dots -->
    <div class="flex justify-center gap-1.5 mt-3">
        {#each items as _, i}
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button
            onclick={() => setActive(i)}
            class="h-1.5 rounded-full transition-all duration-300 {i === activeIndex ? 'bg-green-600 w-5' : 'bg-gray-300 w-1.5'}"
        ></button>
        {/each}
    </div>
</div>