<script lang="ts">
	import GetGenshinData from '../GetGenshinData';
	import GenshinCharacterList from './GenshinCharacterList.svelte';

	let GENSHIN_DATA = GetGenshinData();
	const arr = [1, 2, 3, 4, 5];
	let num = -1;

	function doNothing() {
		return null;
	}

	function CheckContainer() {
		let parentContainer = document.querySelector('#character-select');
		if (parentContainer?.firstChild) {
			parentContainer.removeChild(parentContainer.firstChild);
		}
	}

	function CreateCharacterImage(
		character: string,
		alt: string,
		className: string
	) {
		let currentSelectedCharacter = document.createElement('img');
		currentSelectedCharacter.src = character;
		currentSelectedCharacter.alt = alt;
		currentSelectedCharacter.className += className;

		return currentSelectedCharacter;
	}

	function handleClick(character: string, alt: string, className: string) {
		let arrOfDivs = document.querySelectorAll('#character-select');
		let currentSelectedCharacter = CreateCharacterImage(
			character,
			alt,
			className
		);

		num += 1;
		arrOfDivs.item(num).hasChildNodes()
			? console.log(num)
			: arrOfDivs.item(num).append(currentSelectedCharacter);
	}

	console.log(GENSHIN_DATA);
</script>

<main class="bg-black">
	<!-- flex-container -->
	<div class="flex justify-center gap-20 pt-2">
		<!-- start of character-select  -->
		<div
			tabindex="-1"
			id="character-select"
			class="flex h-40 w-40 border border-solid border-white bg-gray-700"
		>
			<!-- <img class="cock" alt="cock" src="https://api.genshin.dev/characters/albedo/icon-big" /> -->
		</div>
		<div
			tabindex="-2"
			id="character-select"
			class="h-40 w-40 border border-solid border-white bg-gray-700"
		/>
		<div
			tabindex="-3"
			id="character-select"
			class="h-40 w-40 border border-solid border-white bg-gray-700"
		/>
		<div
			tabindex="-4"
			id="character-select"
			class="h-40 w-40 border border-solid border-white bg-gray-700"
		/>
	</div>
	<!-- end of character-select  -->
	<!-- Header-Container  -->
	<div
		class="flex h-20 justify-center border-b  border-solid border-white pt-24"
	>
		<!-- Header  -->
		<h1 class="font-rubik text-white">Characters</h1>
	</div>
	<!-- Genshin Character List  -->

	<div class="flex flex-wrap items-stretch rounded pt-8">
		{#each GENSHIN_DATA as character}
			<img
				class=" h-38 w-38 cursor-pointer rounded border border-solid border-white object-cover"
				alt="character"
				src={character}
				on:keydown={doNothing}
				on:click|preventDefault|once={() =>
					handleClick(
						character,
						'selected-character',
						' h-full w-full flex object-cover cursor:pointer'
					)}
			/>
		{/each}
	</div>
</main>
//coock

<!-- <style>
	@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap');
</style> -->
