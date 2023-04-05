/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			cursive: ["Big Shoulders Display", "cursive"],
			sans: ["Lexend Deca", "sans-serif"],
		},
		extend: {
			colors: {
				orange: "hsl(31, 77%, 52%)",
				cyan: {
					dark: "hsl(184, 100%, 22%)",
					very_dark: "hsl(179, 100%, 13%)",
				},
				transparent_white: "hsla(0, 0%, 100%, 0.75)",
				light_gray: "hsl(0, 0%, 95%)",
			},
		},
	},
	plugins: [],
};
