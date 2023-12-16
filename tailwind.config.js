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
			colors : {
				// Desert Tones
				'desert-sand': '#D4C6AA',
				'sandy-brown': '#E8CDA5',
				'warm-tan': '#D9BFA8',
				
				// Sky and Water
				'rust':'#fabe95',
				'azure-blue': '#00A3E0',
				'deep-blue': '#004777',
				'light-seafoam': '#6BC4A6',
				
				// Accent Colors
				'lavender': '#DFC5FE',
				'royal-purple': '#7E59A2',
				'golden-yellow': '#FFD700',
				}
		},
	},
	plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
