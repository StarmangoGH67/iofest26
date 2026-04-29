<script lang="ts">
	import PelayananSearch from '$lib/components/pelayanan_publik/PelayananSearch.svelte';
	import CategoryCard from '$lib/components/pelayanan_publik/CategoryCard.svelte';
	import { pelayananCategories } from '$lib/data/pelayanan_publik_data';
	import './style.scss';

	const PRIMARY = '#109458';

	let searchQuery = $state('');

	const filtered = $derived(
		searchQuery.trim()
			? pelayananCategories.filter(
					(c) =>
						c.cardTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
						c.description.toLowerCase().includes(searchQuery.toLowerCase())
				)
			: pelayananCategories
	);
</script>

<svelte:head>
	<title>Pelayanan Publik</title>
</svelte:head>

<div class="page-wrap mx-auto max-w-5xl">
	<header class="main-header px-5 pt-14 pb-7 md:px-12 md:pb-12">
		<div class="circle-1"></div>
		<div class="circle-2"></div>

		<div class="header-top">
			<div>
				<p class="breadcrumb-text">Beranda / Pelayanan publik</p>
				<h1 class="header-title">Pelayanan<br />Publik</h1>
			</div>
			<div class="header-icon" aria-hidden="true">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffffff"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-hand-helping-icon lucide-hand-helping"
					><path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" /><path
						d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
					/><path d="m2 13 6 6" /></svg
				>
			</div>
		</div>
		<p class="header-desc">
			Selamat datang di Portal Layanan Publik Online. Temukan kemudahan pengurusan administrasi
			kependudukan, perizinan usaha, perpajakan, serta pelaporan infrastruktur kota dalam satu pintu
			secara mudah, cepat, dan transparan.
		</p>
	</header>

	<main class="main-content mx-auto max-w-4xl">
		<!-- Searchbar -->
		<PelayananSearch placeholder="Cari Layanan" bind:value={searchQuery} primaryColor={PRIMARY} />

		<!-- List Section -->
		<div class="list-section">
			<h2 class="section-title">Daftar Layanan yang Tersedia</h2>

			{#if filtered.length === 0}
				<div class="empty-state">
					<p>Tidak ada layanan untuk "<strong>{searchQuery}</strong>"</p>
				</div>
			{:else}
				<div class="categories-grid">
					{#each filtered as cat (cat.slug)}
						<CategoryCard
							slug={cat.slug}
							sectionLabel={cat.sectionLabel}
							cardTitle={cat.cardTitle}
							description={cat.description}
							icon={cat.icon}
							ctaLabel={cat.ctaLabel}
							primary={cat.theme.primary}
							primaryLight={cat.theme.primaryLight}
						/>
					{/each}
				</div>
			{/if}
		</div>
	</main>
</div>
