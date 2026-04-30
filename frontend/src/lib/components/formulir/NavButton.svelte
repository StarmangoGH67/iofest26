<script lang="ts">
	const TEAL = '#38BCDA';

	interface Props {
		label: string;
		enabled: boolean;
		onclick: () => void;
	}

	let { label, enabled, onclick }: Props = $props();
</script>

<div class="mt-5 flex justify-end">
	<button
		{onclick}
		class="rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-200 focus:outline-none"
		style="background:{enabled ? TEAL : '#A7D9D4'}; cursor:{enabled ? 'pointer' : 'not-allowed'};"
		aria-disabled={!enabled}
	>
		{label}
	</button>
</div>
