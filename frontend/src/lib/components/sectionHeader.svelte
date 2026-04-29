<script lang="ts">
	let { heading, judul, desc } = $props<{
		heading: string;
		judul: string;
		desc: string;
	}>();

	let juduls = $derived(judul.split(/ (.*)/s).filter(Boolean));
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-center gap-2">
		<div class="h-1 w-6 bg-emerald-600/70"></div>
		<p class="text-xs font-bold text-[#668E7A]">{heading}</p>
	</div>
	<h2 class=" text-xl font-black">{juduls[0]} <span class="text-emerald-600">{juduls[1]}</span></h2>
	<p class=" text-xs text-[#668E7A]">{desc}</p>
</div>
