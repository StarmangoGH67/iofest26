<script lang="ts">
	import Stepper from '$lib/components/formulir/Stepper.svelte';
	import Step0Intro from '$lib/components/formulir/Step0Intro.svelte';
	import Step1Opsi from '$lib/components/formulir/Step1Opsi.svelte';
	import Step2OrangTua from '$lib/components/formulir/Step2OrangTua.svelte';
	import Step3Anak from '$lib/components/formulir/Step3Anak.svelte';
	import Step4Success from '$lib/components/formulir/Step4Success.svelte';

	// ─── Types ───────────────────────────────────────────────────────────────

	type OpsiPengurusan = 'milik_sendiri' | 'anak_kandung' | 'orang_lain' | '';

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

	type ParentField =
		| 'file'
		| 'namaLengkap'
		| 'nik'
		| 'tempatLahir'
		| 'tanggalLahir'
		| 'pekerjaan'
		| 'alamat';

	type AnakField = keyof AnakData;

	// ─── State ───────────────────────────────────────────────────────────────

	let currentStep = $state(0);

	// Step 1
	let opsi = $state<OpsiPengurusan>('');
	let opsiTouched = $state(false);

	// Step 2
	let ayah = $state<ParentData>({
		file: null,
		filePreview: null,
		namaLengkap: '',
		nik: '',
		tempatLahir: '',
		tanggalLahir: '',
		pekerjaan: '',
		alamat: ''
	});
	let ibu = $state<ParentData>({
		file: null,
		filePreview: null,
		namaLengkap: '',
		nik: '',
		tempatLahir: '',
		tanggalLahir: '',
		pekerjaan: '',
		alamat: ''
	});

	let ayahTouched = $state<Record<ParentField, boolean>>({
		file: false,
		namaLengkap: false,
		nik: false,
		tempatLahir: false,
		tanggalLahir: false,
		pekerjaan: false,
		alamat: false
	});
	let ibuTouched = $state<Record<ParentField, boolean>>({
		file: false,
		namaLengkap: false,
		nik: false,
		tempatLahir: false,
		tanggalLahir: false,
		pekerjaan: false,
		alamat: false
	});

	// Step 3
	let anak = $state<AnakData>({
		namaAnak: '',
		nikAnak: '',
		jenisKelamin: '',
		tempatKelahiran: '',
		kabupatenKota: '',
		tanggalLahir: '',
		jenisKelahiran: '',
		anakKe: '1',
		penolongKelahiran: '',
		beratBayi: '1',
		panjangBayi: '1'
	});

	let anakTouched = $state<Record<AnakField, boolean>>({
		namaAnak: false,
		nikAnak: false,
		jenisKelamin: false,
		tempatKelahiran: false,
		kabupatenKota: false,
		tanggalLahir: false,
		jenisKelahiran: false,
		anakKe: false,
		penolongKelahiran: false,
		beratBayi: false,
		panjangBayi: false
	});

	let submitAttempted = $state(false);
	let ayahDrag = $state(false);
	let ibuDrag = $state(false);

	// ─── Validation ──────────────────────────────────────────────────────────

	function validateParent(d: ParentData): Record<ParentField, string> {
		return {
			file: d.file === null ? 'Dokumen KTP wajib diunggah' : '',
			namaLengkap: d.namaLengkap.trim().length < 2 ? 'Nama lengkap wajib diisi' : '',
			nik:
				d.nik.trim() === ''
					? 'NIK wajib diisi'
					: !/^\d{16}$/.test(d.nik.trim())
						? 'NIK harus tepat 16 digit angka'
						: '',
			tempatLahir: d.tempatLahir.trim().length < 2 ? 'Tempat lahir wajib diisi' : '',
			tanggalLahir: d.tanggalLahir === '' ? 'Tanggal lahir wajib diisi' : '',
			pekerjaan: d.pekerjaan.trim().length < 2 ? 'Pekerjaan wajib diisi' : '',
			alamat: d.alamat.trim().length < 5 ? 'Alamat wajib diisi (min. 5 karakter)' : ''
		};
	}

	function validateAnak(d: AnakData): Record<AnakField, string> {
		return {
			namaAnak: d.namaAnak.trim().length < 2 ? 'Nama anak wajib diisi' : '',
			nikAnak:
				d.nikAnak !== '' && !/^\d{16}$/.test(d.nikAnak.trim()) ? 'NIK harus 16 digit angka' : '',
			jenisKelamin: d.jenisKelamin === '' ? 'Jenis kelamin wajib dipilih' : '',
			tempatKelahiran: d.tempatKelahiran === '' ? 'Tempat kelahiran wajib dipilih' : '',
			kabupatenKota: d.kabupatenKota.trim().length < 2 ? 'Kabupaten/Kota wajib diisi' : '',
			tanggalLahir: d.tanggalLahir === '' ? 'Tanggal lahir wajib diisi' : '',
			jenisKelahiran: d.jenisKelahiran === '' ? 'Jenis kelahiran wajib dipilih' : '',
			anakKe: d.anakKe === '' || Number(d.anakKe) < 1 ? 'Anak ke- wajib diisi' : '',
			penolongKelahiran: d.penolongKelahiran === '' ? 'Penolong kelahiran wajib dipilih' : '',
			beratBayi: d.beratBayi === '' || Number(d.beratBayi) <= 0 ? 'Berat bayi wajib diisi' : '',
			panjangBayi:
				d.panjangBayi === '' || Number(d.panjangBayi) <= 0 ? 'Panjang bayi wajib diisi' : ''
		};
	}

	const ayahErrors = $derived(validateParent(ayah));
	const ibuErrors = $derived(validateParent(ibu));
	const anakErrors = $derived(validateAnak(anak));

	const ayahValid = $derived(Object.values(ayahErrors).every((e) => e === ''));
	const ibuValid = $derived(Object.values(ibuErrors).every((e) => e === ''));
	const orangtuaValid = $derived(ayahValid && ibuValid);
	const anakValid = $derived(Object.values(anakErrors).every((e) => e === ''));

	function errMsg(
		errors: Record<string, string>,
		touched: Record<string, boolean>,
		field: string
	): string {
		return touched[field] || submitAttempted ? (errors[field] ?? '') : '';
	}

	// ─── File handling ────────────────────────────────────────────────────────

	const ACCEPTED = ['image/jpeg', 'image/png', 'application/pdf'];
	const MAX_BYTES = 2 * 1024 * 1024;

	function processFile(file: File, who: 'ayah' | 'ibu'): void {
		if (!ACCEPTED.includes(file.type)) {
			alert('Format tidak didukung. Gunakan PDF, JPG, atau PNG.');
			return;
		}
		if (file.size > MAX_BYTES) {
			alert('Ukuran file melebihi 2MB.');
			return;
		}
		const reader = new FileReader();
		reader.onload = (e) => {
			const src = (e.target?.result as string) ?? null;
			if (who === 'ayah') {
				ayah.file = file;
				ayah.filePreview = src;
				ayahTouched.file = true;
			} else {
				ibu.file = file;
				ibu.filePreview = src;
				ibuTouched.file = true;
			}
		};
		reader.readAsDataURL(file);
	}

	function onFileChange(e: Event, who: 'ayah' | 'ibu'): void {
		const f = (e.target as HTMLInputElement).files?.[0];
		if (f) processFile(f, who);
		(e.target as HTMLInputElement).value = '';
	}

	function onDrop(e: DragEvent, who: 'ayah' | 'ibu'): void {
		e.preventDefault();
		ayahDrag = false;
		ibuDrag = false;
		const f = e.dataTransfer?.files?.[0];
		if (f) processFile(f, who);
	}

	function removeFile(who: 'ayah' | 'ibu'): void {
		if (who === 'ayah') {
			ayah.file = null;
			ayah.filePreview = null;
		} else {
			ibu.file = null;
			ibu.filePreview = null;
		}
	}

	// ─── Parent field setters

	function setAyahField(field: ParentField, value: string): void {
		if (field === 'file') return;
		(ayah as unknown as Record<string, string>)[field] = value;
		(ayahTouched as Record<string, boolean>)[field] = true;
	}

	function setIbuField(field: ParentField, value: string): void {
		if (field === 'file') return;
		(ibu as unknown as Record<string, string>)[field] = value;
		(ibuTouched as Record<string, boolean>)[field] = true;
	}

	// ─── Anak field setter

	function setAnakField(field: AnakField, value: string): void {
		(anak as unknown as Record<string, string>)[field] = value;
		(anakTouched as Record<string, boolean>)[field] = true;
	}

	function setJenisKelamin(v: 'pria' | 'wanita'): void {
		anak.jenisKelamin = v;
		anakTouched.jenisKelamin = true;
	}

	// ─── Navigation

	function goBack(): void {
		if (currentStep > 0) {
			currentStep -= 1;
			submitAttempted = false;
		}
	}

	function goNext(): void {
		submitAttempted = true;
		if (currentStep === 0) {
			currentStep = 1;
			submitAttempted = false;
		} else if (currentStep === 1) {
			opsiTouched = true;
			if (opsi === '') return;
			currentStep = 2;
			submitAttempted = false;
		} else if (currentStep === 2) {
			if (!orangtuaValid) return;
			currentStep = 3;
			submitAttempted = false;
		} else if (currentStep === 3) {
			if (!anakValid) return;
			currentStep = 4;
			submitAttempted = false;
		}
	}

	function goHome(): void {
		currentStep = 0;
		opsi = '';
		opsiTouched = false;
		submitAttempted = false;
	}
