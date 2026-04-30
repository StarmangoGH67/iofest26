<script>
    import { ChevronLeft } from 'lucide-svelte';
    import { page } from '$app/state'; 
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';

    const segments = page.url.pathname.split('/').filter(Boolean); 

    const parentSegment = segments.slice(0, -1); 
	let scrolled = $state(false);

    const parentPath = 
    parentSegment.length <= 1
    ? '/'
    : '/' + parentSegment.join('/'); 

    function handleBack() {
		goto(resolve(parentPath));
	}

	function onScroll() {
		scrolled = window.scrollY > 80;
	}
</script>

<nav class="pp-nav" class:pp-nav--scrolled={scrolled}>
	<button class="pp-nav__back" onclick={handleBack} aria-label="Kembali">
		<ChevronLeft size={20} color="white" strokeWidth={2.5} />
	</button>
	<span class="pp-nav__title" class:pp-nav__title--visible={scrolled}>Pelayanan Publik
		{parentPath}
	</span>
	<div class="pp-nav__avatar">K</div>
</nav>