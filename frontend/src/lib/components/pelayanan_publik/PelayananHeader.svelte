<script lang="ts">
	import { goto } from '$app/navigation';
	import { ChevronLeft } from 'lucide-svelte';
	import type { Component } from 'svelte';
	import { resolve } from '$app/paths';

	interface Props {
		title: string;
		description: string;
		icon: Component;
		breadcrumb?: string[];
		gradientFrom: string;
		gradientTo: string;
		onBack?: () => void;
	}

	let { title, description, icon: PageIcon, breadcrumb = [], onBack }: Props = $props();

	function handleBack() {
		if (onBack) {
			onBack();
		} else {
			goto(resolve('/pelayanan_publik'));
		}
	}
</script>

<header
	class="pelayanan-header mx-auto max-w-4xl pb-7 md:px-12"
	style="background: linear-gradient(140deg, #0a4a2e 0%, #1a7a50 55%, #2bbf7a 100%);"
>
	<div class="circle-1"></div>
	<div class="circle-2"></div>

	<!-- Nav row -->
	<div class="nav-row">
		<button class="back-btn" onclick={handleBack} aria-label="Kembali">
			<ChevronLeft size={20} color="white" strokeWidth={2.5} />
		</button>
		<div class="avatar-chip">K</div>
	</div>

	<div class="pt-14">
		<!-- Breadcrumb -->
		{#if breadcrumb.length > 0}
			<nav class="breadcrumb" aria-label="Breadcrumb">
				{#each breadcrumb as crumb, i (crumb)}
					<span>{crumb}</span>
					{#if i < breadcrumb.length - 1}
						<span class="sep">/</span>
					{/if}
				{/each}
			</nav>
		{/if}

		<!-- Title + icon -->
		<div class="header-body">
			<div class="header-text">
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div class="header-icon" aria-hidden="true">
				<!-- svelte-ignore svelte_component_deprecated -->
				<svelte:component this={PageIcon} size={42} color="white" strokeWidth={1.6} />
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	.pelayanan-header {
		position: relative;
		overflow: hidden;
		border-radius: 0 0 36px 36px;
		color: white;

		.circle-1 {
			position: absolute;
			border: solid 15px rgba(255, 255, 255, 0.18);
			border-radius: 50%;
			width: 28%;
			aspect-ratio: 1/1;
			top: -5%;
			right: -8%;
			z-index: 0;
		}

		.circle-2 {
			position: absolute;
			border: solid 15px rgba(255, 255, 255, 0.12);
			border-radius: 50%;
			width: 55%;
			aspect-ratio: 1/1;
			top: 25%;
			left: -28%;
			z-index: 0;
		}
	}

	.nav-row {
		position: fixed;
		width: 100%;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px 20px 6px;
	}

	.back-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.18);
		border: 1px solid rgba(255, 255, 255, 0.25);
		// backdrop-filter: blur(8px);
		cursor: pointer;
		transition: background 0.2s;

		&:hover {
			background: rgba(255, 255, 255, 0.28);
		}
	}

	.avatar-chip {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.22);
		border: 2px solid rgba(255, 255, 255, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		font-weight: 700;
	}

	.breadcrumb {
		position: relative;
		z-index: 10;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 4px;
		padding: 0 20px 10px;
		font-size: 11.5px;
		opacity: 0.78;

		.sep {
			opacity: 0.5;
		}
	}

	.header-body {
		position: relative;
		z-index: 10;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 12px;
		padding: 0 20px;
	}

	.header-text {
		flex: 1;
		min-width: 0;

		h1 {
			font-size: clamp(18px, 4.5vw, 24px);
			font-weight: 900;
			line-height: 1.2;
			margin: 0 0 8px;
			letter-spacing: -0.3px;
			word-break: break-word;
		}

		p {
			font-size: clamp(11px, 2.8vw, 13px);
			line-height: 1.55;
			opacity: 0.88;
			margin: 0;
		}
	}

	.header-icon {
		flex-shrink: 0;
		opacity: 0.85;
		margin-top: 4px;
	}
</style>
