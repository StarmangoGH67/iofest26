import {
	Baby,
	Briefcase,
	Building2,
	ChevronLeft,
	CreditCard,
	ExternalLink,
	FileCheck,
	FileHeart,
	FileText,
	Heart,
	House,
	MapPin,
	Receipt,
	Search,
	ShieldCheck,
	Users
} from 'lucide-svelte';
import type { Component } from 'svelte';

// ─── Theme ─────────────────────────────────────────────────────────────────────

export interface PageTheme {
	primary: string;
	primaryLight: string;
	gradientFrom: string;
	gradientTo: string;
}

// ─── Service Card ──────────────────────────────────────────────────────────────

export interface ServiceCard {
	id: string;
	icon: Component;
	iconBg: string;
	iconColor: string;
	title: string;
	description: string;
	badge?: string;
	actionLabel: string;
	actionHref: string;
	actionExternal?: boolean;
}

// ─── Stat ──────────────────────────────────────────────────────────────────────

export interface StatItem {
	value: string;
	suffix?: string;
	label: string;
}

// ─── Flow Step ─────────────────────────────────────────────────────────────────

export interface FlowStep {
	count: number;
	title: string;
	desc: string;
	items: string[];
}

// ─── Full Page ─────────────────────────────────────────────────────────────────

export interface PelayananPage {
	slug: string;
	breadcrumb: string[];
	title: string;
	subtitle?: string;
	description: string;
	icon: Component;
	theme: PageTheme;
	stats?: {
		title: string;
		items: StatItem[];
		ctaLabel?: string;
		ctaHref?: string;
	};
	flow?: {
		label: string;
		steps: FlowStep[];
	};
	searchPlaceholder: string;
	servicesTitle: string;
	services: ServiceCard[];
}

// ─── Parent Category Entry ─────────────────────────────────────────────────────

export interface CategoryEntry {
	slug: string;
	sectionLabel: string;
	cardTitle: string;
	description: string;
	icon: Component;
	ctaLabel: string;
	theme: PageTheme;
}

// ══════════════════════════════════════════════════════════════════════════════
// +++++++++++++++++++++++++++++++++ DATA +++++++++++++++++++++++++++++++++++++++
// ══════════════════════════════════════════════════════════════════════════════
// konten dari setiap page slugs pelayanan_publik/{}

// ─── Kependudukan ──────────────────────────────────────────────────────────────

