<script lang="ts">
	import { Check } from 'lucide-svelte';

	const TEAL = '#38BCDA';
	const BORDER_DEFAULT = '#E8EAED';
	const TEXT_MAIN = '#1a1a1a';
	const TEXT_SECONDARY = '#6B7280';
	const TEXT_LABEL = '#374151';

	interface Props {
		onHome: () => void;
	}

	let { onHome }: Props = $props();
</script>

<div class="overflow-hidden rounded-2xl bg-white" style="border:1px solid {BORDER_DEFAULT};">
	<div class="flex flex-col items-center gap-5 px-8 py-14 text-center">
		<!-- Check circle -->
		<div
			class="flex h-18 w-18 items-center justify-center rounded-full border-2"
			style="border-color:{TEAL};"
		>
			<Check size={34} color={TEAL} strokeWidth={2.5} />
		</div>

		<div>
			<h2 class="mb-2 text-xl font-bold" style="color:{TEXT_MAIN};">Pengajuan Berhasil!</h2>
			<p class="text-sm leading-relaxed" style="color:{TEXT_SECONDARY};">
				Data Anda telah kami terima untuk diproses.<br />
				Mohon tunggu verifikasi petugas.
			</p>
		</div>

		<div class="mt-2 w-full space-y-3">
			<button
				onclick={onHome}
				class="w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none"
				style="background:#1976D2;"
			>
				Kembali ke Beranda
			</button>
			<button
				class="w-full rounded-full py-3 text-sm font-semibold transition-opacity hover:opacity-80 focus:outline-none"
				style="background:#E8EAED; color:{TEXT_LABEL};"
			>
				Lihat Status Pengajuan
			</button>
		</div>
	</div>
</div>
