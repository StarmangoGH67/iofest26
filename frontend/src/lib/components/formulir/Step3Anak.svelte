<script lang="ts">
	import { AlertCircle } from 'lucide-svelte';
	import InputField from '$lib/components/formulir/InputField.svelte';
	import DateField from '$lib/components/formulir/DateField.svelte';
	import SelectField from '$lib/components/formulir/SelectField.svelte';
	import NavButton from '$lib/components/formulir/NavButton.svelte';

	const TEAL = '#38BCDA';
	const BORDER_DEFAULT = '#E8EAED';
	const TEXT_MAIN = '#1a1a1a';
	const TEXT_LABEL = '#374151';
	const GRAY_300 = '#D9DCDF';

	interface AnakData {
		namaAnak: string;
		nikAnak: string;
		jenisKelamin: 'pria' | 'wanita' | '';
		tempatKelahiran: string;
		kabupatenKota: string;
		tanggalLahir: string;
		jenisKelahiran: string;
		anakKe: string;
		penolongKelahiran: string;
		beratBayi: string;
		panjangBayi: string;
	}

	type AnakField = keyof AnakData;

	interface Props {
		anak: AnakData;
		anakTouched: Record<AnakField, boolean>;
		anakErrors: Record<AnakField, string>;
		anakValid: boolean;
		submitAttempted: boolean;
		onAnakField: (field: AnakField, value: string) => void;
		onJenisKelamin: (v: 'pria' | 'wanita') => void;
		onNext: () => void;
		errMsg: (
			errors: Record<string, string>,
			touched: Record<string, boolean>,
			field: string
		) => string;
	}

	let {
		anak,
		anakTouched,
		anakErrors,
		anakValid,
		onAnakField,
		onJenisKelamin,
		onNext,
		errMsg
	}: Props = $props();
</script>

