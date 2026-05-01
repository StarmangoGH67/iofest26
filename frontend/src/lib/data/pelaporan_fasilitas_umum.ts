import { 
    Megaphone,
    Truck, 
    TreePine, 
    Sun, 
    Waves, 
    Trash2, 
    LayoutGrid,
    Zap,
    TrafficCone
} from 'lucide-svelte';
import type { Component } from 'svelte';

export interface FasumCategory{
    id: string;
    title: string;
    icon: Component;
    bg: string;
    color: string;
}

export interface StatItem {
	value: string;
	suffix?: string;
	label: string;
}

export const FasumCategories: FasumCategory[] = [
    { 
        id: 'jalan-rusak', 
        title: 'Jalan Rusak', 
        icon: Truck as unknown as Component, 
        bg: '#F3F4F6', 
        color: '#4B5563' 
    },
    {
        id: 'penerangan-jalan',
        title: 'Penerangan Jalan',
        icon: Sun as unknown as Component,
        bg: '#FEF3E2',
        color: '#F59E0B'
    },
    {
        id: 'pohon-tumbang',
        title: 'Pohon Tumbang',
        icon: TreePine as unknown as Component,
        bg: '#E2F5F0',
        color: '#0D9488'
    },
    {
        id: 'drainase',
        title: 'Drainase',
        icon: Waves as unknown as Component,
        bg: '#E8F0FD',
        color: '#2563EB'
    },
    {
        id: 'gangguan-sampah',
        title: 'Gangguan Sampah',
        icon: Trash2 as unknown as Component,
        bg: '#FDE8F2', 
        color: '#DB2777'
    },
    {
        id: 'lalu-lintas',
        title: 'Lalu Lintas',
        icon: TrafficCone as unknown as Component,
        bg: '#FEF3C7',
        color: '#D97706'
    },
    {
        id: 'darurat', 
        title: 'Kondisi Darurat', 
        icon: Zap as unknown as Component, 
        bg: '#FEE2E2', 
        color: '#DC2626'
    },
    {
        id: 'fasum-lain', 
        title: 'Fasum Lainnya', 
        icon: LayoutGrid as unknown as Component, 
        bg: '#F0ECFD', 
        color: '#7C3AED'
    }
]

export const FasumStats: StatItem[] = [
    { value: '1.2', suffix: 'K', label: 'Laporan masuk' },
    { value: '999', label: 'Laporan selesai' },
    { value: '99', suffix: '%', label: 'Tingkat respons'}
];

export const FasumHeaderData = {
    title: "Pelaporan Fasilitas Umum",
    description: "Selamat datang di Portal Pelaporan Fasilitas Umum Online. Tempat dimana Anda bisa membuat laporan terkait kerusakan fasilitas umum di lingkungan sekitar Anda.",
    breadcrumb: ['Beranda', 'Pelaporan Fasilitas Umum'],
    icon: Megaphone as unknown as Component,
    gradientFrom: "#0a4a2e",
    gradientTo: "#1a7a50"
};
