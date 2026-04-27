<script lang="ts">
    import type { ReportCategory, StatItem } from '$lib/data/index';

    interface Props {
        categories?: ReportCategory[];
        statistics?: StatItem[];
    }

    const { categories = [], statistics = [] }: Props = $props();
</script>

<section class="mx-4 mt-8">
    <div class="flex items-center gap-2 mb-1">
        <span class="w-5 h-0.5 bg-green-600 rounded-full"></span>
        <p class="text-green-600 text-[10px] font-bold uppercase tracking-widest">
            Pelaporan
        </p>
    </div>
    <h2 class="text-gray-800 text-2xl font-bold mb-1">
        Layanan <span class="text-green-600">Pelaporan</span>
    </h2>
    <p class="text-gray-500 text-xs leading-relaxed mb-4">
        Laporkan kerusakan fasilitas publik dan layanan pemerintah. Setiap laporan diproses dan ditindaklanjuti secara transparan.
    </p>

    <!-- Grid -->
    <div class="grid grid-cols-4 gap-3 mb-4">
        {#each categories as cat}
        <button class="flex flex-col items-center gap-1.5 group">
            <div class="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-xl group-hover:bg-red-100 transition-colors shadow-sm">
                {cat.icon}
            </div>
            <span class="text-[10px] text-gray-500 text-center leading-tight">
                {cat.label}
            </span>
        </button>
        {/each}
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-3 gap-3 mb-4">
        {#each statistics as stat}
        <div class="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
            <p class="text-green-700 font-bold text-lg leading-none">
                {stat.value}
            </p>
            <p class="text-gray-400 text-[10px] mt-1">
                {stat.label}
            </p>
        </div>
        {/each}
    </div>

    <!-- Buttons -->
    <button class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-md mb-3">
        Laporan Pelayanan
    </button>
    <button class="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-xl transition-colors text-sm">
        Laporan Fasilitas Umum
    </button>
</section>