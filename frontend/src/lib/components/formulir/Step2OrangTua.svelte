<script lang="ts">
	import { AlertCircle } from 'lucide-svelte';
	import UploadZone from '$lib/components/formulir/UploadZone.svelte';
	import InputField from '$lib/components/formulir/InputField.svelte';
	import DateField from '$lib/components/formulir/DateField.svelte';
	import TextareaField from '$lib/components/formulir/TextareaField.svelte';
	import NavButton from '$lib/components/formulir/NavButton.svelte';

	const TEAL = '#38BCDA';
	const BORDER_DEFAULT = '#E8EAED';

	type ParentField =
		| 'file'
		| 'namaLengkap'
		| 'nik'
		| 'tempatLahir'
		| 'tanggalLahir'
		| 'pekerjaan'
		| 'alamat';

	interface ParentData {
		file: File | null;
		filePreview: string | null;
		namaLengkap: string;
		nik: string;
		tempatLahir: string;
		tanggalLahir: string;
		pekerjaan: string;
		alamat: string;
	}

	interface Props {
		ayah: ParentData;
		ibu: ParentData;
		ayahTouched: Record<ParentField, boolean>;
		ibuTouched: Record<ParentField, boolean>;
		ayahErrors: Record<ParentField, string>;
		ibuErrors: Record<ParentField, string>;
		ayahValid: boolean;
		ibuValid: boolean;
		orangtuaValid: boolean;
		submitAttempted: boolean;
		ayahDrag: boolean;
		ibuDrag: boolean;
		onAyahField: (field: ParentField, value: string) => void;
		onIbuField: (field: ParentField, value: string) => void;
		onAyahDragOver: () => void;
		onAyahDragLeave: () => void;
		onAyahDrop: (e: DragEvent) => void;
		onAyahFileChange: (e: Event) => void;
		onAyahRemove: () => void;
		onIbuDragOver: () => void;
		onIbuDragLeave: () => void;
		onIbuDrop: (e: DragEvent) => void;
		onIbuFileChange: (e: Event) => void;
		onIbuRemove: () => void;
		onNext: () => void;
		errMsg: (
			errors: Record<string, string>,
			touched: Record<string, boolean>,
			field: string
		) => string;
	}

	let {
		ayah,
		ibu,
		ayahTouched,
		ibuTouched,
		ayahErrors,
		ibuErrors,
		ayahValid,
		ibuValid,
		orangtuaValid,
		submitAttempted,
		ayahDrag,
		ibuDrag,
		onAyahField,
		onIbuField,
		onAyahDragOver,
		onAyahDragLeave,
		onAyahDrop,
		onAyahFileChange,
		onAyahRemove,
		onIbuDragOver,
		onIbuDragLeave,
		onIbuDrop,
		onIbuFileChange,
		onIbuRemove,
		onNext,
		errMsg
	}: Props = $props();
</script>

