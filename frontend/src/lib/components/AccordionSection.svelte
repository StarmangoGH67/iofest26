<script lang="ts">
	import AccordionItem from '$lib/components/AccordionItem.svelte';

	interface AccordionData {
		count: number;
		title: string;
		desc: string;
		items: string[];
	}

	interface Props {
		data: AccordionData[];
		accentColor?: string;
	}

	let { data, accentColor = '#109458' }: Props = $props();
</script>

<section class="flex flex-col">
	<div class="accordion-list">
		{#each data as item, i (i)}
			<div class="timeline-item">
				<div class="timeline-dot" style="background: {accentColor}"></div>
				{#if i < data.length - 1}
					<div class="timeline-line" style="background: {accentColor}"></div>
				{/if}
				<AccordionItem
					count={item.count}
					title={item.title}
					desc={item.desc}
					items={item.items}
					{accentColor}
				/>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.accordion-list {
		display: flex;
		flex-direction: column;
		gap: 0;
		padding: 8px 0;
	}

	.timeline-item {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		position: relative;
		padding-bottom: 12px;
	}

	.timeline-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		flex-shrink: 0;
		margin-top: 20px;
		position: relative;
		z-index: 1;
	}

	.timeline-line {
		position: absolute;
		left: 5px;
		top: 32px;
		bottom: 0;
		width: 2px;
		opacity: 0.3;
	}
</style>
