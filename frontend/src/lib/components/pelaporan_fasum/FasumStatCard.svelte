<script lang="ts">
	interface StatItem {
		value: string;
		suffix?: string;
		label: string;
	}

	interface Props {
		stats: StatItem[];
	}

	let { stats }: Props = $props();
</script>

<div
	class="mx-auto my-4 flex w-full max-w-md rounded-2xl bg-white shadow-sm md:max-w-2xl lg:max-w-4xl"
>
	{#each stats as stat, i (i)}
		<div
			class="flex flex-1 flex-col items-center gap-1 py-4 md:gap-2 md:py-5 lg:gap-4 lg:py-8 {i !==
			stats.length - 1
				? 'border-r border-gray-100'
				: ''}"
		>
			<span class="text-2xl font-black text-emerald-600 md:text-3xl lg:text-4xl"
				>{stat.value}<sup>{stat.suffix}</sup></span
			>
			<span class="text-[11px] font-medium text-gray-400 md:text-[14px] lg:text-[17px]"
				>{stat.label}</span
			>
		</div>
	{/each}
</div>
