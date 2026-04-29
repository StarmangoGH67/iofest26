<script lang="ts">
	interface Props {
		slug: string;
		label: string;
		shortLabel: string;
		description: string;
		icon: string;
		ctaLabel: string;
		primary: string;
		secondary: string;
	}

	let { slug, label, shortLabel, description, icon, ctaLabel, primary, secondary }: Props =
		$props();
</script>

<section class="category-section" style="--primary: {primary}; --secondary: {secondary};">
	<div class="category-tag" style="color: {primary}; background: {secondary};">
		{label}
	</div>

	<article class="category-card">
		<div class="cat-icon" style="background: {secondary}; color: {primary};" aria-hidden="true">
			{@html icon}
		</div>

		<div class="cat-content">
			<h3 class="cat-title">{shortLabel}</h3>
			<p class="cat-desc">{description}</p>

			<a href="/pelayanan_publik/{slug}" class="cat-btn" style="background: {primary};">
				{ctaLabel}
			</a>
		</div>
	</article>
</section>

<style>
	.category-section {
		margin-bottom: 4px;
	}

	.category-tag {
		font-size: 12px;
		font-weight: 700;
		padding: 4px 0 10px;
		letter-spacing: 0.2px;
	}

	.category-card {
		background: white;
		border: 1.5px solid #f0f0f0;
		border-radius: 16px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 0;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
		transition: box-shadow 0.2s;
	}

	.category-card:hover {
		box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
	}

	.cat-icon {
		width: 46px;
		height: 46px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 12px;
	}

	.cat-icon :global(svg) {
		width: 22px;
		height: 22px;
	}

	.cat-content {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.cat-title {
		font-size: 15px;
		font-weight: 700;
		color: #111827;
		margin: 0;
	}

	.cat-desc {
		font-size: 12.5px;
		color: #6b7280;
		line-height: 1.55;
		margin: 0 0 10px;
	}

	.cat-btn {
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
	}

	.cat-btn:hover {
		opacity: 0.88;
		transform: translateY(-1px);
	}
</style>
