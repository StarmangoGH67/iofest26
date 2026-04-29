<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import type { ServiceCard } from '$lib/data/pelayanan_publik_data';
	import { resolve } from '$app/paths';

	interface Props {
		service: ServiceCard;
		primaryColor: string;
		primaryLight: string;
	}

	let { service, primaryColor, primaryLight }: Props = $props();

	const ServiceIcon = $derived(service.icon);
</script>

<article class="svc-card" style="--primary: {primaryColor}; --light: {primaryLight};">
	<!-- Badge -->
	{#if service.badge}
		<span class="badge" style="background: {primaryLight}; color: {primaryColor};">
			{service.badge}
		</span>
	{/if}

	<!-- Icon -->
	<div class="icon-wrap" style="background: {service.iconBg};">
		<!-- svelte-ignore svelte_component_deprecated -->
		<svelte:component this={ServiceIcon} size={22} color={service.iconColor} strokeWidth={2} />
	</div>

	<!-- Content -->
	<h3 class="card-title">{service.title}</h3>
	<p class="card-desc">{service.description}</p>

	<!-- CTA -->
	<a
		href={resolve(service.actionHref as '/')}
		class="card-btn"
		style="background: {primaryColor};"
		target={service.actionExternal ? '_blank' : undefined}
		rel={service.actionExternal ? 'noopener noreferrer' : undefined}
	>
		{service.actionLabel}
		{#if service.actionExternal}
			<ExternalLink size={13} strokeWidth={2.5} />
		{/if}
	</a>
</article>

<style lang="scss">
	.svc-card {
		position: relative;
		background: white;
		border: 1.5px solid #f0f0f0;
		border-radius: 18px;
		padding: 18px 16px 16px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
		transition:
			box-shadow 0.22s,
			border-color 0.22s,
			transform 0.18s;
		height: 100%;

		&:hover {
			border-color: var(--primary);
			box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
			transform: translateY(-2px);
		}
	}

	.badge {
		position: absolute;
		top: 14px;
		right: 14px;
		font-size: 10px;
		font-weight: 700;
		padding: 3px 9px;
		border-radius: 20px;
		letter-spacing: 0.4px;
		text-transform: uppercase;
	}

	.icon-wrap {
		width: 48px;
		height: 48px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 12px;
		flex-shrink: 0;
	}

	.card-title {
		font-size: 15px;
		font-weight: 800;
		color: #111827;
		margin: 0 0 6px;
		line-height: 1.3;
	}

	.card-desc {
		font-size: 12.5px;
		color: #6b7280;
		line-height: 1.6;
		margin: 0 0 14px;
		flex: 1;
	}

	.card-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
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
