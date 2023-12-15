/* eslint-disable no-undef */
// Define the colors
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}","node_modules/flowbite-react/lib/esm/**/*.js","./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"], // Add this line
			},
			animation: {
				spin: "spin 2s linear infinite",
			},
			keyframes: {
				spin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
		},
	},
	plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