export const kependudukanData: PelayananPage = {
	slug: 'kependudukan',
	breadcrumb: ['Beranda', 'Pelayanan publik', 'Kependudukan'],
	title: 'Administrasi Kependudukan',
	subtitle: 'ADMINDUK',
	description:
		'Layanan lengkap pencatatan sipil dan pendaftaran penduduk. Cakupan: Akta Kelahiran, Kematian, Perkawinan & Perceraian, Kartu Keluarga (KK), Dokumen Identitas (KTP/KIA), Surat Pindah, administrasi WNA, dan lainnya.',
	icon: Users as unknown as Component,
	theme: {
		primary: '#1565C0',
		primaryLight: '#E3F2FD',
		gradientFrom: '#0d47a1',
		gradientTo: '#1976D2'
	},
	stats: {
		title: 'Statistik Pelayanan Kependudukan',
		items: [
			{ value: '1.2', suffix: 'K', label: 'Laporan masuk' },
			{ value: '999', label: 'Laporan masuk' },
			{ value: '99', suffix: '%', label: 'Laporan masuk' }
		],
		ctaLabel: 'Lihat Detail Statistik \u2192',
		ctaHref: '/statistik'
	},
	flow: {
		label: 'Lihat Alur Pelayanan Online',
		steps: [
			{
				count: 1,
				title: 'Pilih permohonan',
				desc: 'Pilih jenis layanan yang diinginkan',
				items: ['Akta Kelahiran', 'KTP Elektronik', 'Kartu Keluarga', 'Surat Pindah']
			},
			{
				count: 2,
				title: 'Isi formulir permohonan',
				desc: 'Lengkapi data diri dan dokumen pendukung',
				items: ['Data Pemohon', 'Data Keluarga', 'Tujuan Permohonan']
			},
			{
				count: 3,
				title: 'Unggah dokumen persyaratan',
				desc: 'Upload semua berkas yang diperlukan',
				items: ['KTP Asli', 'Kartu Keluarga', 'Surat Pengantar']
			},
			{
				count: 4,
				title: 'Ajukan Permohonan',
				desc: 'Kirim permohonan dan dapatkan nomor tiket',
				items: ['Verifikasi Data', 'Nomor Tiket', 'Notifikasi WhatsApp']
			},
			{
				count: 5,
				title: 'Tunggu / Melacak dan validasi oleh petugas',
				desc: 'Pantau status permohonan secara real-time',
				items: ['Status Real-time', 'Notifikasi Update', 'Estimasi Selesai']
			},
			{
				count: 6,
				title: 'Selesai',
				desc: 'Dokumen siap diambil atau dikirim',
				items: ['Ambil di Kantor', 'Pengiriman Pos', 'Download Digital']
			}
		]
	},
	searchPlaceholder: 'Cari Layanan',
	servicesTitle: 'Daftar Layanan yang Tersedia',
	services: [
		{
			id: 'kelahiran',
			icon: Baby as unknown as Component,
			iconBg: '#E2F5ED',
			iconColor: '#0B6E4F',
			title: 'Kelahiran & Anak',
			description:
				'Layanan mengurus dokumen pencatatan sipil sejak bayi lahir seperti Akta Kelahiran, Kartu Identitas Anak (KIA), dan pendataan balita.',
			actionLabel: 'Lihat Layanan',
			actionHref: '/pelayanan_publik/kependudukan'
		},
		{
			id: 'kematian',
			icon: FileHeart as unknown as Component,
			iconBg: '#F0F4FF',
			iconColor: '#3B5BDB',
			title: 'Kematian',
			description:
				'Layanan pencatatan sipil untuk peristiwa kematian penduduk, penerbitan Akta Kematian dan update data administrasi terkait.',
			actionLabel: 'Lihat Layanan',
			actionHref: '/pelayanan_publik/kependudukan'
		},
		{
			id: 'perkawinan',
			icon: Heart as unknown as Component,
			iconBg: '#FFF0F6',
			iconColor: '#C2255C',
			title: 'Perkawinan & Perceraian',
			description:
				'Pencatatan Akta Perkawinan dan Perceraian bagi penduduk non-muslim, serta layanan pemutakhiran data keluarga.',
			actionLabel: 'Lihat Layanan',
			actionHref: '/pelayanan_publik/kependudukan'
		},
		{
			id: 'kk',
			icon: House as unknown as Component,
			iconBg: '#FFF3E0',
			iconColor: '#E65100',
			title: 'Kartu Keluarga',
			description:
				'Penerbitan dan perubahan data Kartu Keluarga (KK) untuk setiap kepala keluarga yang berdomisili di wilayah kota.',
			actionLabel: 'Lihat Layanan',
			actionHref: '/pelayanan_publik/kependudukan'
		},
		{
			id: 'ktp',
			icon: CreditCard as unknown as Component,
			iconBg: '#E8F5E9',
			iconColor: '#2E7D32',
			title: 'KTP & Identitas',
			description:
				'Penerbitan dan perekaman Kartu Tanda Penduduk Elektronik (e-KTP) serta identitas penduduk lainnya.',
			actionLabel: 'Lihat Layanan',
			actionHref: '/pelayanan_publik/kependudukan'
		},
		{
			id: 'pindah',
			icon: MapPin as unknown as Component,
			iconBg: '#F3E5F5',
			iconColor: '#7B1FA2',
			title: 'Pindah Domisili',
			description:
				'Layanan surat keterangan pindah dan datang bagi penduduk yang berpindah antar wilayah dalam atau luar kota.',
			actionLabel: 'Lihat Layanan',
			actionHref: '/pelayanan_publik/kependudukan'
		}
	]
};

// ─── Perizinan ─────────────────────────────────────────────────────────────────

export const perizinanData: PelayananPage = {
	slug: 'perizinan',
	breadcrumb: ['Beranda', 'Pelayanan publik', 'Perizinan'],
	title: 'Perizinan',
	description:
		'Layanan lengkap perizinan bangunan gedung seperti PBG, SLF, SBKBG, RTB, dan Pendataan Bangunan Gedung, serta perizinan berusaha seperti NIB, PB UMKU, dan sertifikasi halal.',
	icon: FileCheck as unknown as Component,
	theme: {
		primary: '#0B6E4F',
		primaryLight: '#E2F5ED',
		gradientFrom: '#0a4a2e',
		gradientTo: '#1a7a50'
	},
	searchPlaceholder: 'Cari Layanan',
	servicesTitle: 'Daftar Layanan yang Tersedia',
	services: [
		{
			id: 'pbg',
			icon: Building2 as unknown as Component,
			iconBg: '#FFF9C4',
			iconColor: '#F9A825',
			title: 'Persetujuan Bangunan Gedung',
			description:
				'Layanan panduan dan akses perizinan/izin pendirian bangunan baru, perubahan fungsi, bongkar bangunan, serta Sertifikat Laik Fungsi (SLF). Pengajuan melalui sistem nasional SIMBG.',
			badge: 'SIMBG',
			actionLabel: 'Akses SIMBG',
			actionHref: '/pelayanan_publik/kependudukan'
		},
		{
			id: 'oss',
			icon: Briefcase as unknown as Component,
			iconBg: '#E8F5E9',
			iconColor: '#2E7D32',
			title: 'Perizinan Berusaha',
			description:
				'Layanan panduan dan akses pendaftaran legalitas usaha. Nomor Induk Berusaha (NIB), serta berbagai izin operasional/komersial sektoral. Pengajuan diproses melalui sistem nasional OSS.',
			badge: 'OSS',
			actionLabel: 'Akses OSS',
			actionHref: '/pelayanan_publik/kependudukan'
		},
		{
			id: 'halal',
			icon: ShieldCheck as unknown as Component,
			iconBg: '#FFF3E0',
			iconColor: '#E65100',
			title: 'Sertifikasi Halal',
			description:
				'Layanan panduan dan akses pendaftaran sertifikat halal untuk produk makanan, minuman, obat-obatan, kosmetik, dan barang gunaan. Pengajuan diproses melalui sistem SiHalal.',
			badge: 'SiHalal',
			actionLabel: 'Akses SiHalal',
			actionHref: '/pelayanan_publik/kependudukan'
		}
	]
};

