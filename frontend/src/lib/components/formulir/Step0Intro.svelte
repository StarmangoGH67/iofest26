<script lang="ts">
	import NavButton from '$lib/components/formulir/NavButton.svelte';

	const TEAL = '#38BCDA';
	const TEAL_LIGHT = '#E0F7F4';
	const BORDER_DEFAULT = '#E8EAED';
	const TEXT_MAIN = '#1a1a1a';
	const TEXT_LABEL = '#374151';

	interface Props {
		onNext: () => void;
	}

	let { onNext }: Props = $props();
</script>

<div class="overflow-hidden rounded-2xl bg-white" style="border:1px solid {BORDER_DEFAULT};">
	<!-- Alur Permohonan -->
	<div class="p-5" style="border-bottom:1px solid {BORDER_DEFAULT};">
		<h2 class="mb-5 text-base font-bold" style="color:{TEXT_MAIN};">Alur Permohonan</h2>
		<div class="flex flex-col items-center">
			<img src="/Images/Flowchart.svg" alt="Flowchart.png" />
		</div>
	</div>

	<!-- Dokumen Persyaratan -->
	<div class="p-5" style="border-bottom:1px solid {BORDER_DEFAULT};">
		<h2 class="mb-4 text-base font-bold" style="color:{TEXT_MAIN};">Dokumen Persyaratan</h2>
		<div class="grid grid-cols-2 gap-3">
			{#each ['Surat Keterangan\nKelahiran /SPJTM', 'Buku Nikah /\nAkta Perkawinan', 'Kartu Keluarga', 'KTP-el Orang Tua', 'KTP-el Saksi'] as doc (doc)}
				<div
					class="flex items-center justify-center rounded-xl p-4 text-center"
					style="background:{TEAL_LIGHT}; min-height:80px;"
				>
					<p
						class="text-xs leading-snug font-semibold"
						style="color:{TEXT_MAIN}; white-space:pre-line;"
					>
						{doc}
					</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Biaya -->
	<div class="p-5" style="border-bottom:1px solid {BORDER_DEFAULT};">
		<h2 class="mb-2 text-base font-bold" style="color:{TEXT_MAIN};">Biaya</h2>
		<p class="mb-2 text-sm font-semibold" style="color:{TEXT_LABEL};">Gratis.</p>
		<p class="text-sm leading-relaxed" style="color:{TEXT_LABEL};">
			Tolak pihak yang meminta imbalan, termasuk siapapun yang mengaku sebagai petugas/pejabat Dinas
			Kependudukan dan Catatan Sipil ataupun instansi lainnya.
		</p>
		<p class="mt-2 text-sm leading-relaxed" style="color:{TEXT_LABEL};">
			Jangan menawarkan/memberikan imbalan kepada petugas dengan alasan apapun. Pelajari lebih
			lanjut tentang
			<span class="cursor-pointer underline" style="color:{TEAL};">gratifikasi</span>.
		</p>
	</div>

	<!-- Catatan -->
	<div class="p-5">
		<h2 class="mb-2 text-base font-bold" style="color:{TEXT_MAIN};">Catatan</h2>
		<p class="mb-2 text-sm leading-relaxed" style="color:{TEXT_LABEL};">
			SPTJM dipakai sebagai pengganti surat keterangan lahir resmi bidan dokter RS saat urus akta
			kelahiran
		</p>
		<p class="text-sm leading-relaxed" style="color:{TEXT_LABEL};">
			Disarankan untuk melaporkan kelahiran anak dalam kurun waktu kurang dari 60 hari setelah
			kelahiran.
		</p>
	</div>
</div>

<NavButton label="Next →" enabled={true} onclick={onNext} />
