import { error } from '@sveltejs/kit';
import { allPelayananPages } from '$lib/data/pelayanan_publik_data';
import type { PelayananPage } from '$lib/data/pelayanan_publik_data';

interface LoadParams {
	params: { slug: string };
}

interface LoadResult {
	page: PelayananPage;
}

export const load = ({ params }: LoadParams): LoadResult => {
	const page = allPelayananPages[params.slug];

	if (!page) {
		error(404, `Layanan "${params.slug}" tidak ditemukan`);
	}

	return { page };
};
