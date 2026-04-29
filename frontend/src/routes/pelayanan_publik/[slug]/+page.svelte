<script lang="ts">
	import { goto } from '$app/navigation';
	import PageHeader from '$lib/components/pelayanan_publik/PageHeader.svelte';
	import SearchBar from '$lib/components/pelayanan_publik/SearchBar.svelte';
	import ServiceList from '$lib/components/pelayanan_publik/ServiceList.svelte';
	import StatCard from '$lib/components/pelayanan_publik/StatCard.svelte';
	import Accordion from '$lib/components/pelayanan_publik/Accordion.svelte';
	import type { PageData } from './$types';
	import './style.scss';
	// import { resolve } from '$app/navigation';

	let { data }: { data: PageData } = $props();
	const { page } = data;

	let searchQuery = $state('');

	function handleBack() {
		// resolve();
		goto('/pelayanan_publik');
	}
</script>

<svelte:head>
	<title>{page.title} — Pelayanan Publik</title>
</svelte:head>

<div class="shell mx-auto max-w-6xl">
	<PageHeader
		title={page.title}
		description={page.description}
		iconSvg={page.iconSvg}
		breadcrumb={page.breadcrumb}
		primaryColor={page.theme.primary}
		gradientStart={page.theme.gradient[0]}
		gradientEnd={page.theme.gradient[1]}
		onBack={handleBack}
	/>

	<!-- Stats (optional) -->
	{#if page.stats}
		<StatCard
			title={page.stats.title}
			items={page.stats.items}
			ctaLabel={page.stats.ctaLabel}
			ctaHref={page.stats.ctaHref}
			primaryColor={page.theme.primary}
			gradientStart={page.theme.gradient[0]}
			gradientEnd={page.theme.gradient[1]}
		/>
	{/if}

	<!-- Flow accordion (optional) -->
	{#if page.flow}
		<Accordion
			label={page.flow.title}
			steps={page.flow.steps}
			primaryColor={page.theme.primary}
			secondaryColor={page.theme.secondary}
		/>
	{/if}

	<!-- Search -->
	<div class="search-wrap">
		<SearchBar
			placeholder={page.searchPlaceholder}
			bind:value={searchQuery}
			primaryColor={page.theme.primary}
		/>
	</div>

	<!-- Services -->
	<div class="list-wrap">
		<ServiceList
			title={page.servicesTitle}
			services={page.services}
			primaryColor={page.theme.primary}
			secondaryColor={page.theme.secondary}
			{searchQuery}
		/>
	</div>

	<!-- Bottom spacer -->
	<div style="height: 32px;"></div>
</div>
