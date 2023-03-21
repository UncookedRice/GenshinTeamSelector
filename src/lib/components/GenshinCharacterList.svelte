<script lang="ts">
	import GetGenshinData from '../GetGenshinData';
	let num = -1;

	const GENSHIN_DATA = GetGenshinData();

	function doNothing() {
		return null;
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
</script>

<div class="flex flex-wrap items-stretch rounded pt-8">
	{#each GENSHIN_DATA as character}
		<div>{character}</div>
	{/each}
</div>
