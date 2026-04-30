<script lang="ts">
	import { ArrowLeft, Check, Upload, FileText, ImageIcon, X, AlertCircle } from 'lucide-svelte';

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

	// ─── Steps ───────────────────────────────────────────────────────────────

	const STEPS: { label: string; sublabel: string }[] = [
		{ label: 'Sebelum', sublabel: 'memulai' },
		{ label: 'Data', sublabel: 'pemohon' },
		{ label: 'Data', sublabel: 'orangtua' },
		{ label: 'Data', sublabel: 'Anak' },
		{ label: 'Selesai', sublabel: '' }
	];

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

	// ─── Navigation ───────────────────────────────────────────────────────────

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

	// ─── Inline style helpers ─────────────────────────────────────────────────

	const TEAL = '#1FAF9A';
	const TEAL_LIGHT = '#E0F7F4';
	const BORDER_DEFAULT = '#E8EAED';
	const BORDER_ERROR = '#FCA5A5';
	const BG_DEFAULT = '#FAFAFA';
	const BG_ERROR = '#FEF2F2';
	const TEXT_MAIN = '#1a1a1a';
	const TEXT_SECONDARY = '#6B7280';
	const TEXT_LABEL = '#374151';
	const GRAY_300 = '#D9DCDF';
</script>

<!-- ════════════════════════════════════════════════════════════════════════ -->

