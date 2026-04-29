<script lang="ts">
	import SearchBar from '$lib/components/pelayanan_publik/SearchBar.svelte';
	import CategoryCard from '$lib/components/pelayanan_publik/CategoryCard.svelte';
	import { parentPageCategories } from '$lib/data/services';
	import './style.scss';
	import StatCard from '$lib/components/StatCard.svelte';

	const PRIMARY = '#109458';

	let searchQuery = $state('');

	const filtered = $derived(
		searchQuery.trim()
			? parentPageCategories.filter(
					(c) =>
						c.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
						c.description.toLowerCase().includes(searchQuery.toLowerCase())
				)
			: parentPageCategories
	);
</script>

<svelte:head>
	<title>Pelayanan Publik</title>
</svelte:head>

<div class="shell max-w-6xl">
	<!-- Header -->
	<header class="main-header px-4 pt-14 pb-4 md:px-16 md:pb-12">
		<div class="header-top">
			<div class="header-left">
				<p class="header-breadcrumb">Beranda / Pelayanan publik</p>
				<h1 class="header-title">Pelayanan<br />Publik</h1>
			</div>
			<div class="header-icon" aria-hidden="true">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
					<polyline points="9 22 9 12 15 12 15 22" />
				</svg>
			</div>
		</div>
		<p class="header-desc">
			Selamat datang di Portal Layanan Publik Online. Temukan kemudahan pengurusan administrasi
			kependudukan, perizinan usaha, perpajakan, serta pelaporan infrastruktur kota dalam satu pintu
			secara mudah, cepat, dan transparan.
		</p>
	</header>

	<!-- StatsCard -->
	<StatCard
		stats={[
			{ value: '1.2', suffix: 'K', label: 'Laporan masuk' },
			{ value: '999', label: 'Laporan selesai' },
			{ value: '99', suffix: '%', label: 'Tingkat respons' }
		]}
	/>
	<!-- SearchBar -->
	<div class="search-section">
		<SearchBar placeholder="Cari Layanan" bind:value={searchQuery} primaryColor={PRIMARY} />
	</div>

	<!-- ListSections -->
	<div class="list-section">
		<h2 class="section-title">Daftar Layanan yang Tersedia</h2>

		{#if filtered.length === 0}
			<div class="empty-state">
				<p>Tidak ada layanan untuk "<strong>{searchQuery}</strong>"</p>
			</div>
		{:else}
			{#each filtered as cat (cat.slug)}
				<CategoryCard
					slug={cat.slug}
					label={cat.label}
					shortLabel={cat.shortLabel}
					description={cat.description}
					icon={cat.icon}
					ctaLabel={cat.ctaLabel}
					primary={cat.theme.primary}
					secondary={cat.theme.secondary}
				/>
			{/each}
		{/if}
	</div>
</div>
