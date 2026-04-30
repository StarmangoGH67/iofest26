<script lang="ts">
	import { Upload, FileText, ImageIcon, X, AlertCircle } from 'lucide-svelte';

	const TEAL = '#38BCDA';
	const TEAL_LIGHT = '#E0F7F4';
	const BORDER_DEFAULT = '#E8EAED';
	const BORDER_ERROR = '#FCA5A5';
	const BG_ERROR = '#FEF2F2';
	const TEXT_LABEL = '#374151';
	const TEXT_SECONDARY = '#6B7280';
	const GRAY_300 = '#D9DCDF';

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
		who: 'ayah' | 'ibu';
		data: ParentData;
		isDrag: boolean;
		error: string;
		onDragOver: () => void;
		onDragLeave: () => void;
		onDrop: (e: DragEvent) => void;
		onFileChange: (e: Event) => void;
		onRemove: () => void;
	}

	let { who, data, isDrag, error, onDragOver, onDragLeave, onDrop, onFileChange, onRemove }: Props =
		$props();
</script>

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
					onclick={onRemove}
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
				onDragOver();
			}}
			ondragleave={onDragLeave}
			ondrop={onDrop}
			aria-label={`Unggah KTP ${who === 'ayah' ? 'Ayah' : 'Ibu'}`}
		>
			<input type="file" accept=".pdf,.jpg,.jpeg,.png" class="sr-only" onchange={onFileChange} />
			<div
				class="flex h-11 w-11 items-center justify-center rounded-full"
				style="background:{TEAL_LIGHT};"
			>
				<Upload size={20} color={TEAL} />
			</div>
			<div>
				<p class="text-sm font-medium" style="color:{TEXT_LABEL};">Klik atau seret file ke sini</p>
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
