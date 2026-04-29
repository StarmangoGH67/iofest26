<script lang="ts">
	interface Props {
		placeholder?: string;
		value?: string;
		primaryColor?: string;
		oninput?: (e: Event) => void;
	}

	let {
		placeholder = 'Cari Layanan',
		value = $bindable(''),
		primaryColor = '#0B6E4F',
		oninput
	}: Props = $props();
</script>

<div class="search-wrap">
	<div class="search-inner">
		<span class="search-icon" aria-hidden="true">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				width="17"
				height="17"
			>
				<circle cx="11" cy="11" r="8" />
				<line x1="21" y1="21" x2="16.65" y2="16.65" />
			</svg>
		</span>
		<input
			type="search"
			bind:value
			{placeholder}
			{oninput}
			class="search-input"
			style="--focus-ring: {primaryColor}33;"
			aria-label={placeholder}
		/>
	</div>
</div>

<style>
	.search-wrap {
		padding: 0 16px;
		margin-bottom: 4px;
	}

	.search-inner {
		position: relative;
		display: flex;
		align-items: center;
	}

	.search-icon {
		position: absolute;
		left: 14px;
		color: #888;
		display: flex;
		align-items: center;
		pointer-events: none;
	}

	.search-input {
		width: 100%;
		height: 46px;
		border: 1.5px solid #e5e7eb;
		border-radius: 12px;
		background: #f9fafb;
		padding: 0 16px 0 44px;
		font-size: 14px;
		color: #1f2937;
		outline: none;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
		font-family: inherit;
		box-sizing: border-box;
	}

	.search-input::placeholder {
		color: #9ca3af;
	}

	.search-input:focus {
		border-color: #d1d5db;
		box-shadow: 0 0 0 3px var(--focus-ring, #0b6e4f33);
		background: #fff;
	}

	.search-input::-webkit-search-cancel-button {
		-webkit-appearance: none;
	}
</style>
