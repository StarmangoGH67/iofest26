<script lang="ts">
	import type { StatItem } from '$lib/data/pelayanan_publik_data';
	import { resolve } from '$app/paths';

	interface Props {
		title: string;
		items: StatItem[];
		ctaLabel?: string;
		ctaHref?: string;
		gradientFrom: string;
		gradientTo: string;
	}

	let { title, items, ctaLabel, ctaHref, gradientFrom, gradientTo }: Props = $props();
</script>

<div
	class="stat-panel"
	style="background: linear-gradient(135deg, {gradientFrom}f0 0%, {gradientTo}f0 100%);"
>
	<div class="deco-circle c1"></div>
	<div class="deco-circle c2"></div>

	<p class="stat-title">{title}</p>

	<div class="stat-row">
		{#each items as stat, i (i)}
			<div class="stat-item" class:with-divider={i !== items.length - 1}>
				<span class="stat-val">
					{stat.value}{#if stat.suffix}<sup>{stat.suffix}</sup>{/if}
				</span>
				<span class="stat-label">{stat.label}</span>
			</div>
		{/each}
	</div>

	{#if ctaLabel && ctaHref}
		<a href={resolve(ctaHref as '/')} class="stat-cta">{ctaLabel}</a>
	{/if}
</div>

<style lang="scss">
	.stat-panel {
		position: relative;
		overflow: hidden;
		border-radius: 20px;
		padding: 20px 18px 16px;
		color: white;
		margin: 16px 0;
	}

	.deco-circle {
		position: absolute;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.08);
		pointer-events: none;

		&.c1 {
			width: 140px;
			height: 140px;
			top: -50px;
			right: -40px;
		}

		&.c2 {
			width: 100px;
			height: 100px;
			bottom: -40px;
			left: -20px;
		}
	}

	.stat-title {
		position: relative;
		font-size: 13px;
		font-weight: 700;
		opacity: 0.9;
		margin: 0 0 14px;
		text-align: center;
	}

	.stat-row {
		position: relative;
		display: flex;
		justify-content: space-around;
		gap: 4px;
		margin-bottom: 14px;
	}

	.stat-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		flex: 1;

		&.with-divider {
			border-right: 1px solid rgba(255, 255, 255, 0.25);
		}
	}

	.stat-val {
		font-size: clamp(20px, 5vw, 26px);
		font-weight: 900;
		line-height: 1;
		letter-spacing: -1px;

		sup {
			font-size: 14px;
			font-weight: 700;
		}
	}

	.stat-label {
		font-size: 11px;
		opacity: 0.78;
		text-align: center;
	}

	.stat-cta {
		position: relative;
		display: block;
		text-align: center;
		color: white;
		font-size: 13px;
		font-weight: 700;
		text-decoration: none;
		border: 1.5px solid rgba(255, 255, 255, 0.5);
		border-radius: 10px;
		padding: 10px;
		transition: background 0.2s;

		&:hover {
			background: rgba(255, 255, 255, 0.15);
		}
	}
</style>
