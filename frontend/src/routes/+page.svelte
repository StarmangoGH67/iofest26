<script lang="ts">
	import { FileText, Megaphone, Info } from 'lucide-svelte';
	import Header from '$lib/components/Landing/Header.svelte';

	// User Data (could come from a Load function later)
	const user = {
		name: 'Kakikukeko',
		imageUrl: null
	};

	// Modular Service Data
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

<div class="relative mx-auto min-h-screen max-w-6xl bg-[#F2F5F3] pb-24">
	<Header 
		name={user.name} 
		imageUrl={user.imageUrl} 
		{services} 
	/>

	<main class="px-6 py-8">
		</main>
</div>