<div class="min-h-screen" style="background:#F4F5F7; font-family:'Segoe UI',system-ui,sans-serif;">
	<!-- ── Sticky Header ─────────────────────────────────────────────────── -->
	<div class="sticky top-0 z-20" style="background:#fff; border-bottom:1px solid {BORDER_DEFAULT};">
		<div class="mx-auto max-w-3xl px-4 pt-4 pb-0">
			<!-- Back + Title row -->
			<div class="relative mb-4 flex items-center">
				{#if currentStep > 0 && currentStep < 4}
					<button
						onclick={goBack}
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

	<!-- ── Page content ──────────────────────────────────────────────────── -->
	<div class="mx-auto max-w-3xl px-4 py-5 pb-10">
		<!-- ══ STEP 0: Sebelum Memulai ════════════════════════════════════════ -->
		{#if currentStep === 0}
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
							<span
								class="absolute text-xs font-medium"
								style="right:-38px; color:{TEXT_SECONDARY};">Tidak</span
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
						Tolak pihak yang meminta imbalan, termasuk siapapun yang mengaku sebagai petugas/pejabat
						Dinas Kependudukan dan Catatan Sipil ataupun instansi lainnya.
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
						SPTJM dipakai sebagai pengganti surat keterangan lahir resmi bidan dokter RS saat urus
						akta kelahiran
					</p>
					<p class="text-sm leading-relaxed" style="color:{TEXT_LABEL};">
						Disarankan untuk melaporkan kelahiran anak dalam kurun waktu kurang dari 60 hari setelah
						kelahiran.
					</p>
				</div>
			</div>

			{@render navButton('Next →', true)}
		{/if}

		<!-- ══ STEP 1: Data Pemohon — Opsi Pengurusan ══════════════════════════ -->
		{#if currentStep === 1}
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
										opsi = opt.value;
										opsiTouched = true;
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
							Jika mengurus untuk orang lain yang berbeda kartu keluarga, mohon lengkapi data dan
							unggah surat kuasa beserta KTP pemberi dan penerima kuasa.
						</p>
					</div>
				</div>
			</div>

			{@render navButton('Next →', opsi !== '')}
		{/if}

		<!-- ══ STEP 2: Data Orang Tua ══════════════════════════════════════════ -->
		{#if currentStep === 2}
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
						{@render uploadZone('ayah', ayah, ayahDrag, errMsg(ayahErrors, ayahTouched, 'file'))}
						{@render inputField(
							'Nama Ayah Kandung',
							'ayah-nama',
							'text',
							ayah.namaLengkap,
							(v) => {
								ayah.namaLengkap = v;
								ayahTouched.namaLengkap = true;
							},
							'Masukkan Nama Lengkap',
							errMsg(ayahErrors, ayahTouched, 'namaLengkap')
						)}
						{@render inputField(
							'NIK Ayah Kandung',
							'ayah-nik',
							'text',
							ayah.nik,
							(v) => {
								ayah.nik = v.replace(/\D/g, '').slice(0, 16);
								ayahTouched.nik = true;
							},
							'xxxxxxxxxxxxxxxx',
							errMsg(ayahErrors, ayahTouched, 'nik')
						)}
						{@render inputField(
							'Tempat Tanggal Lahir',
							'ayah-tempat',
							'text',
							ayah.tempatLahir,
							(v) => {
								ayah.tempatLahir = v;
								ayahTouched.tempatLahir = true;
							},
							'Jakarta, 01 Januari 2000',
							errMsg(ayahErrors, ayahTouched, 'tempatLahir')
						)}
						{@render dateInput(
							'Tanggal Lahir',
							'ayah-tgl',
							ayah.tanggalLahir,
							(v) => {
								ayah.tanggalLahir = v;
								ayahTouched.tanggalLahir = true;
							},
							errMsg(ayahErrors, ayahTouched, 'tanggalLahir')
						)}
						{@render inputField(
							'Pekerjaan',
							'ayah-kerja',
							'text',
							ayah.pekerjaan,
							(v) => {
								ayah.pekerjaan = v;
								ayahTouched.pekerjaan = true;
							},
							'Masukkan nama pekerjaan',
							errMsg(ayahErrors, ayahTouched, 'pekerjaan')
						)}
						{@render textareaInput(
							'Alamat',
							'ayah-alamat',
							ayah.alamat,
							(v) => {
								ayah.alamat = v;
								ayahTouched.alamat = true;
							},
							'Masukkan alamat lengkap',
							errMsg(ayahErrors, ayahTouched, 'alamat')
						)}
					</div>
				</div>

				<!-- Data Ibu Kandung -->
				<div class="overflow-hidden rounded-2xl" style="border:1px solid {BORDER_DEFAULT};">
					<div class="px-5 py-4" style="background:{TEAL};">
						<p class="mb-0.5 text-xs font-bold tracking-wider text-white uppercase">
							● Data Ibu Kandung
						</p>
						<p class="text-xs" style="color:rgba(255,255,255,0.75);">
							Silakan unggah KTP ibu (dalam bentuk PDF/Gambar)
						</p>
					</div>
					<div class="space-y-4 bg-white p-5">
						{@render uploadZone('ibu', ibu, ibuDrag, errMsg(ibuErrors, ibuTouched, 'file'))}
						{@render inputField(
							'Nama Ibu Kandung',
							'ibu-nama',
							'text',
							ibu.namaLengkap,
							(v) => {
								ibu.namaLengkap = v;
								ibuTouched.namaLengkap = true;
							},
							'Masukkan Nama Lengkap',
							errMsg(ibuErrors, ibuTouched, 'namaLengkap')
						)}
						{@render inputField(
							'NIK Ibu Kandung',
							'ibu-nik',
							'text',
							ibu.nik,
							(v) => {
								ibu.nik = v.replace(/\D/g, '').slice(0, 16);
								ibuTouched.nik = true;
							},
							'xxxxxxxxxxxxxxxx',
							errMsg(ibuErrors, ibuTouched, 'nik')
						)}
						{@render inputField(
							'Tempat Tanggal Lahir',
							'ibu-tempat',
							'text',
							ibu.tempatLahir,
							(v) => {
								ibu.tempatLahir = v;
								ibuTouched.tempatLahir = true;
							},
							'Jakarta, 01 Januari 2000',
							errMsg(ibuErrors, ibuTouched, 'tempatLahir')
						)}
						{@render dateInput(
							'Tanggal Lahir',
							'ibu-tgl',
							ibu.tanggalLahir,
							(v) => {
								ibu.tanggalLahir = v;
								ibuTouched.tanggalLahir = true;
							},
							errMsg(ibuErrors, ibuTouched, 'tanggalLahir')
						)}
						{@render inputField(
							'Pekerjaan',
							'ibu-kerja',
							'text',
							ibu.pekerjaan,
							(v) => {
								ibu.pekerjaan = v;
								ibuTouched.pekerjaan = true;
							},
							'Masukkan nama pekerjaan',
							errMsg(ibuErrors, ibuTouched, 'pekerjaan')
						)}
						{@render textareaInput(
							'Alamat',
							'ibu-alamat',
							ibu.alamat,
							(v) => {
								ibu.alamat = v;
								ibuTouched.alamat = true;
							},
							'Masukkan alamat lengkap',
							errMsg(ibuErrors, ibuTouched, 'alamat')
						)}
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

			{@render navButton('Next →', orangtuaValid)}
		{/if}

		<!-- ══ STEP 3: Data Anak ════════════════════════════════════════════════ -->
		{#if currentStep === 3}
			<div class="overflow-hidden rounded-2xl bg-white" style="border:1px solid {BORDER_DEFAULT};">
				<div class="space-y-4 p-5">
					<h2 class="text-base font-bold" style="color:{TEXT_MAIN};">Data Anak</h2>

					{@render inputField(
						'Nama Anak',
						'anak-nama',
						'text',
						anak.namaAnak,
						(v) => {
							anak.namaAnak = v;
							anakTouched.namaAnak = true;
						},
						'Masukkan Nama Lengkap',
						errMsg(anakErrors, anakTouched, 'namaAnak')
					)}

					{@render inputField(
						'NIK Anak (jika sudah memiliki)',
						'anak-nik',
						'text',
						anak.nikAnak,
						(v) => {
							anak.nikAnak = v.replace(/\D/g, '').slice(0, 16);
							anakTouched.nikAnak = true;
						},
						'xxxxxxxxxxxxxx',
						errMsg(anakErrors, anakTouched, 'nikAnak'),
						false
					)}

					<!-- Jenis Kelamin -->
					<div>
						<p class="mb-2 text-sm font-medium" style="color:{TEXT_LABEL};">
							Jenis Kelamin <span style="color:#EF4444;">*</span>
						</p>
						<div class="flex gap-6">
							{#each [{ v: 'pria' as const, l: 'Pria' }, { v: 'wanita' as const, l: 'Wanita' }] as jk}
								<label class="flex cursor-pointer items-center gap-2">
									<input
										type="radio"
										name="jk"
										value={jk.v}
										checked={anak.jenisKelamin === jk.v}
										onchange={() => {
											anak.jenisKelamin = jk.v;
											anakTouched.jenisKelamin = true;
										}}
										class="sr-only"
									/>
									<div
										class="flex h-5 w-5 items-center justify-center rounded-full border-2"
										style="border-color:{anak.jenisKelamin === jk.v ? TEAL : GRAY_300};"
									>
										{#if anak.jenisKelamin === jk.v}
											<div class="h-[10px] w-[10px] rounded-full" style="background:{TEAL};"></div>
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

					{@render selectInput(
						'Tempat Kelahiran',
						'anak-tempat',
						anak.tempatKelahiran,
						(v) => {
							anak.tempatKelahiran = v;
							anakTouched.tempatKelahiran = true;
						},
						'Pilih Tempat Kelahiran',
						['Rumah Sakit', 'Klinik', 'Puskesmas', 'Rumah', 'Lainnya'],
						errMsg(anakErrors, anakTouched, 'tempatKelahiran')
					)}

					{@render inputField(
						'Kabupaten/Kota Kelahiran',
						'anak-kab',
						'text',
						anak.kabupatenKota,
						(v) => {
							anak.kabupatenKota = v;
							anakTouched.kabupatenKota = true;
						},
						'Jakarta',
						errMsg(anakErrors, anakTouched, 'kabupatenKota')
					)}

					{@render dateInput(
						'Tanggal Lahir',
						'anak-tgl',
						anak.tanggalLahir,
						(v) => {
							anak.tanggalLahir = v;
							anakTouched.tanggalLahir = true;
						},
						errMsg(anakErrors, anakTouched, 'tanggalLahir')
					)}

					{@render selectInput(
						'Jenis Kelahiran',
						'anak-jenis',
						anak.jenisKelahiran,
						(v) => {
							anak.jenisKelahiran = v;
							anakTouched.jenisKelahiran = true;
						},
						'Pilih Jenis Kelahiran',
						['Tunggal', 'Kembar 2', 'Kembar 3', 'Lainnya'],
						errMsg(anakErrors, anakTouched, 'jenisKelahiran')
					)}

					{@render inputField(
						'Anak ke-',
						'anak-ke',
						'number',
						anak.anakKe,
						(v) => {
							anak.anakKe = v;
							anakTouched.anakKe = true;
						},
						'1',
						errMsg(anakErrors, anakTouched, 'anakKe')
					)}

					{@render selectInput(
						'Penolong Kelahiran',
						'anak-penolong',
						anak.penolongKelahiran,
						(v) => {
							anak.penolongKelahiran = v;
							anakTouched.penolongKelahiran = true;
						},
						'Pilih Penolong Kelahiran',
						['Dokter', 'Bidan', 'Dukun Beranak', 'Sendiri', 'Lainnya'],
						errMsg(anakErrors, anakTouched, 'penolongKelahiran')
					)}

					{@render inputField(
						'Berat Bayi (Kg)',
						'anak-berat',
						'number',
						anak.beratBayi,
						(v) => {
							anak.beratBayi = v;
							anakTouched.beratBayi = true;
						},
						'1',
						errMsg(anakErrors, anakTouched, 'beratBayi')
					)}

					{@render inputField(
						'Panjang Bayi (Cm)',
						'anak-panjang',
						'number',
						anak.panjangBayi,
						(v) => {
							anak.panjangBayi = v;
							anakTouched.panjangBayi = true;
						},
						'1',
						errMsg(anakErrors, anakTouched, 'panjangBayi')
					)}
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

			{@render navButton('Kirim', anakValid)}
		{/if}

		<!-- ══ STEP 4: Selesai ═════════════════════════════════════════════════ -->
		{#if currentStep === 4}
			<div class="overflow-hidden rounded-2xl bg-white" style="border:1px solid {BORDER_DEFAULT};">
				<div class="flex flex-col items-center gap-5 px-8 py-14 text-center">
					<!-- Check circle -->
					<div
						class="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2"
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
							onclick={goHome}
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
		{/if}
	</div>
</div>

<!-- ════════════════════════════════════════════════════════════════════════ -->
<!--  SNIPPETS                                                                -->
<!-- ════════════════════════════════════════════════════════════════════════ -->

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

{#snippet uploadZone(who: 'ayah' | 'ibu', data: ParentData, isDrag: boolean, error: string)}
	<div>
		{#if data.file}
			<!-- Preview card -->
			<div class="overflow-hidden rounded-xl" style="border:1.5px solid {BORDER_DEFAULT};">
				{#if data.file.type.startsWith('image/') && data.filePreview}
					<img
						src={data.filePreview}
						alt="Preview KTP"
						class="w-full object-cover"
						style="max-height:140px;"
					/>
				{:else}
					<div class="flex flex-col items-center justify-center gap-2 py-7">
						<FileText size={28} color={TEAL} />
						<p class="text-xs font-medium" style="color:{TEXT_LABEL};">{data.file.name}</p>
					</div>
				{/if}
				<div
					class="flex items-center justify-between px-3 py-2"
					style="background:#F9FAFB; border-top:1px solid {BORDER_DEFAULT};"
				>
					<div class="flex min-w-0 items-center gap-2">
						{#if data.file.type.startsWith('image/')}
							<ImageIcon size={13} color={TEAL} />
						{:else}
							<FileText size={13} color={TEAL} />
						{/if}
						<span class="truncate text-xs" style="color:{TEXT_LABEL};">{data.file.name}</span>
					</div>
					<button
						onclick={() => removeFile(who)}
						aria-label="Hapus file"
						class="ml-2 rounded-full p-1 transition-colors hover:bg-red-50 focus:outline-none"
					>
						<X size={13} color="#9CA3AF" />
					</button>
				</div>
			</div>
		{:else}
			<!-- Drop zone -->
			<label
				class="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl px-4 py-7 text-center transition-all duration-150"
				style="
          border:2px dashed {isDrag ? TEAL : error ? BORDER_ERROR : GRAY_300};
          background:{isDrag ? '#F0FDFB' : error ? BG_ERROR : '#FAFAFA'};
        "
				ondragover={(e) => {
					e.preventDefault();
					if (who === 'ayah') ayahDrag = true;
					else ibuDrag = true;
				}}
				ondragleave={() => {
					if (who === 'ayah') ayahDrag = false;
					else ibuDrag = false;
				}}
				ondrop={(e) => onDrop(e, who)}
				aria-label={`Unggah KTP ${who === 'ayah' ? 'Ayah' : 'Ibu'}`}
			>
				<input
					type="file"
					accept=".pdf,.jpg,.jpeg,.png"
					class="sr-only"
					onchange={(e) => onFileChange(e, who)}
				/>
				<div
					class="flex h-11 w-11 items-center justify-center rounded-full"
					style="background:{TEAL_LIGHT};"
				>
					<Upload size={20} color={TEAL} />
				</div>
				<div>
					<p class="text-sm font-medium" style="color:{TEXT_LABEL};">
						Klik atau seret file ke sini
					</p>
					<p class="mt-0.5 text-xs" style="color:{TEXT_SECONDARY};">PDF, JPG, PNG · Maks. 2MB</p>
				</div>
			</label>
		{/if}
		{#if error}
			<p class="mt-1.5 flex items-center gap-1 text-xs" style="color:#EF4444;">
				<AlertCircle size={11} />{error}
			</p>
		{/if}
	</div>
{/snippet}

{#snippet inputField(
	label: string,
	id: string,
	type: string,
	value: string,
	onchange: (v: string) => void,
	placeholder: string,
	error: string,
	required: boolean = true
)}
	<div>
		<label for={id} class="mb-1.5 block text-sm font-medium" style="color:{TEXT_LABEL};">
			{label}
			{#if required}<span style="color:#EF4444;"> *</span>{/if}
		</label>
		<input
			{id}
			{type}
			{placeholder}
			{value}
			oninput={(e) => onchange((e.target as HTMLInputElement).value)}
			class="w-full rounded-xl px-3 py-2.5 text-sm transition-all duration-150 outline-none"
			style="
        border:1.5px solid {error ? BORDER_ERROR : BORDER_DEFAULT};
        background:{error ? BG_ERROR : BG_DEFAULT};
        color:{TEXT_MAIN};
      "
			aria-invalid={error ? 'true' : 'false'}
		/>
		{#if error}
			<p class="mt-1 flex items-center gap-1 text-xs" style="color:#EF4444;">
				<AlertCircle size={11} />{error}
			</p>
		{/if}
	</div>
{/snippet}

{#snippet dateInput(
	label: string,
	id: string,
	value: string,
	onchange: (v: string) => void,
	error: string,
	required: boolean = true
)}
	<div>
		<label for={id} class="mb-1.5 block text-sm font-medium" style="color:{TEXT_LABEL};">
			{label}
			{#if required}<span style="color:#EF4444;"> *</span>{/if}
		</label>
		<input
			{id}
			type="date"
			{value}
			oninput={(e) => onchange((e.target as HTMLInputElement).value)}
			class="w-full rounded-xl px-3 py-2.5 text-sm transition-all duration-150 outline-none"
			style="
        border:1.5px solid {error ? BORDER_ERROR : BORDER_DEFAULT};
        background:{error ? BG_ERROR : BG_DEFAULT};
        color:{TEXT_MAIN};
      "
			aria-invalid={error ? 'true' : 'false'}
		/>
		{#if error}
			<p class="mt-1 flex items-center gap-1 text-xs" style="color:#EF4444;">
				<AlertCircle size={11} />{error}
			</p>
		{/if}
	</div>
{/snippet}

{#snippet selectInput(
	label: string,
	id: string,
	value: string,
	onchange: (v: string) => void,
	placeholder: string,
	options: string[],
	error: string,
	required: boolean = true
)}
	<div>
		<label for={id} class="mb-1.5 block text-sm font-medium" style="color:{TEXT_LABEL};">
			{label}
			{#if required}<span style="color:#EF4444;"> *</span>{/if}
		</label>
		<select
			{id}
			{value}
			onchange={(e) => onchange((e.target as HTMLSelectElement).value)}
			class="w-full appearance-none rounded-xl px-3 py-2.5 text-sm transition-all duration-150 outline-none"
			style="
        border:1.5px solid {error ? BORDER_ERROR : BORDER_DEFAULT};
        background:{error ? BG_ERROR : BG_DEFAULT};
        color:{value ? TEXT_MAIN : TEXT_SECONDARY};
      "
			aria-invalid={error ? 'true' : 'false'}
		>
			<option value="" disabled selected hidden>{placeholder}</option>
			{#each options as opt}
				<option value={opt}>{opt}</option>
			{/each}
		</select>
		{#if error}
			<p class="mt-1 flex items-center gap-1 text-xs" style="color:#EF4444;">
				<AlertCircle size={11} />{error}
			</p>
		{/if}
	</div>
{/snippet}

{#snippet textareaInput(
	label: string,
	id: string,
	value: string,
	onchange: (v: string) => void,
	placeholder: string,
	error: string
)}
	<div>
		<label for={id} class="mb-1.5 block text-sm font-medium" style="color:{TEXT_LABEL};">
			{label} <span style="color:#EF4444;">*</span>
		</label>
		<textarea
			{id}
			{placeholder}
			{value}
			rows={3}
			oninput={(e) => onchange((e.target as HTMLTextAreaElement).value)}
			class="w-full resize-none rounded-xl px-3 py-2.5 text-sm transition-all duration-150 outline-none"
			style="
        border:1.5px solid {error ? BORDER_ERROR : BORDER_DEFAULT};
        background:{error ? BG_ERROR : BG_DEFAULT};
        color:{TEXT_MAIN};
      "
			aria-invalid={error ? 'true' : 'false'}
		></textarea>
		{#if error}
			<p class="mt-1 flex items-center gap-1 text-xs" style="color:#EF4444;">
				<AlertCircle size={11} />{error}
			</p>
		{/if}
	</div>
{/snippet}

{#snippet navButton(label: string, enabled: boolean)}
	<div class="mt-5 flex justify-end">
		<button
			onclick={goNext}
			class="rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-200 focus:outline-none"
			style="background:{enabled ? TEAL : '#A7D9D4'}; cursor:{enabled ? 'pointer' : 'not-allowed'};"
			aria-disabled={!enabled}
		>
			{label}
		</button>
	</div>
{/snippet}
