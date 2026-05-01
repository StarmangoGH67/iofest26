<script lang="ts">
    import PelayananHeader from "$lib/components/pelayanan_publik/PelayananHeader.svelte";
    import StatCard from "$lib/components/StatCard.svelte";
    import ServiceButton from "$lib/components/ServiceButton.svelte";

    let { data } = $props();

    const {header, stats, categories} = data;
    
</script>

<svelte:head>
    <title>{header.title}</title>
</svelte:head>

<div class="min-h-screen bg-[#F8FAFC] pb-24">
    <PelayananHeader
        title = {header.title}
        description = {header.description}
        icon = {header.icon}
        breadcrumb={header.breadcrumb}
        gradientFrom={header.gradientFrom}
        gradientTo={header.gradientTo}
    />

    <main class="relative z-10 mx-auto max-w-md px-5 pt-8 space-y-8">
        <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center">
            <h2 class="text-center text-[15px] font-extrabold text-[#1a1a1a] mb-2">
                Statistik Pelaporan Publik
            </h2>
            
            <div class="w-full">
                <StatCard stats={stats} />
            </div>

            <button class="mt-2 bg-[#8A9A91] hover:bg-[#78877f] text-white text-[11px] font-bold py-2.5 px-6 rounded-lg transition-colors">
                Lihat Detail Statistik ->
            </button>
        </div>

        <div>
            <h2 class="mt-2 text-center text-gray-500 text-[18px] font-bold mb-4">
                Ayookkk Lapooorr!!!!
            </h2>

            <div class="grid grid-cols-2 gap-3">
                {#each categories as item}
                    <a href="/pelaporan_fasum/{item.id}"
                        class="bg-[#F4F5F7] rounded-2xl p-4 flex items-center justify-center hover:bg-white hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-gray-100"
                    >
                        <ServiceButton
                            title={item.title}
                            icon={item.icon}
                            bgColor={item.bg}
                            iconColor={item.color}
                        />
                    </a>
                {/each}
            </div>
        </div>

    </main>
</div>