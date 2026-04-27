<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface CardItem {
		theme: string;
		badge: string;
		title: string;
		desc: string;
		time: string;
		action: string;
		iconPath: string;
	}

	// Data modular untuk carousel
	const items: CardItem[] = [
		{
			theme: 'theme-warning',
			badge: 'Peringatan',
			title: 'Banjir di Jl. Mulawarman — Ketinggian 30cm',
			desc: 'Warga diimbau menghindari ruas Jl. Mulawarman arah Pasar Baru. Tim BPBD sudah dikerahkan ke lokasi.',
			time: '2 menit lalu · Balikpapan Barat',
			action: 'Lihat →',
			iconPath:
				'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'
		},
		{
			theme: 'theme-new',
			badge: 'Laporan Baru',
			title: 'Lampu Jalan Mati — Jl. Sudirman KM 5',
			desc: 'Dilaporkan oleh warga pada pukul 19.24. Status: diteruskan ke Dinas PU. Estimasi perbaikan 2x24 jam.',
			time: '14 menit lalu · Balikpapan Selatan',
			action: 'Pantau →',
			iconPath: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
		},
		{
			theme: 'theme-info',
			badge: 'Informasi Publik',
			title: 'APBD Perubahan 2025 Telah Dipublikasikan',
			desc: 'Dokumen APBD Perubahan Kota Balikpapan Tahun Anggaran 2025 kini tersedia di portal Informasi Publik.',
			time: '1 jam lalu · Portal Resmi',
			action: 'Unduh →',
			iconPath: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5'
		}
	];

	let current = $state(0);
	let autoTimer: ReturnType<typeof setInterval>;

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

	onMount(startAuto);
	onDestroy(stopAuto);
</script>

<div class="carousel-container w-full lg:min-w-[40%]">
	<div class="carousel-viewport">
		{#each items as item, i}
			{#if i === current}
				<div
					class="c-card {item.theme}"
					in:fly={{ y: 24, duration: 600, easing: cubicOut }}
					out:fade={{ duration: 300 }}
				>
					<div class="c-badge">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<path d={item.iconPath} stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						{item.badge}
					</div>

					<div class="c-content">
						<h3 class="c-title">{item.title}</h3>
						<p class="c-desc">{item.desc}</p>
					</div>

					<div class="c-footer">
						<span class="c-time">{item.time}</span>
						<button class="c-action" onclick={() => console.log('Action Clicked')}>
							{item.action}
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
		margin-top: 10px;
		opacity: 1;
	}

	.carousel-viewport {
		position: relative;
		height: 170px;
		display: grid;
		place-items: center;
	}

	.c-card {
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
			background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
			border-radius: 50%;
		}
	}

	.theme-warning {
		background: linear-gradient(135deg, #b45309 0%, #92400e 100%);
	}
	.theme-new {
		background: linear-gradient(135deg, #1a7a50 0%, #0b4d33 100%);
	}
	.theme-info {
		background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
	}

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

		svg {
			width: 12px;
			height: 12px;
		}
	}

	.c-title {
		font-size: 14px;
		font-weight: 800;
		line-height: 1.35;
		margin: 0;
	}

	.c-desc {
		font-size: 11.5px;
		line-height: 1.5;
		opacity: 0.85;
		margin: 0;
	}

	.c-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: auto;
	}

	.c-time {
		font-size: 10px;
		opacity: 0.6;
	}

	.c-action {
		background: rgba(255, 255, 255, 0.2);
		border: none;
		color: white;
		padding: 5px 12px;
		border-radius: 20px;
		font-size: 10px;
		font-weight: 700;
		cursor: pointer;
	}

	.carousel-dots {
		display: flex;
		justify-content: center;
		gap: 6px;
		margin-top: 14px;
	}

	.dot {
		height: 5px;
		width: 5px;
		border-radius: 5px;
		background: rgba(255, 255, 255, 0.3);
		border: none;
		padding: 0;
		transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		cursor: pointer;

		&.active {
			width: 22px;
			background: white;
		}
	}
</style>
