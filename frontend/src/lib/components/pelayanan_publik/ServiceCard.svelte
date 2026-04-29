<script lang="ts">
	import type { ServiceItem } from '../../types';

	interface Props {
		service: ServiceItem;
		primaryColor: string;
		secondaryColor: string;
	}

	let { service, primaryColor, secondaryColor }: Props = $props();
</script>

<article class="service-card" style="--primary: {primaryColor}; --secondary: {secondaryColor};">
	<!-- Icon -->
	<div
		class="card-icon"
		style="background: {service.iconBg ?? secondaryColor}; color: {primaryColor};"
		aria-hidden="true"
	>
		{@html service.icon}
	</div>

	<!-- Content -->
	<div class="card-content">
		<h3 class="card-title">{service.title}</h3>
		<p class="card-desc">{service.description}</p>

		<a
			href={service.action.href}
			class="card-btn"
			style="background: {primaryColor};"
			target={service.action.external ? '_blank' : undefined}
			rel={service.action.external ? 'noopener noreferrer' : undefined}
		>
			{service.action.label}
			{#if service.action.external}
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					width="13"
					height="13"
					aria-hidden="true"
				>
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
					<polyline points="15 3 21 3 21 9" />
					<line x1="10" y1="14" x2="21" y2="3" />
				</svg>
			{/if}
		</a>
	</div>

	<!-- Badge if present -->
	{#if service.action.badge}
		<span class="card-badge" style="background: {secondaryColor}; color: {primaryColor};">
			{service.action.badge}
		</span>
	{/if}
</article>

<style>
	.service-card {
		background: white;
		border: 1.5px solid #f0f0f0;
		border-radius: 16px;
		padding: 18px 16px 16px;
		display: flex;
		flex-direction: column;
		gap: 0;
		position: relative;
		transition:
			box-shadow 0.2s,
			border-color 0.2s;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
	}

	.service-card:hover {
		border-color: var(--primary);
		box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
	}

	.card-icon {
		width: 46px;
		height: 46px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 12px;
		flex-shrink: 0;
	}

	.card-icon :global(svg) {
		width: 22px;
		height: 22px;
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: 6px;
		flex: 1;
	}

	.card-title {
		font-size: 15px;
		font-weight: 700;
		color: #111827;
		margin: 0;
		line-height: 1.3;
	}

	.card-desc {
		font-size: 12.5px;
		color: #6b7280;
		line-height: 1.55;
		margin: 0 0 12px;
	}

	.card-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 9px 18px;
		border-radius: 8px;
		color: white;
		font-size: 13px;
		font-weight: 600;
		text-decoration: none;
		align-self: flex-start;
		transition:
			opacity 0.18s,
			transform 0.18s;
		letter-spacing: 0.1px;
	}

	.card-btn:hover {
		opacity: 0.88;
		transform: translateY(-1px);
	}

	.card-badge {
		position: absolute;
		top: 14px;
		right: 14px;
		font-size: 10px;
		font-weight: 700;
		padding: 3px 8px;
		border-radius: 20px;
		letter-spacing: 0.3px;
		text-transform: uppercase;
	}
</style>
