<script>
	import TeamSelect from '../lib/components/TeamSelect.svelte';
</script>

<main class="h-screen w-screen">
	<navbar class="flex items-center justify-between bg-black">
		<!-- logo-shape -->
		<div
			class="mb-28 h-0 w-84xl -scale-y-100  border-b-80 border-r-50 border-solid border-b-gray-550 border-r-transparent"
		>
			<!-- logo-title -->
			<div class="-scale-y-100 pb-4 font-rubik text-3.5xl text-white">
				GenshinTeamSelector
			</div>
		</div>
		<!-- Create -->
		<!-- <div class="top-8 mb-20 flex h-20 self-start pr-12 text-100 text-white"> -->
		<div class="h-20 self-start text-2xl text-white">+</div>
	</navbar>
	<TeamSelect />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap');
</style>