// ─── Perpajakan ────────────────────────────────────────────────────────────────

export const perpajakanData: PelayananPage = {
	slug: 'perpajakan',
	breadcrumb: ['Beranda', 'Pelayanan publik', 'Perpajakan'],
	title: 'Perpajakan',
	description:
		'Layanan perpajakan dan retribusi daerah seperti NPWPD, eSPTPD, BPHTB, SKNJOP, dan Keringanan Keberatan.',
	icon: Receipt as unknown as Component,
	theme: {
		primary: '#B45309',
		primaryLight: '#FEF3C7',
		gradientFrom: '#78350f',
		gradientTo: '#b45309'
	},
	searchPlaceholder: 'Cari Layanan',
	servicesTitle: 'Daftar Layanan yang Tersedia',
	services: [
		{
			id: 'bpprd',
			icon: FileText as unknown as Component,
			iconBg: '#FEF3C7',
			iconColor: '#B45309',
			title: 'Administrasi Pajak & Retribusi',
			description:
				'Pusat layanan administratif perpajakan dan retribusi daerah, seperti Pendaftaran NPWPD, pelaporan eSPTPD, pengurusan BPHTB, permohonan SKNJOP, hingga pengajuan Keringanan & Keberatan pajak.',
			badge: 'BPPRD',
			actionLabel: 'Lihat Portal BPPRD',
			actionHref: '/portal/bpprd',
			actionExternal: true
		},
		{
			id: 'epayment',
			icon: CreditCard as unknown as Component,
			iconBg: '#E3F2FD',
			iconColor: '#1565C0',
			title: 'Pembayaran Elektronik',
			description:
				'Portal transaksi cepat untuk pelunasan berbagai kewajiban pajak, seperti Pembayaran PBB-P2, Pajak Restoran, Hotel, Hiburan, dan retribusi daerah lainnya melalui berbagai bank dan e-wallet.',
			badge: 'E-Payment',
			actionLabel: 'Bayar Sekarang',
			actionHref: '/bayar'
		}
	]
};

// ─── All pages map ─────────────────────────────────────────────────────────────

export const allPelayananPages: Record<string, PelayananPage> = {
	kependudukan: kependudukanData,
	perizinan: perizinanData,
	perpajakan: perpajakanData
};

// ─── Parent page categories ────────────────────────────────────────────────────
// Kalau mau edit card pada page pelayanan publik
export const pelayananCategories: CategoryEntry[] = [
	{
		slug: 'kependudukan',
		sectionLabel: 'Kependudukan (ADMINDUK)',
		cardTitle: 'Administrasi Kependudukan',
		description:
			'Layanan kependudukan dan pencatatan sipil seperti Akta Kelahiran, Kematian, Perkawinan & Perceraian, Kartu Keluarga (KK), Dokumen Identitas (KTP/KIA), Surat Pindah, administrasi WNA, dan lainnya.',
		icon: Users as unknown as Component,
		ctaLabel: 'Buka Layanan Kependudukan',
		theme: {
			primary: '#1565C0',
			primaryLight: '#E3F2FD',
			gradientFrom: '#0d47a1',
			gradientTo: '#1976D2'
		}
	},
	{
		slug: 'perizinan',
		sectionLabel: 'Perizinan',
		cardTitle: 'Perizinan',
		description:
			'Layanan perizinan bangunan gedung seperti PBG, SLF, SBKBG, RTB, dan perizinan berusaha seperti NIB, PB UMKU, serta sertifikasi halal.',
		icon: FileCheck as unknown as Component,
		ctaLabel: 'Buka Layanan Perizinan',
		theme: {
			primary: '#0B6E4F',
			primaryLight: '#E2F5ED',
			gradientFrom: '#0a4a2e',
			gradientTo: '#1a7a50'
		}
	},
	{
		slug: 'perpajakan',
		sectionLabel: 'Perpajakan (Pajak)',
		cardTitle: 'Perpajakan',
		description:
			'Layanan perpajakan dan retribusi daerah seperti NPWPD, eSPTPD, BPHTB, SKNJOP, dan Keringanan Keberatan.',
		icon: Receipt as unknown as Component,
		ctaLabel: 'Buka Layanan Perpajakan',
		theme: {
			primary: '#B45309',
			primaryLight: '#FEF3C7',
			gradientFrom: '#78350f',
			gradientTo: '#b45309'
		}
	}
];

// ─── Re-export utility icons for use in components ─────────────────────────────

export { ChevronLeft, ExternalLink, Search };