<div class="overflow-hidden rounded-2xl bg-white" style="border:1px solid {BORDER_DEFAULT};">
	<div class="space-y-4 p-5">
		<h2 class="text-base font-bold" style="color:{TEXT_MAIN};">Data Anak</h2>

		<InputField
			label="Nama Anak"
			id="anak-nama"
			type="text"
			value={anak.namaAnak}
			onchange={(v) => onAnakField('namaAnak', v)}
			placeholder="Masukkan Nama Lengkap"
			error={errMsg(anakErrors, anakTouched, 'namaAnak')}
		/>

		<InputField
			label="NIK Anak (jika sudah memiliki)"
			id="anak-nik"
			type="text"
			value={anak.nikAnak}
			onchange={(v) => onAnakField('nikAnak', v.replace(/\D/g, '').slice(0, 16))}
			placeholder="xxxxxxxxxxxxxx"
			error={errMsg(anakErrors, anakTouched, 'nikAnak')}
			required={false}
		/>

		<!-- Jenis Kelamin -->
		<div>
			<p class="mb-2 text-sm font-medium" style="color:{TEXT_LABEL};">
				Jenis Kelamin <span style="color:#EF4444;">*</span>
			</p>
			<div class="flex gap-6">
				{#each [{ v: 'pria' as const, l: 'Pria' }, { v: 'wanita' as const, l: 'Wanita' }] as jk (jk)}
					<label class="flex cursor-pointer items-center gap-2">
						<input
							type="radio"
							name="jk"
							value={jk.v}
							checked={anak.jenisKelamin === jk.v}
							onchange={() => {
								onJenisKelamin(jk.v);
							}}
							class="sr-only"
						/>
						<div
							class="flex h-5 w-5 items-center justify-center rounded-full border-2"
							style="border-color:{anak.jenisKelamin === jk.v ? TEAL : GRAY_300};"
						>
							{#if anak.jenisKelamin === jk.v}
								<div class="h-2.5 w-2.5 rounded-full" style="background:{TEAL};"></div>
							{/if}
						</div>
						<span class="text-sm" style="color:{TEXT_LABEL};">{jk.l}</span>
					</label>
				{/each}
			</div>
			{#if errMsg(anakErrors, anakTouched, 'jenisKelamin')}
				<p class="mt-1 flex items-center gap-1 text-xs" style="color:#EF4444;">
					<AlertCircle size={11} />
					{errMsg(anakErrors, anakTouched, 'jenisKelamin')}
				</p>
			{/if}
		</div>

		<SelectField
			label="Tempat Kelahiran"
			id="anak-tempat"
			value={anak.tempatKelahiran}
			onchange={(v) => onAnakField('tempatKelahiran', v)}
			placeholder="Pilih Tempat Kelahiran"
			options={['Rumah Sakit', 'Klinik', 'Puskesmas', 'Rumah', 'Bidan', 'Lainnya']}
			error={errMsg(anakErrors, anakTouched, 'tempatKelahiran')}
		/>

		<InputField
			label="Kabupaten/Kota Kelahiran"
			id="anak-kab"
			type="text"
			value={anak.kabupatenKota}
			onchange={(v) => onAnakField('kabupatenKota', v)}
			placeholder="Jakarta"
			error={errMsg(anakErrors, anakTouched, 'kabupatenKota')}
		/>

		<DateField
			label="Tanggal Lahir"
			id="anak-tgl"
			value={anak.tanggalLahir}
			onchange={(v) => onAnakField('tanggalLahir', v)}
			error={errMsg(anakErrors, anakTouched, 'tanggalLahir')}
		/>

		<SelectField
			label="Jenis Kelahiran"
			id="anak-jenis"
			value={anak.jenisKelahiran}
			onchange={(v) => onAnakField('jenisKelahiran', v)}
			placeholder="Pilih Jenis Kelahiran"
			options={['Kelahiran Tunggal', 'Kelahiran Kembar', 'Kelahiran Khusus']}
			error={errMsg(anakErrors, anakTouched, 'jenisKelahiran')}
		/>

		<InputField
			label="Anak ke-"
			id="anak-ke"
			type="number"
			value={anak.anakKe}
			onchange={(v) => onAnakField('anakKe', v)}
			placeholder="1"
			error={errMsg(anakErrors, anakTouched, 'anakKe')}
		/>

		<SelectField
			label="Penolong Kelahiran"
			id="anak-penolong"
			value={anak.penolongKelahiran}
			onchange={(v) => onAnakField('penolongKelahiran', v)}
			placeholder="Pilih Penolong Kelahiran"
			options={['Dokter', 'Bidan', 'Dukun Beranak/Paraji', 'Lainnya']}
			error={errMsg(anakErrors, anakTouched, 'penolongKelahiran')}
		/>

		<InputField
			label="Berat Bayi (Kg)"
			id="anak-berat"
			type="number"
			value={anak.beratBayi}
			onchange={(v) => onAnakField('beratBayi', v)}
			placeholder="1"
			error={errMsg(anakErrors, anakTouched, 'beratBayi')}
		/>

		<InputField
			label="Panjang Bayi (Cm)"
			id="anak-panjang"
			type="number"
			value={anak.panjangBayi}
			onchange={(v) => onAnakField('panjangBayi', v)}
			placeholder="1"
			error={errMsg(anakErrors, anakTouched, 'panjangBayi')}
		/>
	</div>
</div>

<!-- Warning note before submit -->
<div
	class="mt-3 flex items-start gap-2 rounded-xl p-4"
	style="background:#FFFBEB; border:1px solid #FDE68A;"
>
	<AlertCircle size={15} color="#D97706" class="mt-0.5 shrink-0" />
	<p class="text-xs leading-relaxed" style="color:#92400E;">
		Pastikan semua data yang dimasukkan sudah benar sebelum mengirim formulir. Data yang sudah
		dikirim tidak dapat diubah tanpa menghubungi petugas.
	</p>
</div>

<NavButton label="Kirim" enabled={anakValid} onclick={onNext} />
