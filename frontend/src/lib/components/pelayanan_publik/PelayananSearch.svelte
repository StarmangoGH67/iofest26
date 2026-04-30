<script lang="ts">
	import { Search } from 'lucide-svelte';

	interface Props {
		placeholder?: string;
		value?: string;
		primaryColor?: string;
	}

	let {
		placeholder = 'Cari Layanan',
		value = $bindable(''),
		primaryColor = '#109458'
	}: Props = $props();
</script>

<div class="search-wrap">
	<div class="search-inner">
		<span class="search-icon" aria-hidden="true">
			<Search size={16} color="#9CA3AF" strokeWidth={2.5} />
		</span>
		<input
			type="search"
			bind:value
			{placeholder}
			class="search-input"
			style="--focus-ring: {primaryColor}40;"
			aria-label={placeholder}
		/>
	</div>
</div>

<style lang="scss">
	.search-wrap {
		padding: 0 16px;
	}

	.search-inner {
		position: relative;
		display: flex;
		align-items: center;
	}

	.search-icon {
		position: absolute;
		left: 14px;
		display: flex;
		align-items: center;
		pointer-events: none;
	}

	.search-input {
		width: 100%;
		height: 46px;
		border: 1.5px solid #e5e7eb;
		border-radius: 14px;
		background: #f9fafb;
		padding: 0 16px 0 42px;
		font-size: 14px;
		color: #1f2937;
		outline: none;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
		font-family: inherit;
		box-sizing: border-box;

		&::placeholder {
			color: #9ca3af;
		}

		&:focus {
			border-color: #d1d5db;
			box-shadow: 0 0 0 3px var(--focus-ring);
			background: #fff;
		}

		&::-webkit-search-cancel-button {
			-webkit-appearance: none;
		}
	}
</style>
