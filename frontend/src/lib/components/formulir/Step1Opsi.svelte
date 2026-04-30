<script lang="ts">
	import { AlertCircle } from 'lucide-svelte';
	import NavButton from './form/NavButton.svelte';

	type OpsiPengurusan = 'milik_sendiri' | 'anak_kandung' | 'orang_lain' | '';

	const TEAL = '#38BCDA';
	const BORDER_DEFAULT = '#E8EAED';
	const TEXT_MAIN = '#1a1a1a';
	const TEXT_SECONDARY = '#6B7280';
	const TEXT_LABEL = '#374151';
	const GRAY_300 = '#D9DCDF';

	interface Props {
		opsi: OpsiPengurusan;
		opsiTouched: boolean;
		submitAttempted: boolean;
		onOpsiChange: (v: OpsiPengurusan) => void;
		onNext: () => void;
	}

	let { opsi, opsiTouched, submitAttempted, onOpsiChange, onNext }: Props = $props();
</script>

<div class="overflow-hidden rounded-2xl bg-white" style="border:1px solid {BORDER_DEFAULT};">
	<div class="p-5">
		<h2 class="mb-1 text-base font-bold" style="color:{TEXT_MAIN};">Opsi Pengurusan</h2>
		<p class="mb-5 text-sm" style="color:{TEXT_SECONDARY};">
			Pencatatan kelahiran siapa yang anda urus?
		</p>

		<div class="space-y-3">
			{#each [{ value: 'milik_sendiri' as OpsiPengurusan, label: 'Milik Sendiri' }, { value: 'anak_kandung' as OpsiPengurusan, label: 'Anak Kandung' }, { value: 'orang_lain' as OpsiPengurusan, label: 'Orang Lain Beda Kartu Keluarga' }] as opt}
				<label
					class="flex cursor-pointer items-center gap-3 rounded-xl p-3 transition-all"
					style="
            border:1.5px solid {opsi === opt.value ? TEAL : BORDER_DEFAULT};
            background:{opsi === opt.value ? '#F0FDFB' : '#fff'};
          "
				>
					<input
						type="radio"
						name="opsi"
						value={opt.value}
						checked={opsi === opt.value}
						onchange={() => {
							onOpsiChange(opt.value);
						}}
						class="sr-only"
					/>
					<div
						class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all"
						style="border-color:{opsi === opt.value ? TEAL : GRAY_300};"
					>
						{#if opsi === opt.value}
							<div class="h-[10px] w-[10px] rounded-full" style="background:{TEAL};"></div>
						{/if}
					</div>
					<span class="text-sm font-medium" style="color:{TEXT_MAIN};">
						{opt.label}
					</span>
				</label>
			{/each}
		</div>

		{#if (opsiTouched || submitAttempted) && opsi === ''}
			<p class="mt-3 flex items-center gap-1 text-xs" style="color:#EF4444;">
				<AlertCircle size={12} />
				Pilih salah satu opsi pengurusan
			</p>
		{/if}

		<!-- Note box -->
		<div class="mt-5 rounded-xl p-4" style="background:#FFFBEB;">
			<p class="mb-1 text-sm font-bold" style="color:{TEXT_MAIN};">Note</p>
			<p class="text-sm leading-relaxed" style="color:{TEXT_LABEL};">
				Jika mengurus untuk orang lain yang berbeda kartu keluarga, mohon lengkapi data dan unggah
				surat kuasa beserta KTP pemberi dan penerima kuasa.
			</p>
		</div>
	</div>
</div>

<NavButton label="Next →" enabled={opsi !== ''} onclick={onNext} />
