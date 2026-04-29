import type { ServicePage } from '../types';

export const kependudukanPage: ServicePage = {
	slug: 'kependudukan',
	title: 'Administrasi Kependudukan',
	subtitle: 'ADMINDUK',
	description:
		'Selamat datang di Portal Layanan Publik Online. Layanan lengkap pencatatan sipil dan pendaftaran penduduk. Cakupan: Akta Kelahiran, Kematian, Perkawinan & Perceraian, Kartu Keluarga (KK), Dokumen Identitas (KTP/KIA), Surat Pindah, administrasi WNA, dan lainnya.',
	breadcrumb: ['Beranda', 'Pelayanan publik', 'Kependudukan'],
	iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
	theme: {
		primary: '#0B6E4F',
		secondary: '#E8F5E9',
		accent: '#1DB87E',
		gradient: ['#0a4a2e', '#2bbf7a']
	},
	stats: {
		title: 'Statistik Pelayanan Kependudukan',
		items: [
			{ value: '1.2', suffix: 'k', label: 'Laporan masuk' },
			{ value: '999', label: 'Laporan masuk' },
			{ value: '99', suffix: '%', label: 'Laporan masuk' }
		],
		ctaLabel: 'Lihat Detail Statistik →',
		ctaHref: '/statistik'
	},
	flow: {
		title: 'Lihat Alur Pelayanan Online',
		steps: [
			{ number: 1, label: 'Pilih permohonan' },
			{ number: 2, label: 'Isi formulir permohonan' },
			{ number: 3, label: 'Unggah dokumen persyaratan' },
			{ number: 4, label: 'Ajukan Permohonan' },
			{ number: 5, label: 'Tunggu / Melacak dan validasi oleh petugas' },
			{ number: 6, label: 'Selesai' }
		]
	},
	searchPlaceholder: 'Cari Layanan',
	servicesTitle: 'Daftar Layanan yang Tersedia',
	services: [
		{
			id: 'kelahiran',
			title: 'Kelahiran & Anak',
			description:
				'Layanan mengurus dokumen pencatatan sipil sejak bayi lahir seperti Akta Kelahiran, Kartu Identitas Anak (KIA), dan pendataan balita.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/><path d="M12 12v3"/></svg>`,
			iconBg: '#E3F9F0',
			action: { label: 'Lihat Layanan', href: '/layanan/kelahiran' }
		},
		{
			id: 'kematian',
			title: 'Kematian',
			description:
				'Layanan pencatatan sipil untuk peristiwa kematian penduduk, penerbitan Akta Kematian dan update data administrasi terkait.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
			iconBg: '#E8F5E9',
			action: { label: 'Lihat Layanan', href: '/layanan/kematian' }
		},
		{
			id: 'perkawinan',
			title: 'Perkawinan & Perceraian',
			description:
				'Pencatatan Akta Perkawinan dan Perceraian bagi penduduk non-muslim, serta layanan pemutakhiran data keluarga.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
			iconBg: '#FFF3E0',
			action: { label: 'Lihat Layanan', href: '/layanan/perkawinan' }
		},
		{
			id: 'kk',
			title: 'Kartu Keluarga',
			description:
				'Penerbitan dan perubahan data Kartu Keluarga (KK) untuk setiap kepala keluarga yang berdomisili di wilayah kota.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
			iconBg: '#E3F2FD',
			action: { label: 'Lihat Layanan', href: '/layanan/kk' }
		},
		{
			id: 'ktp',
			title: 'KTP & Identitas',
			description:
				'Penerbitan dan perekaman Kartu Tanda Penduduk Elektronik (e-KTP) serta identitas penduduk lainnya.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M16 10h2M16 14h2M6 10h1v4H6"/></svg>`,
			iconBg: '#F3E5F5',
			action: { label: 'Lihat Layanan', href: '/layanan/ktp' }
		},
		{
			id: 'pindah',
			title: 'Pindah Domisili',
			description:
				'Layanan surat keterangan pindah dan datang bagi penduduk yang berpindah antar wilayah dalam atau luar kota.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
			iconBg: '#E8F5E9',
			action: { label: 'Lihat Layanan', href: '/layanan/pindah' }
		},
		{
			id: 'kartu-keluarga',
			title: 'Kartu Keluarga',
			description:
				'Layanan administrasi kartu keluarga lengkap termasuk penambahan anggota keluarga baru.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
			iconBg: '#FFF8E1',
			action: { label: 'Lihat Layanan', href: '/layanan/keluarga' }
		}
	]
};

