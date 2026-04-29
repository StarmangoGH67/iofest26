<script lang="ts">
	import type { Component } from 'svelte';
	interface Props {
		icon?: Component;
		title: string;
		bgColor: string;
		isInverse: boolean;
	}
	let { icon, title, bgColor, isInverse }: Props = $props();
	const IconComponent = $derived(icon ?? null);
	const baseClass =
		'w-full rounded-2xl flex flex-row items-center justify-center gap-2 py-3.5 text-[15px] font-bold transition-transform active:scale-95';
</script>

<button
	class={baseClass}
	style={isInverse
		? `border: 2px solid ${bgColor}; background: transparent; color: ${bgColor};`
		: `background: ${bgColor}; color: white;`}
>
	{#if IconComponent}
		<!-- svelte-ignore svelte_component_deprecated -->
		<svelte:component
			this={IconComponent}
			size={24}
			color={isInverse ? bgColor : 'white'}
			strokeWidth={2.5}
		/>
	{/if}
	{title}
</button>
