<script lang="ts">
	import { FileText, Megaphone, Info } from 'lucide-svelte';
	import Header from '$lib/components/Landing/Header.svelte';
	import SectionHeader from '$lib/components/sectionHeader.svelte';
	import ServiceButton from '$lib/components/ServiceButton.svelte';

	// User Data
	const user = {
		name: 'Kakikukeko',
		imageUrl: null
	};

	// Service Data
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
            action: 'Lihat',
        },
        {
            theme: 'news',
            title: 'Lampu Jalan Mati — Jl. Sudirman KM 5',
            desc: 'Dilaporkan oleh warga pada pukul 19.24. Status: diteruskan ke Dinas PU. Estimasi perbaikan 2x24 jam.',
            time: '14 menit lalu',
			location: 'Balikpapan Selatan', 
            action: 'Pantau',
        },
        {
            theme: 'emergency',
            title: 'Lampu Jalan Mati — Jl. Sudirman KM 5',
            desc: 'Dilaporkan oleh warga pada pukul 19.24. Status: diteruskan ke Dinas PU. Estimasi perbaikan 2x24 jam.',
            time: '14 menit lalu',
			location: 'Balikpapan Selatan', 
            action: 'Pantau',
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
	
	interface ReportCategory {
		title: string;
		icon: any; // keyof typeof Icons dari Lucide
		bg: string;
		color: string;
	}

	const categories: ReportCategory[] = [
		{ title: 'Jalan Rusak', icon: 'Truck', bg: '#FDECEA', color: '#E53935' },
		{ title: 'Lampu Jalan', icon: 'Sun', bg: '#FEF3E2', color: '#F59E0B' },
		{ title: 'Drainase', icon: 'Waves', bg: '#E8F0FD', color: '#2563EB' },
		{ title: 'Taman & RTH', icon: 'TreePadding', bg: '#E2F5F0', color: '#0D9488' },
		{ title: 'Sampah', icon: 'Trash2', bg: '#FDE8F2', color: '#DB2777' },
		{ title: 'Fasum Lain', icon: 'LayoutGrid', bg: '#F0ECFD', color: '#7C3AED' },
		{ title: 'Darurat', icon: 'Zap', bg: '#FFE8E8', color: '#DC2626' },
		{ title: 'Cari Laporan', icon: 'Search', bg: '#E8EEF8', color: '#1E40AF' }
	];
</script>

<svelte:head>
	<title>KakiKuKeKo — Layanan Publik Digital</title>
</svelte:head>

<div class="relative mx-auto min-h-screen max-w-6xl flex flex-col items-center pb-24">
	<Header 
		name={user.name} 
		imageUrl={user.imageUrl} 
		{services}
		{cardItems}
	/>

	<main class="px-6 py-8 max-w-4xl mx-auto">
    	<section class="flex flex-col lg:flex-row">
			<SectionHeader 
				heading= "PELAPORAN" 
				judul= "Layanan Pelaporan" 
				desc= "Laporkan kerusakan fasilitas publik dan layanan pemerintah. Setiap laporan diproses dan ditindaklanjuti secara transparan." 
			/>
			<div class="w-full flex flex-col items-center">
				<div class="services-grid">
					{#each categories as item}
						<ServiceButton
							title={item.title}
							iconName={item.icon}
							bgColor={item.bg}
							iconColor={item.color}
						/>
					{/each}	
				</div>

				<div class="flex w-full bg-white rounded-2xl shadow-sm my-4">
					<div class="flex-1 flex flex-col items-center gap-1 py-4 border-r border-gray-100">
						<span class="text-2xl font-black text-emerald-600">1.2<sup class="text-sm">K</sup></span>
						<span class="text-[11px] text-gray-400 font-medium">Laporan masuk</span>
					</div>
					<div class="flex-1 flex flex-col items-center gap-1 py-4 border-r border-gray-100">
						<span class="text-2xl font-black text-emerald-600">999</span>
						<span class="text-[11px] text-gray-400 font-medium">Laporan masuk</span>
					</div>
					<div class="flex-1 flex flex-col items-center gap-1 py-4">
						<span class="text-2xl font-black text-emerald-600">99<sup class="text-sm">%</sup></span>
						<span class="text-[11px] text-gray-400 font-medium">Laporan masuk</span>
					</div>
				</div>

				<div class="flex flex-col gap-3 w-full">
					<button class="w-full py-3.5 bg-emerald-600 text-white font-bold text-[15px] rounded-2xl active:scale-95 transition-transform hover:brightness-110">
						Laporan Pelayanan
					</button>
					<button class="w-full py-3.5 bg-transparent text-emerald-600 font-bold text-[15px] rounded-2xl border-2 border-emerald-600 active:scale-95 transition-transform hover:bg-emerald-50">
						Laporan Fasilitas Umum
					</button>
				</div>
			</div>
		</section>
	</main>
</div>

