<script lang="ts">
	import PelayananSearch from '$lib/components/pelayanan_publik/PelayananSearch.svelte';
	import CategoryCard from '$lib/components/pelayanan_publik/CategoryCard.svelte';
	import { pelayananCategories } from '$lib/data/pelayanan_publik_data';
	import { goto } from '$app/navigation';
	import { ChevronLeft } from 'lucide-svelte';
	import './style.scss';
	import { resolve } from '$app/paths';
	import { page } from '$app/state'; 

	const segments = page.url.pathname.split('/').filter(Boolean); 
	const parentSegment = segments.slice(0, -1); 

	const parentPath = 
	parentSegment.length<=1 
		? '/'
		: '/' + parentSegment.join('/'); 

	const PRIMARY = '#109458';

	let searchQuery = $state('');
	let scrolled = $state(false);

	function handleBack() {
		goto(resolve('/'));
	}

	function onScroll() {
		scrolled = window.scrollY > 80;
	}

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

<svelte:window onscroll={onScroll} />

<!-- Fixed navbar -->
<nav class="pp-nav" class:pp-nav--scrolled={scrolled}>
	<button class="pp-nav__back" onclick={handleBack} aria-label="Kembali">
		<ChevronLeft size={20} color="white" strokeWidth={2.5} />
	</button>
	<span class="pp-nav__title" class:pp-nav__title--visible={scrolled}>Pelayanan Publik
		{parentPath}
	</span>
	<div class="pp-nav__avatar">K</div>
</nav>

<div class="page-wrap mx-auto">
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

<style lang="scss">
	.pp-nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px 20px 10px;
		background: transparent;
		transition:
			background 0.3s ease,
			box-shadow 0.3s ease,
			padding 0.3s ease;

		&--scrolled {
			background: linear-gradient(135deg, #0a4a2e 0%, #1a7a50 100%);
			box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
			padding: 10px 20px;
		}
	}

	.pp-nav__spacer {
		width: 36px;
		flex-shrink: 0;
	}

	.pp-nav__back {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.18);
		border: 1px solid rgba(255, 255, 255, 0.25);
		cursor: pointer;
		flex-shrink: 0;
		transition: background 0.2s;
	}
	.pp-nav__title {
		font-size: 15px;
		font-weight: 800;
		color: white;
		letter-spacing: -0.2px;
		opacity: 0;
		transform: translateY(6px);
		transition:
			opacity 0.25s ease,
			transform 0.25s ease;
		pointer-events: none;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 55%;
		text-align: center;

		&--visible {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.pp-nav__avatar {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.22);
		border: 2px solid rgba(255, 255, 255, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		font-weight: 700;
		color: white;
		flex-shrink: 0;
	}

</style>