export const perizinanPage: ServicePage = {
	slug: 'perizinan',
	title: 'Perizinan',
	description:
		'Selamat datang di Portal Perizinan Publik Online. Layanan lengkap perizinan bangunan gedung seperti PBG, SLF, SBKBG, RTB, dan Pendataan Bangunan Gedung, serta perizinan berusaha seperti NIB, PB UMKU, dan sertifikasi halal.',
	breadcrumb: ['Beranda', 'Pelayanan publik', 'Perizinan'],
	iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
	theme: {
		primary: '#1565C0',
		secondary: '#E3F2FD',
		accent: '#42A5F5',
		gradient: ['#1565C0', '#1976D2']
	},
	searchPlaceholder: 'Cari Layanan',
	servicesTitle: 'Daftar Layanan yang Tersedia',
	services: [
		{
			id: 'pbg',
			title: 'Persetujuan Bangunan Gedung',
			description:
				'Layanan panduan dan akses perizinan/izin pendirian bangunan baru, perubahan fungsi, bongkar bangunan, serta Sertifikat Laik Fungsi (SLF). Pengajuan melalui sistem nasional SIMBG.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
			iconBg: '#FFF9C4',
			action: {
				label: 'Akses SIMBG',
				href: 'https://simbg.pu.go.id',
				badge: 'SIMBG',
				external: true
			}
		},
		{
			id: 'oss',
			title: 'Perizinan Berusaha',
			description:
				'Layanan panduan dan akses pendaftaran legalitas usaha. Nomor Induk Berusaha (NIB), serta berbagai izin operasional/komersial sektoral. Pengajuan diproses melalui sistem nasional OSS.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
			iconBg: '#E8F5E9',
			action: { label: 'Akses OSS', href: 'https://oss.go.id', badge: 'OSS', external: true }
		},
		{
			id: 'halal',
			title: 'Sertifikasi Halal',
			description:
				'Layanan panduan dan akses pendaftaran sertifikat halal untuk produk makanan, minuman, obat-obatan, kosmetik, dan barang gunaan. Pengajuan diproses melalui sistem SiHalal.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
			iconBg: '#FFF3E0',
			action: {
				label: 'Akses SiHalal',
				href: 'https://ptsp.halal.go.id',
				badge: 'SiHalal',
				external: true
			}
		}
	]
};

export const perpajakanPage: ServicePage = {
	slug: 'perpajakan',
	title: 'Perpajakan',
	description:
		'Selamat datang di Portal Perpajakan Publik Online. Layanan perpajakan dan retribusi daerah seperti NPWPD, eSPTPD, BPHTB, SKNJOP, dan Keringanan Keberatan.',
	breadcrumb: ['Beranda', 'Pelayanan publik', 'Perpajakan'],
	iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
	theme: {
		primary: '#E65100',
		secondary: '#FFF3E0',
		accent: '#FF8F00',
		gradient: ['#E65100', '#F57C00']
	},
	searchPlaceholder: 'Cari Layanan',
	servicesTitle: 'Daftar Layanan yang Tersedia',
	services: [
		{
			id: 'bpprd',
			title: 'Administrasi Pajak & Retribusi',
			description:
				'Pusat layanan administratif perpajakan dan retribusi daerah, seperti Pendaftaran NPWPD, pelaporan eSPTPD, pengurusan BPHTB, permohonan SKNJOP, hingga pengajuan Keringanan & Keberatan pajak.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
			iconBg: '#FFF9C4',
			action: { label: 'Lihat Portal BPPRD', href: '/portal/bpprd', badge: 'BPPRD', external: true }
		},
		{
			id: 'epayment',
			title: 'Pembayaran Elektronik',
			description:
				'Portal transaksi cepat untuk pelunasan berbagai kewajiban pajak, seperti Pembayaran PBB-P2, Pajak Restoran, Hotel, Hiburan, dan retribusi daerah lainnya melalui berbagai bank dan e-wallet.',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
			iconBg: '#E3F2FD',
			action: { label: 'Bayar Sekarang', href: '/bayar', badge: 'E-Payment', external: false }
		}
	]
};

export const allServicePages: Record<string, ServicePage> = {
	kependudukan: kependudukanPage,
	perizinan: perizinanPage,
	perpajakan: perpajakanPage
};

export const parentPageCategories = [
	{
		slug: 'kependudukan',
		label: 'Kependudukan (ADMINDUK)',
		shortLabel: 'Administrasi Kependudukan',
		description:
			'Layanan kependudukan dan pencatatan sipil seperti Akta Kelahiran, Kematian, Perkawinan & Perceraian, Kartu Keluarga (KK), Dokumen Identitas (KTP/KIA), Surat Pindah, administrasi WNA, dan lainnya.',
		icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
		ctaLabel: 'Buka Layanan Kependudukan',
		theme: {
			primary: '#0B6E4F',
			secondary: '#E8F5E9',
			accent: '#1DB87E',
			gradient: ['#0B6E4F', '#1A9E6A'] as [string, string]
		}
	},
	{
		slug: 'perizinan',
		label: 'Perizinan',
		shortLabel: 'Perizinan',
		description:
			'Layanan perizinan bangunan gedung seperti PBG, SLF, SBKBG, RTB, dan perizinan berusaha seperti NIB, PB UMKU, serta sertifikasi halal.',
		icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
		ctaLabel: 'Buka Layanan Perizinan',
		theme: {
			primary: '#1565C0',
			secondary: '#E3F2FD',
			accent: '#42A5F5',
			gradient: ['#1565C0', '#1976D2'] as [string, string]
		}
	},
	{
		slug: 'perpajakan',
		label: 'Perpajakan (Pajak)',
		shortLabel: 'Perpajakan',
		description:
			'Layanan perpajakan dan retribusi daerah seperti NPWPD, eSPTPD, BPHTB, SKNJOP, dan Keringanan Keberatan.',
		icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
		ctaLabel: 'Buka Layanan Perpajakan',
		theme: {
			primary: '#E65100',
			secondary: '#FFF3E0',
			accent: '#FF8F00',
			gradient: ['#E65100', '#F57C00'] as [string, string]
		}
	}
];
