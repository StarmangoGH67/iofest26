<script lang="ts">
	import SectionHeader from '$lib/components/sectionHeader.svelte';
	import ServiceButton from '$lib/components/ServiceButton.svelte';
	import ActionButtons from '$lib/components/ActionButtons.svelte';
	import StatCard from '$lib/components/StatCard.svelte';
	import type * as Icons from 'lucide-svelte';

	interface ReportCategory {
		title: string;
		icon: any;
		bg: string;
		color: string;
	}

	interface StatItem {
		value: string;
		suffix?: string;
		label: string;
	}

	interface ActionButton {
		icon?: any;
		title: string;
		bgColor: string;
		isInverse: boolean;
	}

	interface Props {
		categories: ReportCategory[];
		stats: StatItem[];
		actions: ActionButton[];
	}

	let { categories, stats, actions }: Props = $props();
</script>

<section class="flex flex-col lg:flex-row">
	<SectionHeader
		heading="PELAPORAN"
		judul="Layanan Pelaporan"
		desc="Laporkan kerusakan fasilitas publik dan layanan pemerintah. Setiap laporan diproses dan ditindaklanjuti secara transparan."
	/>
	<div class="flex w-full flex-col items-center">
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

		<StatCard {stats} />

		<div class="flex w-full flex-col gap-3">
			{#each actions as action}
				<ActionButtons
					icon={action.icon}
					title={action.title}
					bgColor={action.bgColor}
					isInverse={action.isInverse}
				/>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.services-grid {
		display: grid;
		grid-template-columns: repeat(
			auto-fill,
			minmax(clamp(calc(25% - 20px), 70px, calc(25% - 20px)), 2fr)
		);
		gap: clamp(12px, 3vw, 20px);
		margin: 24px 0;
		width: 100%;
	}
</style>
