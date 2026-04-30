<script lang="ts">
	import { ArrowLeft, Check } from 'lucide-svelte';

	const TEAL = '#38BCDA';
	const TEXT_MAIN = '#1a1a1a';
	const TEXT_SECONDARY = '#6B7280';
	const GRAY_300 = '#D9DCDF';

	const STEPS: { label: string; sublabel: string }[] = [
		{ label: 'Sebelum', sublabel: 'memulai' },
		{ label: 'Data', sublabel: 'pemohon' },
		{ label: 'Data', sublabel: 'orangtua' },
		{ label: 'Data', sublabel: 'Anak' },
		{ label: 'Selesai', sublabel: '' }
	];

	interface Props {
		currentStep: number;
		onBack: () => void;
	}

	let { currentStep, onBack }: Props = $props();
</script>

<div class="sticky top-0 z-20" style="background:#fff; border-bottom:1px solid {GRAY_300};">
	<div class="mx-auto max-w-3xl px-4 pt-4 pb-0">
		<!-- Back + Title row -->
		<div class="relative mb-4 flex items-center">
			{#if currentStep > 0 && currentStep < 4}
				<button
					onclick={onBack}
					class="absolute left-0 flex items-center gap-1 text-sm font-semibold focus:outline-none"
					style="color:{TEAL};"
					aria-label="Kembali"
				>
					<ArrowLeft size={16} />
					<span>Kembali</span>
				</button>
			{/if}
			<div class="flex-1 text-center">
				<h1 class="text-[15px] leading-snug font-bold" style="color:{TEXT_MAIN};">
					Formulir Pelaporan<br />Kelahiran
				</h1>
			</div>
		</div>

		<!-- Stepper -->
		<div class="relative flex items-start pb-4">
			<!-- base track -->
			<div
				class="absolute top-[13px] right-[28px] left-[28px] h-[2px]"
				style="background:{GRAY_300};"
			></div>
			<!-- filled track -->
			<div
				class="absolute top-[13px] left-[28px] h-[2px] transition-all duration-500"
				style="background:{TEAL}; width:calc({currentStep} / 4 * (100% - 56px));"
			></div>

			{#each STEPS as step, i}
				{@const done = i < currentStep}
				{@const active = i === currentStep}
				<div class="relative z-10 flex flex-1 flex-col items-center gap-[5px]">
					<!-- circle -->
					<div
						class="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 transition-all duration-300"
						style="
              background:{done ? TEAL : '#fff'};
              border-color:{done || active ? TEAL : GRAY_300};
            "
					>
						{#if done}
							<Check size={12} color="#fff" strokeWidth={3} />
						{:else if active}
							<div class="h-[10px] w-[10px] rounded-full" style="background:{TEAL};"></div>
						{:else}
							<div class="h-[8px] w-[8px] rounded-full" style="background:{GRAY_300};"></div>
						{/if}
					</div>
					<!-- label -->
					<div class="text-center leading-none">
						<p
							class="text-[10px] font-semibold"
							style="color:{done || active ? TEAL : TEXT_SECONDARY};"
						>
							{step.label}
						</p>
						{#if step.sublabel}
							<p class="text-[10px]" style="color:{done || active ? TEAL : TEXT_SECONDARY};">
								{step.sublabel}
							</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
