<script lang="ts">
	import * as Icons from 'lucide-svelte';
	import type { Component } from 'svelte';

	interface Props {
		iconName: keyof typeof Icons;
		title: string;
		bgColor: string;
		iconColor: string;
	}

	let { iconName, title, bgColor, iconColor }: Props = $props();

	const IconComponent = $derived((Icons[iconName] as unknown as Component) || Icons.HelpCircle);
</script>

<div class="svc-item" role="button" tabindex="0">
	<div class="icon-container" style:background={bgColor}>
		<IconComponent size={24} color={iconColor} strokeWidth={2.5} />
	</div>
	<span class="label">{title}</span>
</div>

<style lang="scss">
	.svc-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		user-select: none;

		&:active {
			transform: scale(0.9);
		}

		.icon-container {
			width: 60px;
			height: 60px;
			border-radius: 18px;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
			transition: filter 0.2s;

			&:hover {
				filter: brightness(0.95);
			}
		}

		.label {
			font-size: 11px;
			font-weight: 700;
			color: #1a1a1a;
			text-align: center;
			line-height: 1.3;
			max-width: 85px;
		}
	}
</style>
