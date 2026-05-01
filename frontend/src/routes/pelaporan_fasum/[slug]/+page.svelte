<script lang="ts">
    import PelayananHeader from '$lib/components/pelayanan_publik/PelayananHeader.svelte';
    import { page } from '$app/stores';
    import { Megaphone, X, Camera, ImagePlus } from 'lucide-svelte';

    const slug = $derived($page.params.slug || '');
    const facilityName = $derived(
        slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    );

    // let description = $state('');
    // let location = $state('');

    // let showModal = $state(false);
    
    // let fileInput: HTMLInputElement;

    // function chooseRealPict() {
    //     showModal = false;
    //     fileInput.click();
    // }

</script>

<!-- <svelte:head>
    <title>Pelaporan {facilityName}</title>
</svelte:head> -->

<div></div>
