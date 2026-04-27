<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { fly, fade } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
	import {TriangleAlert, Layers, CircleAlert, PackageCheck} from 'lucide-svelte'; 

    interface CardItem {
        theme: string;
        badge: string;
        title: string;
        desc: string;
        time: string;
		location: string; 
        action: string;
    }

    const items: CardItem[] = [
        {
            theme: 'theme-warning',
            badge: 'Peringatan',
            title: 'Banjir di Jl. Mulawarman — Ketinggian 30cm',
            desc: 'Warga diimbau menghindari ruas Jl. Mulawarman arah Pasar Baru. Tim BPBD sudah dikerahkan ke lokasi.',
            time: '2 menit lalu',
			location: 'Balikpapan Barat', 
            action: 'Lihat',
        },
        {
            theme: 'theme-news',
            badge: 'Laporan Baru',
            title: 'Lampu Jalan Mati — Jl. Sudirman KM 5',
            desc: 'Dilaporkan oleh warga pada pukul 19.24. Status: diteruskan ke Dinas PU. Estimasi perbaikan 2x24 jam.',
            time: '14 menit lalu',
			location: 'Balikpapan Selatan', 
            action: 'Pantau',
        },
        {
            theme: 'theme-info',
            badge: 'Informasi Publik',
            title: 'APBD Perubahan 2025 Telah Dipublikasikan',
            desc: 'Dokumen APBD Perubahan Kota Balikpapan Tahun Anggaran 2025 kini tersedia di portal Informasi Publik.',
            time: '1 jam lalu',
			location: 'Portal Resmi', 
            action: 'Unduh'
        }
    ];

    let current = $state(0);
    let autoTimer: ReturnType<typeof setInterval>;

    // Drag state
    let startY = 0;
    let isDragging = false;
    let hasMoved = false;

    function goTo(idx: number) {
        current = (idx + items.length) % items.length;
    }

    function startAuto() {
        stopAuto();
        autoTimer = setInterval(() => goTo(current + 1), 5000);
    }

    function stopAuto() {
        if (autoTimer) clearInterval(autoTimer);
    }

    function handleStart(e: MouseEvent | TouchEvent) {
        stopAuto();
        isDragging = true;
        hasMoved = false;
        startY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    }

    function handleMove(e: MouseEvent | TouchEvent) {
        if (!isDragging) return;
        const currentY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        if (Math.abs(currentY - startY) > 5) {
            hasMoved = true;
            e.preventDefault(); // blocks page scroll during swipe
        }
    }

    function handleEnd(e: MouseEvent | TouchEvent) {
        if (!isDragging) return;
        isDragging = false;

        if (!hasMoved) { startAuto(); return; }

        const endY = 'changedTouches' in e ? e.changedTouches[0].clientY : e.clientY;
        const diffY = startY - endY;

        if (diffY > 40) goTo(current + 1);
        else if (diffY < -40) goTo(current - 1);

        startAuto();
    }

    function handleMouseLeave() {
        if (isDragging) { isDragging = false; hasMoved = false; startAuto(); }
    }

    onMount(() => {
        startAuto();
        window.addEventListener('mouseup', handleEnd);
    });

    onDestroy(() => {
        stopAuto();
        window.removeEventListener('mouseup', handleEnd);
    });
</script>

<div class="carousel-container lg:h-50 w-full mt-2.5 lg:mt-0 lg:min-w-[40%]">
    <div 
        class="carousel-viewport mt-2"
        onmousedown={handleStart}
        onmouseup={handleEnd}
        onmousemove={handleMove}
        onmouseleave={handleMouseLeave}
        ontouchstart={handleStart}
        ontouchend={handleEnd}
        ontouchmove={handleMove}
        role="presentation"
        style="cursor: grab;"
    >
        {#each items as item, i}
            {#if i === current}
                <div
                    class="c-card lg:h-50 {item.theme}"
                    in:fly={{ y: 24, duration: 600, easing: cubicOut }}
                    out:fade={{ duration: 300 }}
                >
				{#snippet themeIcon(theme: string)}
					{#if theme === "theme-warning"} <TriangleAlert class="w-4" />
					{:else if theme === "theme-info"} <Layers class="w-4" />
					{:else if theme === "theme-news"} <PackageCheck class="w-4" />
					{/if}
				{/snippet}
				<div class="c-badge">
					{@render themeIcon(item.theme)}
                        {item.badge}
                    </div>

                    <div class="c-content">
                        <h3 class="c-title">{item.title}</h3>
                        <p class="c-desc">{item.desc}</p>
                    </div>

                    <div class="c-footer">
                        <span class="c-time">{item.time}</span>
                        <button class="c-action" onclick={(e) => { e.stopPropagation(); console.log('Action Clicked'); }}>
                            {item.action}→
                        </button>
                    </div>
                </div>
            {/if}
        {/each}
    </div>

    <div class="carousel-dots">
        {#each items as _, i}
            <button
                class="dot {i === current ? 'active' : ''}"
                onclick={() => {
                    stopAuto();
                    goTo(i);
                    startAuto();
                }}
                aria-label="Go to slide {i + 1}"
            ></button>
        {/each}
    </div>
</div>

<style lang="scss">
    
    .carousel-container {
        position: relative;
        z-index: 50;
        opacity: 1;
        user-select: none; 
    }

    .carousel-viewport {
        position: relative;
        display: grid;
        place-items: center;
        min-height: 170px;
        touch-action: none; /* Fixed: was pan-x, which blocked vertical swipe detection */
    }

    .c-card {
        position: relative;
        overflow: hidden;
        grid-area: 1 / 1;
        width: 100%;
        border-radius: 20px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(12px);
        color: white;

        &::before {
            content: '';
            position: absolute;
            top: -20px;
            right: -20px;
            width: 80px;
            height: 80px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1));
            border-radius: 50%;
        }
    }

    .theme-warning { background: linear-gradient(135deg, #b9852b 0%, #d2b638 100%); }
    .theme-emergency { background: linear-gradient(135deg, #8A1E20 0%, #EB2532 100%); }
    .theme-info { background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%); }
    .theme-news { background: linear-gradient(135deg, #1b7f52 0%, #1cb150 100%); }

    .c-badge {
        display: flex;
        align-items: center;
        gap: 6px;
        background: rgba(255, 255, 255, 0.2);
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 10px;
        font-weight: 700;
        width: fit-content;
        svg { width: 12px; height: 12px; }
    }

    .c-title { font-size: 14px; font-weight: 800; line-height: 1.35; margin: 0; }
    .c-desc { font-size: 11.5px; line-height: 1.5; opacity: 0.85; margin: 0; }
    .c-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
    .c-time { font-size: 10px; opacity: 0.6; }
    .c-action { background: rgba(255, 255, 255, 0.2); border: none; color: white; padding: 5px 12px; border-radius: 20px; font-size: 10px; font-weight: 700; cursor: pointer; }

    .carousel-dots {
        display: flex;
        justify-content: center;
        gap: 6px;
        margin-top: 14px;
    }

    .dot {
        height: 5px; width: 5px; border-radius: 5px;
        background: rgba(255, 255, 255, 0.3); border: none;
        padding: 0; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
        &.active { width: 22px; background: white; }
    }
</style>