<script lang="ts">
    import './style.scss'
    
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
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />`
        },
        {
            title: "Buat Laporan",
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.357.205c-.466.269-1.054.13-1.362-.314l-1.39-2.012c-.273-.395-.411-.866-.38-1.343l.032-.438m6.305-12.74c.253-.962.584-1.892.985-2.783.247-.55.06-1.21-.463-1.511l-.357-.205c-.466-.269-1.054-.13-1.362.314l-1.39 2.012c-.273.395-.411.866-.38 1.343l.032.438m1.892 4.67c3.35 0 6.066 2.015 6.066 4.5 0 2.485-2.716 4.5-6.066 4.5m-1.892-9 1.892 0m-1.892 9 1.892 0" />`
        },
        {
            title: "Lihat Informasi Publik",
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.052 1.26l-1.535-.146a.75.75 0 0 0-.711.404l-.39.78c-.012.023-.025.047-.037.071l-.033.051c-.004.006-.007.013-.011.019l-.46.718a5.076 5.076 0 0 0-.176.364l-.358.823a2.25 2.25 0 0 0 1.846 3.151h4.293c1.036 0 1.875-.84 1.875-1.875v-.382a3.676 3.676 0 0 1 2.328-3.441 5.25 5.25 0 0 1 3.233.046l.264.11a.75.75 0 0 0 .937-.363l1.256-2.513a.75.75 0 0 0-.34-.943L21.25 12l-.178-.071a1.125 1.125 0 0 0-.736 2.14l.178.071a.75.75 0 0 1 .34.943l-1.256 2.513a.75.75 0 0 1-.937.363l-.264-.11a6.75 6.75 0 0 0-4.157-.06 5.176 5.176 0 0 0-3.278 4.847v.382c0 .345-.28.625-.625.625H6.054a.75.75 0 0 1-.615-1.05l.358-.823c.044-.1.099-.199.162-.294l.46-.718c.004-.006.007-.013.011-.019l.033-.051c.012-.024.025-.048.037-.071l.39-.78a2.25 2.25 0 0 1 2.133-1.212l1.535.146a2.456 2.456 0 0 0 2.703-3.241L12.85 14.25l1.114-1.393c1.02-.85.705-2.527-.534-2.942l-.143-.048a.75.75 0 0 0-.387-.295 3.75 3.75 0 0 0 1.935-1.477l.51-.766c.106-.16.075-.373-.072-.496l-1.068-.89a2.25 2.25 0 0 1-.81-1.728v-.568a2.25 2.25 0 0 0-2.25-2.25H9.75a2.25 2.25 0 0 0-2.25 2.25v.81c0 .621-.504 1.125-1.125 1.125H5.25a2.25 2.25 0 0 0-2.25 2.25v4.5c0 1.242 1.008 2.25 2.25 2.25h.31c.498 0 .93.329 1.068.807l.125.43c.13.447.537.752.997.752h1.332c.195 0 .382-.078.52-.217l.803-.803c.148-.148.35-.23.56-.23h1.22c.414 0 .75-.336.75-.75v-.81c0-.414-.336-.75-.75-.75h-1.22a.75.75 0 0 1-.53-.22l-.803-.803a2.25 2.25 0 0 0-1.59-.659H5.25A3.75 3.75 0 0 1 1.5 12V7.5a3.75 3.75 0 0 1 3.75-3.75h1.125V3.03a3.75 3.75 0 0 1 3.75-3.75h2.625a3.75 3.75 0 0 1 3.75 3.75Z" />`
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
            
        <section class="grid grid-cols-3 gap-3 relative z-10 mt-4">
            {#each services as service}
                <button class="service-card flex flex-col items-center justify-between p-3 text-center transition-transform active:scale-95">
                    <div class="icon-wrapper mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                            {@html service.icon}
                        </svg>
                    </div>
                    <span class="text-[10px] leading-tight font-medium text-white">
                        {service.title}
                    </span>
                </button>
            {/each}
        </section>
    </header>
</div>