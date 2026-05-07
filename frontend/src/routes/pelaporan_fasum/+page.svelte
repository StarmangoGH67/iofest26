<script lang="ts">
	import PelayananHeader from '$lib/components/pelayanan_publik/PelayananHeader.svelte';
	import FasumStatCard from '$lib/components/pelaporan_fasum/FasumStatCard.svelte';
	import ServiceButton from '$lib/components/ServiceButton.svelte';
	import { resolve } from '$app/paths';

	let { data } = $props();

	let header = $derived(data.header);
	let stats = $derived(data.stats);
	let categories = $derived(data.categories);
</script>

<svelte:head>
	<title>{header.title}</title>
</svelte:head>

<div class="min-h-screen bg-[#F8FAFC] pb-24">
	<PelayananHeader
		title={header.title}
		description={header.description}
		icon={header.icon}
		breadcrumb={header.breadcrumb}
		gradientFrom={header.gradientFrom}
		gradientTo={header.gradientTo}
	/>

	<main class="relative z-20 mx-auto max-w-md space-y-8 px-5 pt-8 md:max-w-2xl lg:max-w-5xl">
		<div
			class="mx-auto flex w-full flex-col items-center rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8 lg:p-11"
		>
			<h2
				class="mb-2 text-center text-[15px] font-extrabold text-[#1a1a1a] md:text-[22px] lg:text-[28px]"
			>
				Statistik Pelaporan Publik
			</h2>

			<div class="w-full">
				<FasumStatCard {stats} />
			</div>

			<button
				class="mt-3 rounded-lg bg-[#8A9A91] px-6 py-2.5 text-[11px] font-bold text-white transition-colors hover:bg-[#78877f] md:px-8 md:py-3.5 md:text-[14px] lg:px-10 lg:py-4.5 lg:text-[17px]"
			>
				Lihat Detail Statistik
			</button>
		</div>

		<div>
			<h2
				class="mt-4 mb-6 text-center text-[18px] font-bold text-gray-500 md:text-[24px] lg:text-[30px]"
			>
				Ayookkk Lapooorr!!!!
			</h2>

			<div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10">
				{#each categories as item (item.id)}
					<a
						href={resolve(`/pelaporan_fasum/${item.id}`)}
						style="--hover-bg: {item.bg};"
						class="flex cursor-pointer items-center justify-center rounded-2xl border border-transparent bg-[#F4F5F7] p-4 transition-all duration-300 hover:border-gray-100 hover:bg-(--hover-bg) hover:shadow-md"
					>
						<ServiceButton
							title={item.title}
							icon={item.icon}
							bgColor={item.bg}
							iconColor={item.color}
						/>
					</a>
				{/each}
			</div>
		</div>
	</main>
</div>
