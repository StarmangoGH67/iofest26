<script lang="ts">
	import type { Component } from 'svelte';
	import { resolve } from '$app/paths';

	interface Props {
		slug: string;
		sectionLabel: string;
		cardTitle: string;
		description: string;
		icon: Component;
		ctaLabel: string;
		primary: string;
		primaryLight: string;
	}

	let {
		slug,
		sectionLabel,
		cardTitle,
		description,
		icon: CardIcon,
		ctaLabel,
		primary,
		primaryLight
	}: Props = $props();
</script>

<section class="cat-section">
	<p class="section-label" style="color: {primary};">{sectionLabel}</p>

	<article class="cat-card" style="--primary: {primary};">
		<div class="cat-icon" style="background: {primaryLight}; color: {primary};">
			<!-- svelte-ignore svelte_component_deprecated -->
			<svelte:component this={CardIcon} size={22} color={primary} strokeWidth={2} />
		</div>

		<h3 class="cat-title">{cardTitle}</h3>
		<p class="cat-desc">{description}</p>

		<a
			href={resolve(`/pelayanan_publik/${slug}` as '/')}
			class="cat-btn"
			style="background: {primary};"
		>
			{ctaLabel}
		</a>
	</article>
</section>

<style lang="scss">
	.cat-section {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.section-label {
		font-size: 12px;
		font-weight: 800;
		padding: 4px 0 10px;
		letter-spacing: 0.2px;
		margin: 0;
	}

	.cat-card {
		background: white;
		border: 1.5px solid #f0f0f0;
		border-radius: 18px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
		transition:
			box-shadow 0.2s,
			border-color 0.2s;

		&:hover {
			box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
			border-color: var(--primary);
		}
	}

	.cat-icon {
		width: 48px;
		height: 48px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 12px;
	}

	.cat-title {
		font-size: 15px;
		font-weight: 800;
		color: #111827;
		margin: 0 0 6px;
	}

	.cat-desc {
		font-size: 12.5px;
		color: #6b7280;
		line-height: 1.6;
		margin: 0 0 12px;
	}

	.cat-btn {
		display: inline-flex;
		align-items: center;
		padding: 10px 20px;
		border-radius: 10px;
		color: white;
		font-size: 13px;
		font-weight: 700;
		text-decoration: none;
		align-self: flex-start;
		transition:
			opacity 0.18s,
			transform 0.18s;

		&:hover {
			opacity: 0.88;
			transform: translateY(-1px);
		}

		&:active {
			transform: scale(0.96);
		}
	}
</style>
