<script lang="ts">
	interface Props {
		count: number;
		title: string;
		desc: string;
		items: string[];
		accentColor?: string;
	}

	let { count, title, desc, items, accentColor = '#109458' }: Props = $props();
	let open = $state(false);
</script>

<div
	class="accordion-item"
	style="--accent: {accentColor}; border-color: {open ? accentColor : 'transparent'}"
>
	<button class="accordion-header" onclick={() => (open = !open)}>
		<span class="count" style="color: {accentColor}">{count}</span>
		<div class="info">
			<span class="title">{title}</span>
			<span class="desc">{desc}</span>
		</div>
		<span class="chevron" class:rotated={open} style="color: {accentColor}">∨</span>
	</button>

	<div class="item-list-wrapper" class:open>
		<div class="item-list-inner">
			<ul class="item-list" style="border-color: {accentColor}">
				{#each items as item (item)}
					<li style="color: {accentColor}">
						<span class="dot" style="background: {accentColor}"></span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	.accordion-item {
		background: white;
		border-radius: 16px;
		border: 2px solid transparent;
		padding: 16px;
		transition: border-color 0.2s;
		cursor: pointer;
		width: 100%; /* follow parent width */
	}

	.accordion-header {
		display: flex;
		align-items: center;
		gap: 12px;
		width: 100%;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		text-align: left;
	}

	.count {
		font-size: 32px;
		font-weight: 800;
		min-width: 32px;
	}

	.info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.title {
		font-size: 14px;
		font-weight: 700;
		color: #1a1a1a;
	}

	.desc {
		font-size: 12px;
		color: #888;
		line-height: 1.4;
	}

	.chevron {
		font-size: 14px;
		font-weight: 600;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		&.rotated {
			transform: rotate(180deg);
		}
	}

	.item-list-wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
		&.open {
			grid-template-rows: 1fr;
		}
	}

	.item-list-inner {
		overflow: hidden;
	}

	.item-list {
		margin: 12px 0 0 0;
		padding: 12px 0 0 0;
		border-top: 1px solid;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	li {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 13px;
		font-weight: 600;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
	}
</style>
