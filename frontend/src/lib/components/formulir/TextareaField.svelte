<script lang="ts">
	import { CircleAlert } from 'lucide-svelte';

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
		placeholder: string;
		error: string;
	}

	let { label, id, value, onchange, placeholder, error }: Props = $props();
</script>

<div>
	<label for={id} class="mb-1.5 block text-sm font-medium" style="color:{TEXT_LABEL};">
		{label} <span style="color:#EF4444;">*</span>
	</label>
	<textarea
		{id}
		{placeholder}
		{value}
		rows={3}
		oninput={(e) => onchange((e.target as HTMLTextAreaElement).value)}
		class="w-full resize-none rounded-xl px-3 py-2.5 text-sm transition-all duration-150 outline-none"
		style="
      border:1.5px solid {error ? BORDER_ERROR : BORDER_DEFAULT};
      background:{error ? BG_ERROR : BG_DEFAULT};
      color:{TEXT_MAIN};
    "
		aria-invalid={error ? 'true' : 'false'}
	></textarea>
	{#if error}
		<p class="mt-1 flex items-center gap-1 text-xs" style="color:#EF4444;">
			<CircleAlert size={11} />{error}
		</p>
	{/if}
</div>
