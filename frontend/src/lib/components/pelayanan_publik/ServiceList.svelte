<script lang="ts">
	import type { ServiceItem } from '../../types';
	import ServiceCard from './ServiceCard.svelte';

	interface Props {
		title: string;
		services: ServiceItem[];
		primaryColor: string;
		secondaryColor: string;
		searchQuery?: string;
	}

	let { title, services, primaryColor, secondaryColor, searchQuery = '' }: Props = $props();

	const filtered = $derived(
		searchQuery.trim()
			? services.filter(
					(s) =>
						s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						s.description.toLowerCase().includes(searchQuery.toLowerCase())
				)
			: services
	);
</script>

<section class="service-list-section">
	<h2 class="list-title">{title}</h2>

	{#if filtered.length === 0}
		<div class="empty-state">
			<p>Tidak ada layanan yang ditemukan untuk "<strong>{searchQuery}</strong>"</p>
		</div>
	{:else}
		<div class="list-grid">
			{#each filtered as service (service.id)}
				<ServiceCard {service} {primaryColor} {secondaryColor} />
			{/each}
		</div>
	{/if}
</section>

<style>
	.service-list-section {
		padding: 0 16px;
	}

	.list-title {
		font-size: 15px;
		font-weight: 700;
		color: #1f2937;
		margin: 0 0 16px;
		text-align: center;
		letter-spacing: -0.1px;
	}

	.list-grid {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.empty-state {
		text-align: center;
		color: #9ca3af;
		font-size: 14px;
		padding: 32px 0;
	}
</style>
