<script lang="ts">
    import './style.scss'
    import { FileText, Megaphone, Info } from "lucide-svelte";
    import Carousel from '$lib/components/Carousel.svelte';

	const dataSlides = [
		{ 
			title: "Prabowo Hamil", 
			content: "Blablablabla kejadian sama teddy", 
			info: "Info type" 
		},
		{ 
			title: "Update IKN", 
			content: "Progres pembangunan istana negara", 
			info: "Berita" 
		}
	];
    
    const { imageUrl = null, name = "Kakikukeko" } = $props<{
    imageUrl?: string | null;
        name?: string;
    }>();
    let imageError = false;
    const initial = name?.charAt(0).toUpperCase() ?? name[0];

    // Modular data for the service cards
    const services = [
        {
            title: "Ajukan Permohonan Pelayanan",
            icon: FileText
        },
        {
            title: "Buat Laporan",
            icon: Megaphone
        },
        {
            title: "Lihat Informasi Publik",
            icon: Info
        }
    ];


    
</script>

<svelte:head>
    <title>KakiKuKeKo — Layanan Publik Digital</title>
</svelte:head>

<div class="max-w-3xl mx-auto bg-red-100 min-h-screen relative pb-24">
    <!-- Header -->
    <header class="shadow-xl px-6 lg:px-12 py-4 lg:py-8">
        <!-- CIRCLES -->
        <div class="circle-1 w-[30%] lg:w-[20%]"></div>
        <div class="circle-2 w-[60%] lg:w-[40%] left-[-30%] lg:left-[-20%]"></div>

        <section class="flex items-center justify-between">
            <div class="text-sm text-white">
                <p class="opacity-75">Welcome!</p>
                <p class="font-bold">{name}</p>
            </div>
            <div class="h-10 w-10 rounded-full bg-white/15 border-2 border-white/30 overflow-hidden flex items-center justify-center text-white font-medium">
                {#if imageUrl}
                    <img 
                    src={imageUrl} 
                    alt="Profile"
                    class="h-full w-full object-cover"
                    />
                {:else}
                    {initial}
                {/if}
            </div>
        </section>
            
        <section class="grid grid-cols-3 gap-2 lg:gap-3 relative z-10 mt-4">
            {#each services as service}
            <button class="service-card flex flex-col items-center justify-between p-3 text-center transition-transform active:scale-95">
                <div class="icon-wrapper mb-3">
                    <service.icon class="w-8 h-8 text-white" />
                </div>

                <span class="text-[10px] lg:text-sm leading-tight font-medium text-white">
                    {service.title}
                </span>

            </button>
            {/each}
        </section>
        
        <Carousel />
    </header>
</div>
