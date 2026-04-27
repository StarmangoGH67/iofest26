<script lang="ts">
  import type { AdministrasiItem } from '$lib/data/index';

  interface Props {
    items?: AdministrasiItem[];
  }

  const { items = [] }: Props = $props();
</script>

<section class="mx-4 mt-8">
    <div class="flex items-center gap-2 mb-1">
        <span class="w-5 h-0.5 bg-green-600 rounded-full"></span>
        <p class="text-green-600 text-[10px] font-bold uppercase tracking-widest">
            Administrasi
        </p>
    </div>
    <h2 class="text-gray-800 text-2xl font-bold mb-1">
        Layanan <span class="text-green-600">Administrasi</span>
    </h2>
    <p class="text-gray-500 text-xs leading-relaxed mb-5">
        Urus keperluan administrasi kependudukan, pajak daerah, dan perizinan secara digital, cepat, mudah, dan terpadu.
    </p>

    <!-- Timeline -->
    <div class="relative">
        <div class="absolute left-5 top-0 bottom-0 w-0.5 bg-green-200 rounded-full z-0"></div>
        <div class="flex flex-col gap-3">
            {#each items as item, i}
            <div class="flex gap-3 items-start relative">
                <div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm z-10 shrink-0 shadow-md">
                    {item.number}
                </div>
                <div class="flex-1 bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex items-start justify-between gap-2">
                    <div>
                        <p class="text-gray-800 font-semibold text-sm">{item.title}</p>
                        <p class="text-gray-400 text-xs mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button class="text-gray-300 hover:text-gray-500 transition-colors shrink-0 mt-0.5">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            {/each}
        </div>
    </div>

    <button class="w-full mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-md">
        Lihat Semua Layanan
    </button>
</section>