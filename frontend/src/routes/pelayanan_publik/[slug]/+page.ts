import { error } from '@sveltejs/kit';
import { allServicePages } from '$lib/data/services';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const page = allServicePages[params.slug];
	if (!page) throw error(404, `Page "${params.slug}" not found`);
	return { page };
};
