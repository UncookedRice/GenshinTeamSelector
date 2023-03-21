import { onMount } from 'svelte';

//Changed from let arr to const arr
// const arr: string[] = [];

// let characters: string[] = [];
// const url = 'https://api.genshin.dev/characters/';

export default function GetGenshinData() {
	let arr: string[] = [];

	let characters: string[] = [];
	const url = 'https://api.genshin.dev/characters/';
	onMount(async () => {
		const res = await fetch(url);
		characters = await res.json();
		for (let i = 0; i < characters.length; i++) {
			arr.push(`https://api.genshin.dev/characters/${characters[i]}/icon-big`);
		}
		arr[41] =
			'https://api.genshin.dev/characters/traveler-anemo/icon-big-lumine';
		arr[42] =
			'https://api.genshin.dev/characters/traveler-dendro/icon-big-lumine';
		arr[43] =
			'https://api.genshin.dev/characters/traveler-electro/icon-big-lumine';
		arr[44] = 'https://api.genshin.dev/characters/traveler-geo/icon-big-lumine';
		//This was originally uncommented
		// eslint-disable-next-line no-self-assign
		arr = arr;
	});
	return arr;
}
