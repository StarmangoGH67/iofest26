<script lang="ts">
	import type { FlowStep } from '../../types';

	interface Props {
		label: string;
		steps: FlowStep[];
		primaryColor: string;
		secondaryColor: string;
	}

	let { label, steps, primaryColor, secondaryColor }: Props = $props();
	let open = $state(false);
</script>

<div class="accordion-wrap" style="--primary: {primaryColor}; --secondary: {secondaryColor};">
	<button class="accordion-trigger" aria-expanded={open} onclick={() => (open = !open)}>
		<span class="trigger-label">{label}</span>
		<span class="trigger-chevron" class:rotated={open} aria-hidden="true">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				width="16"
				height="16"
			>
				<polyline points="6 9 12 15 18 9" />
			</svg>
		</span>
	</button>

	{#if open}
		<div class="accordion-body">
			<div class="flow-list">
				{#each steps as step}
					<div class="flow-step">
						<div class="step-number" style="background: {primaryColor}; color: white;">
							{step.number}
						</div>
						<span class="step-label">{step.label}</span>
					</div>
					{#if step.number < steps.length}
						<div class="step-connector" style="background: {primaryColor}33;"></div>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.accordion-wrap {
		margin: 0 16px 20px;
		border: 1.5px solid #e5e7eb;
		border-radius: 14px;
		overflow: hidden;
		background: white;
	}

	.accordion-trigger {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px 16px;
		background: white;
		border: none;
		cursor: pointer;
		text-align: left;
		transition: background 0.18s;
	}

	.accordion-trigger:hover {
		background: #f9fafb;
	}

	.trigger-label {
		font-size: 13.5px;
		font-weight: 600;
		color: #1f2937;
	}

	.trigger-chevron {
		color: #6b7280;
		display: flex;
		align-items: center;
		transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.trigger-chevron.rotated {
		transform: rotate(180deg);
	}

	.accordion-body {
		border-top: 1.5px solid #f0f0f0;
		padding: 16px;
	}

	.flow-list {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.flow-step {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 4px 0;
	}

	.step-number {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
		font-weight: 700;
		flex-shrink: 0;
	}

	.step-label {
		font-size: 13.5px;
		color: #374151;
		font-weight: 500;
	}

	.step-connector {
		width: 2px;
		height: 16px;
		border-radius: 2px;
		margin-left: 14px;
	}
</style>
