import { FasumHeaderData, FasumStats, FasumCategories } from '$lib/data/pelaporan_fasilitas_umum';

export const load = () => {
	return {
		header: FasumHeaderData,
		stats: FasumStats,
		categories: FasumCategories
	};
};
