<script lang="ts">
    import type { StatItem, PublicInfoTag } from '$lib/data/index';

    interface Props {
        stats?: StatItem[];
        tags?: PublicInfoTag[];
    }

    const { stats = [], tags = [] }: Props = $props();
</script>

<section class="mx-4 mt-8 mb-32">
    <div class="flex items-center gap-2 mb-1">
        <span class="w-5 h-0.5 bg-green-600 rounded-full"></span>
        <p class="text-green-600 text-[10px] font-bold uppercase tracking-widest">
            Transparansi
        </p>
    </div>
    <h2 class="text-gray-800 text-2xl font-bold mb-1">
        Informasi <span class="text-green-600">Publik</span>
    </h2>
    <p class="text-gray-500 text-xs leading-relaxed mb-5">
        Data, statistik, dan dokumen resmi pemerintah daerah yang terbuka dan dapat diakses oleh seluruh masyarakat.
    </p>

    <!-- Stats row -->
    <div class="grid grid-cols-3 gap-3 mb-4">
        {#each stats as stat}
        <div class="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
            <p class="text-green-700 font-bold text-lg leading-none">
                {stat.value}
            </p>
            <p class="text-gray-400 text-[10px] mt-1 leading-tight">
                {stat.label}
            </p>
        </div>
        {/each}
    </div>

    <!-- Tags -->
    <div class="flex gap-2 flex-wrap mb-5">
        {#each tags as tag}
        <span class="text-xs font-medium px-3 py-1 rounded-full {tag.color}">
            {tag.label}
        </span>
        {/each}
    </div>

    <button class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-md">
        Jelajahi Semua Informasi
    </button>
</section>