</script>

<div class="min-h-screen" style="background:#F4F5F7; font-family:'Segoe UI',system-ui,sans-serif;">
	<!-- HEADER -->
	<Stepper {currentStep} onBack={goBack} />

	<!-- MAIN CONTENT -->
	<div class="mx-auto max-w-3xl px-4 py-5 pb-10">
		{#if currentStep === 0}
			<Step0Intro onNext={goNext} />
		{/if}

		{#if currentStep === 1}
			<Step1Opsi
				{opsi}
				{opsiTouched}
				{submitAttempted}
				onOpsiChange={(v) => {
					opsi = v;
					opsiTouched = true;
				}}
				onNext={goNext}
			/>
		{/if}

		{#if currentStep === 2}
			<Step2OrangTua
				{ayah}
				{ibu}
				{ayahTouched}
				{ibuTouched}
				{ayahErrors}
				{ibuErrors}
				{ayahValid}
				{ibuValid}
				{orangtuaValid}
				{submitAttempted}
				{ayahDrag}
				{ibuDrag}
				onAyahField={setAyahField}
				onIbuField={setIbuField}
				onAyahDragOver={() => {
					ayahDrag = true;
				}}
				onAyahDragLeave={() => {
					ayahDrag = false;
				}}
				onAyahDrop={(e) => onDrop(e, 'ayah')}
				onAyahFileChange={(e) => onFileChange(e, 'ayah')}
				onAyahRemove={() => removeFile('ayah')}
				onIbuDragOver={() => {
					ibuDrag = true;
				}}
				onIbuDragLeave={() => {
					ibuDrag = false;
				}}
				onIbuDrop={(e) => onDrop(e, 'ibu')}
				onIbuFileChange={(e) => onFileChange(e, 'ibu')}
				onIbuRemove={() => removeFile('ibu')}
				onNext={goNext}
				{errMsg}
			/>
		{/if}

		{#if currentStep === 3}
			<Step3Anak
				{anak}
				{anakTouched}
				{anakErrors}
				{anakValid}
				{submitAttempted}
				onAnakField={setAnakField}
				onJenisKelamin={setJenisKelamin}
				onNext={goNext}
				{errMsg}
			/>
		{/if}

		{#if currentStep === 4}
			<Step4Success onHome={goHome} />
		{/if}
	</div>
</div>
