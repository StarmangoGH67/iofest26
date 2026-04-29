<script lang="ts">
	import type { StatItem } from '../../types';

	interface Props {
		title: string;
		items: StatItem[];
		ctaLabel?: string;
		ctaHref?: string;
		primaryColor: string;
		gradientStart: string;
		gradientEnd: string;
	}

	let { title, items, ctaLabel, ctaHref, primaryColor, gradientStart, gradientEnd }: Props =
		$props();
</script>

<section
	class="stat-section"
	style="background: linear-gradient(135deg, {gradientStart}F0 0%, {gradientEnd}F0 100%);"
>
	<p class="stat-title">{title}</p>
	<div class="stat-grid">
		{#each items as stat}
			<div class="stat-item">
				<span class="stat-value">
					{stat.value}{#if stat.suffix}<sup class="stat-suffix">{stat.suffix}</sup>{/if}
				</span>
				<span class="stat-label">{stat.label}</span>
			</div>
		{/each}
	</div>
	{#if ctaLabel && ctaHref}
		<a href={ctaHref} class="stat-cta" style="border-color: rgba(255,255,255,0.5);">
			{ctaLabel}
		</a>
	{/if}
</section>

<style>
	.stat-section {
		margin: 20px 16px;
		border-radius: 18px;
		padding: 20px 18px 16px;
		color: white;
		position: relative;
		overflow: hidden;
	}

	.stat-section::before {
		content: '';
		position: absolute;
		top: -30px;
		right: -30px;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.08);
		pointer-events: none;
	}

	.stat-title {
		font-size: 13px;
		font-weight: 600;
		opacity: 0.9;
		margin: 0 0 14px;
		text-align: center;
		letter-spacing: 0.1px;
	}

	.stat-grid {
		display: flex;
		justify-content: space-around;
		gap: 8px;
		margin-bottom: 14px;
	}

	.stat-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
	}

	.stat-value {
		font-size: 24px;
		font-weight: 800;
		line-height: 1;
		letter-spacing: -1px;
	}

	.stat-suffix {
		font-size: 14px;
		font-weight: 700;
		vertical-align: super;
		letter-spacing: 0;
	}

	.stat-label {
		font-size: 11px;
		opacity: 0.78;
		text-align: center;
		line-height: 1.3;
	}

	.stat-cta {
		display: block;
		text-align: center;
		color: white;
		font-size: 13px;
		font-weight: 600;
		text-decoration: none;
		border: 1.5px solid rgba(255, 255, 255, 0.5);
		border-radius: 9px;
		padding: 9px;
		transition: background 0.2s;
	}

	.stat-cta:hover {
		background: rgba(255, 255, 255, 0.15);
	}
</style>
