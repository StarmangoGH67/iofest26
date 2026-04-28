<!-- StatBar.svelte -->
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

<div class="my-4 flex w-full rounded-2xl bg-white shadow-sm">
	{#each stats as stat, i (i)}
		<div
			class="flex flex-1 flex-col items-center gap-1 py-4 {i !== stats.length - 1
				? 'border-r border-gray-100'
				: ''}"
		>
			<span class="text-2xl font-black text-emerald-600">{stat.value}<sup>{stat.suffix}</sup></span>
			<span class="text-[11px] font-medium text-gray-400">{stat.label}</span>
		</div>
	{/each}
</div>
