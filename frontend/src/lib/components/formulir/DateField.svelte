<script lang="ts">
	import { AlertCircle } from 'lucide-svelte';

	const BORDER_DEFAULT = '#E8EAED';
	const BORDER_ERROR = '#FCA5A5';
	const BG_DEFAULT = '#FAFAFA';
	const BG_ERROR = '#FEF2F2';
	const TEXT_MAIN = '#1a1a1a';
	const TEXT_LABEL = '#374151';

	interface Props {
		label: string;
		id: string;
		value: string;
		onchange: (v: string) => void;
		error: string;
		required?: boolean;
	}

	let { label, id, value, onchange, error, required = true }: Props = $props();
</script>

<div>
	<label for={id} class="mb-1.5 block text-sm font-medium" style="color:{TEXT_LABEL};">
		{label}
		{#if required}<span style="color:#EF4444;"> *</span>{/if}
	</label>
	<input
		{id}
		type="date"
		{value}
		oninput={(e) => onchange((e.target as HTMLInputElement).value)}
		class="w-full rounded-xl px-3 py-2.5 text-sm transition-all duration-150 outline-none"
		style="
      border:1.5px solid {error ? BORDER_ERROR : BORDER_DEFAULT};
      background:{error ? BG_ERROR : BG_DEFAULT};
      color:{TEXT_MAIN};
    "
		aria-invalid={error ? 'true' : 'false'}
	/>
	{#if error}
		<p class="mt-1 flex items-center gap-1 text-xs" style="color:#EF4444;">
			<AlertCircle size={11} />{error}
		</p>
	{/if}
</div>
