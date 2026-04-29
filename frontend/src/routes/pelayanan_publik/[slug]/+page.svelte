<script lang="ts">
	import PelayananHeader from '$lib/components/pelayanan_publik/PelayananHeader.svelte';
	import PelayananSearch from '$lib/components/pelayanan_publik/PelayananSearch.svelte';
	import PelayananServiceCard from '$lib/components/pelayanan_publik/PelayananServiceCard.svelte';
	import PelayananStats from '$lib/components/pelayanan_publik/PelayananStats.svelte';
	import AccordionSection from '$lib/components/AccordionSection.svelte';
	import type { PelayananPage } from '$lib/data/pelayanan_publik_data';
	import './style.scss';

	interface Props {
		data: { page: PelayananPage };
	}

	let { data }: Props = $props();

	const page = $derived(data.page);

	let searchQuery = $state('');

	const filtered = $derived(
		searchQuery.trim()
			? page.services.filter(
					(s) =>
						s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						s.description.toLowerCase().includes(searchQuery.toLowerCase())
				)
			: page.services
	);
</script>

<svelte:head>
	<title>{page.title} — Pelayanan Publik</title>
</svelte:head>

<div class="page-wrap mx-auto max-w-6xl">
	<PelayananHeader
		title={page.title}
		description={page.description}
		icon={page.icon}
		breadcrumb={page.breadcrumb}
		gradientFrom={page.theme.gradientFrom}
		gradientTo={page.theme.gradientTo}
	/>

	<main class="main-content">
		<!-- Stats -->
		{#if page.stats}
			<PelayananStats
				title={page.stats.title}
				items={page.stats.items}
				ctaLabel={page.stats.ctaLabel}
				ctaHref={page.stats.ctaHref}
				gradientFrom={page.theme.gradientFrom}
				gradientTo={page.theme.gradientTo}
			/>
		{/if}

		<!-- Flow accordion -->
		{#if page.flow}
			<AccordionSection
				accentColor={page.theme.primary}
				data={page.flow.steps.map((s) => ({
					count: s.count,
					title: s.title,
					desc: s.desc,
					items: s.items
				}))}
			/>
		{/if}

		<!-- Search -->
		<PelayananSearch
			placeholder={page.searchPlaceholder}
			bind:value={searchQuery}
			primaryColor={page.theme.primary}
		/>

		<!-- Services -->
		<section class="services-section">
			<h2 class="section-title">{page.servicesTitle}</h2>

			{#if filtered.length === 0}
				<p class="empty-state">
					Tidak ada layanan untuk "<strong>{searchQuery}</strong>"
				</p>
			{:else}
				<div class="services-grid">
					{#each filtered as service (service.id)}
						<PelayananServiceCard
							{service}
							primaryColor={page.theme.primary}
							primaryLight={page.theme.primaryLight}
						/>
					{/each}
				</div>
			{/if}
		</section>
	</main>
</div>
