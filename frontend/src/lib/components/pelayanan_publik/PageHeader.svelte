<script lang="ts">
	interface Props {
		title: string;
		description: string;
		iconSvg: string;
		breadcrumb?: string[];
		primaryColor: string;
		gradientStart: string;
		gradientEnd: string;
		onBack?: () => void;
	}

	let {
		title,
		description,
		iconSvg,
		breadcrumb = [],
		primaryColor,
		gradientStart,
		gradientEnd,
		onBack
	}: Props = $props();
</script>

<header
	class="page-header"
	style="background: linear-gradient(135deg, {gradientStart} 0%, {gradientEnd} 100%);"
>
	<!-- Top nav bar -->
	<div class="nav-bar">
		<button class="back-btn" onclick={onBack} aria-label="Kembali">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.2"
				stroke-linecap="round"
				stroke-linejoin="round"
				width="18"
				height="18"
			>
				<polyline points="15 18 9 12 15 6" />
			</svg>
		</button>
		<div class="avatar-chip">K</div>
	</div>

	<!-- Breadcrumb -->
	{#if breadcrumb.length > 0}
		<nav class="breadcrumb" aria-label="Breadcrumb">
			{#each breadcrumb as crumb, i}
				<span class="crumb">{crumb}</span>
				{#if i < breadcrumb.length - 1}
					<span class="crumb-sep">/</span>
				{/if}
			{/each}
		</nav>
	{/if}

	<!-- Title row -->
	<div class="header-body">
		<div class="header-text">
			<h1 class="page-title">{title}</h1>
			<p class="page-desc">{description}</p>
		</div>
		<div class="header-icon" aria-hidden="true">
			{@html iconSvg}
		</div>
	</div>
</header>

<style>
	.page-header {
		padding: 0 0 28px;
		border-radius: 0 0 24px 24px;
		color: white;
		position: relative;
		overflow: hidden;
	}

	.page-header::before {
		content: '';
		position: absolute;
		top: -40px;
		right: -40px;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.07);
		pointer-events: none;
	}

	.page-header::after {
		content: '';
		position: absolute;
		bottom: -60px;
		left: -20px;
		width: 160px;
		height: 160px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.05);
		pointer-events: none;
	}

	.nav-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px 16px 8px;
	}

	.back-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.18);
		border: none;
		color: white;
		cursor: pointer;
		transition: background 0.2s;
	}

	.back-btn:hover {
		background: rgba(255, 255, 255, 0.28);
	}

	.avatar-chip {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.25);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.5px;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 4px;
		padding: 0 16px 10px;
		font-size: 11.5px;
		opacity: 0.78;
	}

	.crumb {
		font-weight: 400;
	}
	.crumb-sep {
		opacity: 0.6;
	}

	.header-body {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 0 16px;
		gap: 12px;
		position: relative;
		z-index: 1;
	}

	.header-text {
		flex: 1;
	}

	.page-title {
		font-size: 22px;
		font-weight: 800;
		line-height: 1.2;
		margin: 0 0 8px;
		letter-spacing: -0.3px;
	}

	.page-desc {
		font-size: 12px;
		line-height: 1.55;
		opacity: 0.88;
		margin: 0;
	}

	.header-icon {
		flex-shrink: 0;
		width: 48px;
		height: 48px;
		opacity: 0.85;
		margin-top: 2px;
	}

	.header-icon :global(svg) {
		width: 100%;
		height: 100%;
		color: white;
	}
</style>
