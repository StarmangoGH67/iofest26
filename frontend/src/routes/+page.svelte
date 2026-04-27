<script lang="ts">
	import { FileText, Megaphone, Info } from 'lucide-svelte';
	import Header from '$lib/components/Landing/Header.svelte';
	import SectionHeader from '$lib/components/sectionHeader.svelte';

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

</script>

<svelte:head>
	<title>KakiKuKeKo — Layanan Publik Digital</title>
</svelte:head>

<div class="relative mx-auto min-h-screen max-w-6xl flex flex-col items-center bg-[#F2F5F3] pb-24">
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
			
			<div class="min-w-md">
				<div class="svc-grid w-full lg:max-w-lg mx-auto">
					<div class="svc"><div class="svc-ic" style="background:#FDECEA;"><svg viewBox="0 0 24 24" fill="none" stroke="#E53935" stroke-width="2" stroke-linecap="round"><path d="M3 17l1.5-9h15L21 17H3z"/><path d="M9 17v2m6-2v2"/><path d="M1 8h22"/></svg></div><span class="svc-lb">Jalan Rusak</span></div>
					<div class="svc"><div class="svc-ic" style="background:#FEF3E2;"><svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg></div><span class="svc-lb">Lampu Jalan</span></div>
					<div class="svc"><div class="svc-ic" style="background:#E8F0FD;"><svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span class="svc-lb">Drainase</span></div>
					<div class="svc"><div class="svc-ic" style="background:#E2F5F0;"><svg viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div><span class="svc-lb">Taman & RTH</span></div>
					<div class="svc"><div class="svc-ic" style="background:#FDE8F2;"><svg viewBox="0 0 24 24" fill="none" stroke="#DB2777" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6m4-6v6"/><path d="M9 6V4h6v2"/></svg></div><span class="svc-lb">Sampah</span></div>
					<div class="svc"><div class="svc-ic" style="background:#F0ECFD;"><svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div><span class="svc-lb">Fasum Lain</span></div>
					<div class="svc"><div class="svc-ic" style="background:#FFE8E8;"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><span class="svc-lb">Darurat</span></div>
					<div class="svc"><div class="svc-ic" style="background:#E8EEF8;"><svg viewBox="0 0 24 24" fill="none" stroke="#1E40AF" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><span class="svc-lb">Cari Laporan</span></div>
				</div>
			</div>

			

		</section>
	</main>
</div>

<style>
	.svc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0;}
	.svc{display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;}
	.svc-ic{width:52px;height:52px;border-radius:16px;display:flex;align-items:center;justify-content:center;}
	.svc-ic svg{width:22px;height:22px;}
	.svc-lb{font-size:10.5px;font-weight:600;color:var(--text);text-align:center;line-height:1.3;}

</style>