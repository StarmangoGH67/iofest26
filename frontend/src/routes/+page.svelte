<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		FileText,
		Megaphone,
		Info,
		MessageSquare,
		House,
		BookText,
		Globe,
		Camera,
		Truck,
		Sun,
		Waves,
		TreePineIcon,
		LayoutGrid,
		Trash2,
		Zap,
		Search
	} from 'lucide-svelte';
	import Header from '$lib/components/Landing/Header.svelte';
	import ReportSection from '$lib/components/Landing/LayananPelaporan.svelte';
	import SectionHeader from '$lib/components/sectionHeader.svelte';
	import ActionButtons from '$lib/components/ActionButtons.svelte';
	import StatCard from '$lib/components/StatCard.svelte';
	import AccordionSection from '$lib/components/AccordionSection.svelte';
	import type { Component } from 'svelte';

	const user = { name: 'Kakikukeko', imageUrl: null };

	const services = [
		{ title: 'Ajukan Permohonan Pelayanan', icon: FileText as unknown as Component },
		{ title: 'Buat Laporan', icon: Megaphone as unknown as Component },
		{ title: 'Lihat Informasi Publik', icon: Info as unknown as Component }
	];

	interface CardItem {
		theme: string;
		title: string;
		desc: string;
		time: string;
		location: string;
		action: string;
	}

	const cardItems: CardItem[] = [
		{
			theme: 'warning',
			title: 'Banjir di Jl. Mulawarman — Ketinggian 30cm',
			desc: 'Warga diimbau menghindari ruas Jl. Mulawarman arah Pasar Baru. Tim BPBD sudah dikerahkan ke lokasi.',
			time: '2 menit lalu',
			location: 'Balikpapan Barat',
			action: 'Lihat'
		},
		{
			theme: 'news',
			title: 'Lampu Jalan Mati — Jl. Sudirman KM 5',
			desc: 'Dilaporkan oleh warga pada pukul 19.24. Status: diteruskan ke Dinas PU. Estimasi perbaikan 2x24 jam.',
			time: '14 menit lalu',
			location: 'Balikpapan Selatan',
			action: 'Pantau'
		},
		{
			theme: 'emergency',
			title: 'Lampu Jalan Mati — Jl. Sudirman KM 5',
			desc: 'Dilaporkan oleh warga pada pukul 19.24. Status: diteruskan ke Dinas PU. Estimasi perbaikan 2x24 jam.',
			time: '14 menit lalu',
			location: 'Balikpapan Selatan',
			action: 'Pantau'
		},
		{
			theme: 'info',
			title: 'APBD Perubahan 2025 Telah Dipublikasikan',
			desc: 'Dokumen APBD askjdjasdasdjsaj jsa jd asjd asji dasjik djisa djikasjkas jkas dajksd asjidasjik dajsk asjkd asjdasj asj asjd asj asjcasjkxc asjk xcas cj as jisad jisdjic sdj sdjc jshd chjsd ch jsd hjsd hjsd Perubahan Kota Balikpapan Tahun Anggaran 2025 kini tersedia di portal Informasi Publik.',
			time: '1 jam lalu',
			location: 'Portal Resmi',
			action: 'Unduh'
		}
	];

	const categories = [
		{ title: 'Jalan Rusak', icon: Truck as unknown as Component, bg: '#FDECEA', color: '#E53935' },
		{ title: 'Lampu Jalan', icon: Sun as unknown as Component, bg: '#FEF3E2', color: '#F59E0B' },
		{ title: 'Drainase', icon: Waves as unknown as Component, bg: '#E8F0FD', color: '#2563EB' },
		{
			title: 'Taman & RTH',
			icon: TreePineIcon as unknown as Component,
			bg: '#E2F5F0',
			color: '#0D9488'
		},
		{ title: 'Sampah', icon: Trash2 as unknown as Component, bg: '#FDE8F2', color: '#DB2777' },
		{
			title: 'Fasum Lain',
			icon: LayoutGrid as unknown as Component,
			bg: '#F0ECFD',
			color: '#7C3AED'
		},
		{ title: 'Darurat', icon: Zap as unknown as Component, bg: '#FFE8E8', color: '#DC2626' },
		{ title: 'Cari Laporan', icon: Search as unknown as Component, bg: '#E8EEF8', color: '#1E40AF' }
	];

	const stats = [
		{ value: '1.2', suffix: 'K', label: 'Laporan masuk' },
		{ value: '999', label: 'Laporan selesai' },
		{ value: '99', suffix: '%', label: 'Tingkat respons' }
	];

	const statsPublik = [
		{ value: '2025', label: 'Tahun Info Terbaru' },
		{ value: '67', label: 'Info Berkala Aktif' },
		{ value: '200', suffix: '+', label: 'Dokumen Tersedia' }
	];

	const actions = [
		{
			icon: MessageSquare as unknown as Component,
			title: 'Laporan Pelayanan',
			bgColor: '#109458',
			isInverse: false
		},
		{
			icon: House as unknown as Component,
			title: 'Laporan Fasilitas Umum',
			bgColor: '#109458',
			isInverse: true
		}
	];
</script>

<div class="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center pb-24">
	<Header name={user.name} imageUrl={user.imageUrl} {services} {cardItems} />
	<div class="z-40 -mt-12 flex w-full items-center justify-center">
		<a
			href={resolve('/pelayanan_publik')}
			class="rounded-full border-6 border-white bg-emerald-500 p-3"
			aria-label="Report Facility Button"
		>
			<Camera class="h-12 w-12 text-white" />
		</a>
	</div>
	<main class="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-8">
		<ReportSection {categories} {stats} {actions} />
		<section class="flex flex-col gap-3">
			<SectionHeader
				heading="ADMINISTRASI"
				judul="Layanan Administrasi"
				desc="Urus keperluan administrasi kependudukan, pajak daerah, dan perizinan secara digital , cepat, mudah, dan terpadu."
			/>

			<AccordionSection
				accentColor="#109458"
				data={[
					{
						count: 4,
						title: 'Kesehatan',
						desc: 'Ini kesehatan lorem ipsum dolores amor tiamor',
						items: ['Dokter tirta', 'RSJ', 'UGD', 'Healing']
					},
					{
						count: 7,
						title: 'Pendidikan',
						desc: 'Layanan pendidikan daerah',
						items: ['SD', 'SMP', 'SMA', 'Beasiswa']
					}
				]}
			/>

			<ActionButtons
				icon={BookText as unknown as Component}
				title="Lihat Semua Layanan"
				bgColor="#109458"
				isInverse={false}
			/>
		</section>
		<section>
			<SectionHeader
				heading="TRANSPARANSI"
				judul="Informasi Publik"
				desc="Data, statistik, dan dokumen resmi pemerintah daerah yang terbuka dan dapat diakses oleh seluruh masyarakat."
			/>

			<StatCard stats={statsPublik} />

			<ActionButtons
				icon={Globe as unknown as Component}
				title="Jelajah Semua Informasi"
				bgColor="#109458"
				isInverse={false}
			/>
		</section>
	</main>
</div>