<div class="space-y-5 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
	<!-- Data Ayah Kandung -->
	<div class="overflow-hidden rounded-2xl" style="border:1px solid {BORDER_DEFAULT};">
		<div class="px-5 py-4" style="background:{TEAL};">
			<p class="mb-0.5 text-xs font-bold tracking-wider text-white uppercase">
				● Data Ayah Kandung
			</p>
			<p class="text-xs" style="color:rgba(255,255,255,0.75);">
				Silakan unggah KTP ayah (dalam bentuk PDF/Gambar)
			</p>
		</div>
		<div class="space-y-4 bg-white p-5">
			<UploadZone
				who="ayah"
				data={ayah}
				isDrag={ayahDrag}
				error={errMsg(ayahErrors, ayahTouched, 'file')}
				onDragOver={onAyahDragOver}
				onDragLeave={onAyahDragLeave}
				onDrop={onAyahDrop}
				onFileChange={onAyahFileChange}
				onRemove={onAyahRemove}
			/>
			<InputField
				label="Nama Ayah Kandung"
				id="ayah-nama"
				type="text"
				value={ayah.namaLengkap}
				onchange={(v) => onAyahField('namaLengkap', v)}
				placeholder="Masukkan Nama Lengkap"
				error={errMsg(ayahErrors, ayahTouched, 'namaLengkap')}
			/>
			<InputField
				label="NIK Ayah Kandung"
				id="ayah-nik"
				type="text"
				value={ayah.nik}
				onchange={(v) => onAyahField('nik', v.replace(/\D/g, '').slice(0, 16))}
				placeholder="xxxxxxxxxxxxxxxx"
				error={errMsg(ayahErrors, ayahTouched, 'nik')}
			/>
			<InputField
				label="Tempat Tanggal Lahir"
				id="ayah-tempat"
				type="text"
				value={ayah.tempatLahir}
				onchange={(v) => onAyahField('tempatLahir', v)}
				placeholder="Jakarta, 01 Januari 2000"
				error={errMsg(ayahErrors, ayahTouched, 'tempatLahir')}
			/>
			<DateField
				label="Tanggal Lahir"
				id="ayah-tgl"
				value={ayah.tanggalLahir}
				onchange={(v) => onAyahField('tanggalLahir', v)}
				error={errMsg(ayahErrors, ayahTouched, 'tanggalLahir')}
			/>
			<InputField
				label="Pekerjaan"
				id="ayah-kerja"
				type="text"
				value={ayah.pekerjaan}
				onchange={(v) => onAyahField('pekerjaan', v)}
				placeholder="Masukkan nama pekerjaan"
				error={errMsg(ayahErrors, ayahTouched, 'pekerjaan')}
			/>
			<TextareaField
				label="Alamat"
				id="ayah-alamat"
				value={ayah.alamat}
				onchange={(v) => onAyahField('alamat', v)}
				placeholder="Masukkan alamat lengkap"
				error={errMsg(ayahErrors, ayahTouched, 'alamat')}
			/>
		</div>
	</div>

	<!-- Data Ibu Kandung -->
	<div class="overflow-hidden rounded-2xl" style="border:1px solid {BORDER_DEFAULT};">
		<div class="px-5 py-4" style="background:{TEAL};">
			<p class="mb-0.5 text-xs font-bold tracking-wider text-white uppercase">● Data Ibu Kandung</p>
			<p class="text-xs" style="color:rgba(255,255,255,0.75);">
				Silakan unggah KTP ibu (dalam bentuk PDF/Gambar)
			</p>
		</div>
		<div class="space-y-4 bg-white p-5">
			<UploadZone
				who="ibu"
				data={ibu}
				isDrag={ibuDrag}
				error={errMsg(ibuErrors, ibuTouched, 'file')}
				onDragOver={onIbuDragOver}
				onDragLeave={onIbuDragLeave}
				onDrop={onIbuDrop}
				onFileChange={onIbuFileChange}
				onRemove={onIbuRemove}
			/>
			<InputField
				label="Nama Ibu Kandung"
				id="ibu-nama"
				type="text"
				value={ibu.namaLengkap}
				onchange={(v) => onIbuField('namaLengkap', v)}
				placeholder="Masukkan Nama Lengkap"
				error={errMsg(ibuErrors, ibuTouched, 'namaLengkap')}
			/>
			<InputField
				label="NIK Ibu Kandung"
				id="ibu-nik"
				type="text"
				value={ibu.nik}
				onchange={(v) => onIbuField('nik', v.replace(/\D/g, '').slice(0, 16))}
				placeholder="xxxxxxxxxxxxxxxx"
				error={errMsg(ibuErrors, ibuTouched, 'nik')}
			/>
			<InputField
				label="Tempat Tanggal Lahir"
				id="ibu-tempat"
				type="text"
				value={ibu.tempatLahir}
				onchange={(v) => onIbuField('tempatLahir', v)}
				placeholder="Jakarta, 01 Januari 2000"
				error={errMsg(ibuErrors, ibuTouched, 'tempatLahir')}
			/>
			<DateField
				label="Tanggal Lahir"
				id="ibu-tgl"
				value={ibu.tanggalLahir}
				onchange={(v) => onIbuField('tanggalLahir', v)}
				error={errMsg(ibuErrors, ibuTouched, 'tanggalLahir')}
			/>
			<InputField
				label="Pekerjaan"
				id="ibu-kerja"
				type="text"
				value={ibu.pekerjaan}
				onchange={(v) => onIbuField('pekerjaan', v)}
				placeholder="Masukkan nama pekerjaan"
				error={errMsg(ibuErrors, ibuTouched, 'pekerjaan')}
			/>
			<TextareaField
				label="Alamat"
				id="ibu-alamat"
				value={ibu.alamat}
				onchange={(v) => onIbuField('alamat', v)}
				placeholder="Masukkan alamat lengkap"
				error={errMsg(ibuErrors, ibuTouched, 'alamat')}
			/>
		</div>
	</div>
</div>

{#if submitAttempted && !orangtuaValid}
	<div
		class="mt-4 flex items-start gap-3 rounded-xl p-4"
		style="background:#FEF2F2; border:1px solid #FECACA;"
	>
		<AlertCircle size={16} color="#EF4444" class="mt-0.5 shrink-0" />
		<div>
			<p class="text-sm font-semibold" style="color:#B91C1C;">Mohon lengkapi data berikut:</p>
			<ul class="mt-1 list-inside list-disc space-y-0.5 text-xs" style="color:#DC2626;">
				{#if !ayahValid}<li>Data Ayah Kandung belum lengkap</li>{/if}
				{#if !ibuValid}<li>Data Ibu Kandung belum lengkap</li>{/if}
			</ul>
		</div>
	</div>
{/if}

<NavButton label="Next →" enabled={orangtuaValid} onclick={onNext} />
