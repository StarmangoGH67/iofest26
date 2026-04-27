<script lang="ts">
	import { FileText, Megaphone, Info } from 'lucide-svelte';
	import Carousel from './Carousel.svelte';
    import "../../../routes/style.scss"

	let { name, imageUrl, services, cardItems } = $props<{
		name: string;
		imageUrl: string | null;
		services: Array<{ title: string; icon: any }>;
		cardItems: Array<{theme: string;title: string;desc: string;time: string;location: string; action: string;}>;
	}>();

	const initial = $derived(name?.charAt(0).toUpperCase() ?? 'K');
</script>

<header class="header-main px-6 py-4 shadow-xl lg:px-12 lg:py-8">
	<div class="circle-1 w-[30%] lg:w-[20%]"></div>
	<div class="circle-2 left-[-30%] w-[60%] lg:left-[-20%] lg:w-[40%]"></div>

	<section class="flex items-center justify-between relative z-20">
		<div class="text-sm text-white">
			<p class="opacity-75">Welcome!</p>
			<p class="font-bold">{name}</p>
		</div>
		<div
			class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white/30 bg-white/15 font-medium text-white backdrop-blur-sm"
		>
			{#if imageUrl}
				<img src={imageUrl} alt="Profile" class="h-full w-full object-cover" />
			{:else}
				{initial}
			{/if}
		</div>
	</section>

	<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8 mt-2 lg:mt-6">
		<section
			class="relative z-10 mt-4 grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-4 w-full lg:w-1/3"
		>
			{#each services as service}
				<button
					class="service-card flex flex-col lg:flex-row lg:gap-3 items-center justify-start p-3 lg:px-5 text-center lg:text-start transition-transform active:scale-95 w-full"
				>
					<div class="icon-wrapper mb-2 lg:mb-0">
						<service.icon class="h-6 w-6 lg:h-7 lg:w-7 text-white" />
					</div>

					<span
						class="text-[8px] lg:text-sm leading-tight font-medium text-white uppercase tracking-wide"
					>
						{service.title}
					</span>
				</button>
			{/each}
		</section>

		<section class="w-full lg:w-2/3 mt-2 lg:mt-0 z-10">
			<Carousel 
				items={cardItems}
			/>
		</section>
	</div>
</header>

