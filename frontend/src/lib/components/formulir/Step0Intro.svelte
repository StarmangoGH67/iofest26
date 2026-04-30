<script lang="ts">
	import NavButton from './form/NavButton.svelte';

	const TEAL = '#38BCDA';
	const TEAL_LIGHT = '#E0F7F4';
	const BORDER_DEFAULT = '#E8EAED';
	const TEXT_MAIN = '#1a1a1a';
	const TEXT_SECONDARY = '#6B7280';
	const TEXT_LABEL = '#374151';

	interface Props {
		onNext: () => void;
	}

	let { onNext }: Props = $props();
</script>

{#snippet arrow()}
	<div class="flex flex-col items-center" style="height:22px;">
		<div style="width:2px; height:14px; background:{TEAL};"></div>
		<div
			style="
        width:0; height:0;
        border-left:5px solid transparent;
        border-right:5px solid transparent;
        border-top:7px solid {TEAL};
      "
		></div>
	</div>
{/snippet}

<div class="overflow-hidden rounded-2xl bg-white" style="border:1px solid {BORDER_DEFAULT};">
	<!-- Alur Permohonan -->
	<div class="p-5" style="border-bottom:1px solid {BORDER_DEFAULT};">
		<h2 class="mb-5 text-base font-bold" style="color:{TEXT_MAIN};">Alur Permohonan</h2>
		<div class="flex flex-col items-center">
			<!-- Mulai pill -->
			<div
				class="rounded-full px-6 py-2 text-xs font-semibold text-white"
				style="background:{TEAL}; min-width:120px; text-align:center;"
			>
				Mulai
			</div>
			{@render arrow()}
			<!-- Step box -->
			<div
				class="px-4 py-3 text-center text-xs font-medium text-white"
				style="background:{TEAL}; border-radius:6px; width:220px; line-height:1.5;"
			>
				Penduduk mengisi permohonan dan<br />mengupload dokumen persyaratan
			</div>
			{@render arrow()}
			<div
				class="px-4 py-3 text-center text-xs font-medium text-white"
				style="background:{TEAL}; border-radius:6px; width:220px;"
			>
				Petugas memverifikasi pengajuan
			</div>
			{@render arrow()}
			<!-- Diamond decision -->
			<div class="relative my-1 flex items-center justify-center">
				<div
					class="flex items-center justify-center text-center text-xs font-medium text-white"
					style="
            background:{TEAL};
            width:130px; height:60px;
            clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);
            padding:0 18px;
            line-height:1.3;
          "
				>
					Data dan dokumen tersedia
				</div>
				<span class="absolute text-xs font-medium" style="right:-38px; color:{TEXT_SECONDARY};"
					>Tidak</span
				>
			</div>
			{@render arrow()}
			<div
				class="px-4 py-3 text-center text-xs font-medium text-white"
				style="background:{TEAL}; border-radius:6px; width:220px;"
			>
				Akta Kelahiran diterbitkan
			</div>
			{@render arrow()}
			<div
				class="rounded-full px-6 py-2 text-xs font-semibold text-white"
				style="background:{TEAL}; min-width:120px; text-align:center;"
			>
				Selesai
			</div>
		</div>
	</div>

	<!-- Dokumen Persyaratan -->
	<div class="p-5" style="border-bottom:1px solid {BORDER_DEFAULT};">
		<h2 class="mb-4 text-base font-bold" style="color:{TEXT_MAIN};">Dokumen Persyaratan</h2>
		<div class="grid grid-cols-2 gap-3">
			{#each ['Surat Keterangan\nKelahiran /SPJTM', 'Buku Nikah /\nAkta Perkawinan', 'Kartu Keluarga', 'KTP-el Orang Tua', 'KTP-el Saksi'] as doc}
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
