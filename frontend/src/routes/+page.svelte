<script lang="ts">
	import './style.scss';
	import { FileText, Megaphone, Info } from 'lucide-svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	const dataSlides = [
		{
			title: 'Prabowo Hamil',
			content: 'Blablablabla kejadian sama teddy',
			info: 'Info type'
		},
		{
			title: 'Update IKN',
			content: 'Progres pembangunan istana negara',
			info: 'Berita'
		}
	];

	const { imageUrl = null, name = 'Kakikukeko' } = $props<{
		imageUrl?: string | null;
		name?: string;
	}>();
	let imageError = false;
	const initial = $derived(name?.charAt(0).toUpperCase() ?? name[0]);

	// Modular data for the service cards
	const services = [
		{
			title: 'Ajukan Permohonan Pelayanan',
			icon: FileText
		},
		{
			title: 'Buat Laporan',
			icon: Megaphone
		},
		{
			title: 'Lihat Informasi Publik',
			icon: Info
		}
	];
</script>

<svelte:head>
	<title>KakiKuKeKo — Layanan Publik Digital</title>
</svelte:head>

<div class="relative mx-auto min-h-screen max-w-3xl bg-red-100 pb-24">
	<!-- Header -->
	<header class="px-6 py-4 shadow-xl lg:px-12 lg:py-8">
		<!-- CIRCLES -->
		<div class="circle-1 w-[30%] lg:w-[20%]"></div>
		<div class="circle-2 left-[-30%] w-[60%] lg:left-[-20%] lg:w-[40%]"></div>

		<section class="flex items-center justify-between">
			<div class="text-sm text-white">
				<p class="opacity-75">Welcome!</p>
				<p class="font-bold">{name}</p>
			</div>
			<div
				class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white/30 bg-white/15 font-medium text-white"
			>
				{#if imageUrl}
					<img src={imageUrl} alt="Profile" class="h-full w-full object-cover" />
				{:else}
					{initial}
				{/if}
			</div>
		</section>

		<section class="relative z-10 mt-4 grid grid-cols-3 gap-2 lg:gap-3">
			{#each services as service}
				<button
					class="service-card flex flex-col items-center justify-between p-3 text-center transition-transform active:scale-95"
				>
					<div class="icon-wrapper mb-3">
						<service.icon class="h-8 w-8 text-white" />
					</div>

					<span class="text-[10px] leading-tight font-medium text-white lg:text-sm">
						{service.title}
					</span>
				</button>
			{/each}
		</section>

		<Carousel />
	</header>
</div>
