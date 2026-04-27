// place files you want to import through the `$lib` alias in this folder.
export type NewsType = 'darurat' | 'warning' | 'informasi';

export interface NewsItem {
	id: number;
	title: string;
	description: string;
	type: NewsType;
	time: string;
	location: string;
}

export interface ActionButton {
	icon: string;
	label: string;
}

export interface ReportCategory {
	icon: string;
	label: string;
}

export interface StatItem {
	value: string;
	label: string;
}

export interface AdministrasiItem {
	number: number;
	title: string;
	description: string;
}

export interface PublicInfoTag {
	label: string;
	color: string;
}

export const actionButtons: ActionButton[] = [
	{ icon: '📋', label: 'Ajukan Permohonan Pelayanan' },
	{ icon: '📢', label: 'Buat Laporan' },
	{ icon: '👁', label: 'Lihat Informasi Publik' }
];

export const newsItems: NewsItem[] = [
	{
		id: 1,
		title: 'PRABOWO HAMIL',
		description: 'Blablablablabla kejadian sama teddy',
		type: 'informasi',
		time: '3 jam lalu',
		location: 'IKN'
	},
	{
		id: 2,
		title: 'BANJIR BESAR',
		description: 'Banjir melanda kawasan pesisir kota akibat hujan deras.',
		type: 'darurat',
		time: '1 jam lalu',
		location: 'Balikpapan'
	},
	{
		id: 3,
		title: 'GEMPA TERASA',
		description: 'Gempa 4.2 SR dirasakan warga sekitar pukul 08.00 pagi.',
		type: 'warning',
		time: '30 menit lalu',
		location: 'Samarinda'
	}
];

export const reportCategories: ReportCategory[] = [
	{ icon: '🛣', label: 'Jalan Elek' },
	{ icon: '💡', label: 'Lampu rosak' },
	{ icon: '🌳', label: 'Pohon bobo' },
	{ icon: '🛣', label: 'Jalan Elek' },
	{ icon: '🛣', label: 'Jalan Elek' },
	{ icon: '🛣', label: 'Jalan Elek' },
	{ icon: '🛣', label: 'Jalan Elek' },
	{ icon: '🛣', label: 'Jalan Elek' }
];

export const statistics: StatItem[] = [
	{ value: '1.2K', label: 'Laporan masuk' },
	{ value: '999', label: 'Laporan masuk' },
	{ value: '99%', label: 'Laporan masuk' }
];

export const administrasiItems: AdministrasiItem[] = [
	{
		number: 4,
		title: 'Kesehatan',
		description: 'Ini kesehatan lorem ipsum dolores amor tiamor'
	},
	{
		number: 4,
		title: 'Kesehatan',
		description: 'Ini kesehatan lorem ipsum dolores amor tiamor'
	},
	{
		number: 4,
		title: 'Kesehatan',
		description: 'Ini kesehatan lorem ipsum dolores amor tiamor'
	}
];

export const publicInfoStats: StatItem[] = [
	{ value: '2026', label: 'Tahun Info Terbaru' },
	{ value: '67', label: 'Info Berkala Aktif' },
	{ value: '999+', label: 'Dokumen Tersedia' }
];

export const publicInfoTags: PublicInfoTag[] = [
	{ label: 'Statistik', color: 'bg-green-100 text-green-700' },
	{ label: 'Berkas', color: 'bg-purple-100 text-purple-700' },
	{ label: 'Berkala', color: 'bg-blue-100 text-blue-700' }
];
