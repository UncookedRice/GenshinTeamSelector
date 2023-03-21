/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			borderWidth: {
				80: '80px',
				50: '50px',
			},
			borderColor: {
				'gray-550': '#555',
			},
			width: {
				'84xl': '375px',
				26: '100px',
				38: '155px',
			},
			height: {
				38: '155px',
			},
			margin: {
				'66l': '66px',
			},
			fontSize: {
				'3.5xl': '2rem',
				100: '100px',
			},
			fontFamily: {
				rubik: ['Rubik'],
			},
		},
	},
	plugins: [],
};
