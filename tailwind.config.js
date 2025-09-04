/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				sora: ["Sora", "sans-serif"],
			},
			keyframes: {
				spin360: { to: { transform: "rotate(360deg)" } },
				spin360rev: { to: { transform: "rotate(-360deg)" } },
				typing: { "0%": { width: "0ch" }, "100%": { width: "27ch" } },
				blink: {
					"0%,100%": { borderColor: "transparent" },
					"50%": { borderColor: "#3b82f6" },
				},
			},
			animation: {
				orbit: "spin360 40s linear infinite", // Vòng ngoài
				orbitReverse: "spin360rev 40s linear infinite", // Icon bù góc để đứng yên
				typingBlink:
					"typing 3s steps(27,end) forwards, blink .75s step-end 4 forwards",
			},
			typing: {
				"0%": { width: "0ch" },
				"100%": { width: "27ch" }, // số ký tự
			},
			blink: {
				"0%, 100%": { borderColor: "transparent" },
				"50%": { borderColor: "#3b82f6" }, // blue-500
			},

			colors: {
				color: {
					1: "#AC6AFF",
					2: "#FFC876",
					3: "#FF776F",
					4: "#7ADB78",
					5: "#858DFF",
					6: "#FF98E2",
				},

				stroke: {
					light: "#dddddd",
					dark: "#43495e", //'var(--clr_stroke)', //"#26242C",
				},
				ring: {
					light: "#B5B5D7",
					dark: "#616B86",
				},
				n: {
					1: "#F8F8FB", //nền sáng//"#FFFFFF",
					2: "#CAC6DD",
					3: "#ADA8C3",
					4: "#757185",
					5: "#3F3A52",
					6: "#252134",
					7: "#15131D",
					8: "#222736", //nền tối//"#0E0C15", "#2a3042", "#10172A","hsl(var(--color-n-8) / <alpha-value>)"
					9: "#474060",
					10: "#43435C",
					11: "#1B1B2E",
					12: "#2E2A41",
					13: "#6C7275",
				},
			},
			fontFamily: {
				sans: ["var(--font-sand)", "Inter", ...fontFamily.sans],
				code: "var(--font-code)",
				grot: "var(--font-grot)",
				oleo: ["var(--font-oleo)", ...fontFamily.sans],
				// jetb: ["var(--font-jetb)", ...fontFamily.sans],
			},
			letterSpacing: {
				tagline: ".15em",
			},
			spacing: {
				0.25: "0.0625rem",
				7.5: "1.875rem",
				15: "3.75rem",
			},
			opacity: {
				15: ".15",
			},
			transitionDuration: {
				DEFAULT: "200ms",
			},
			transitionTimingFunction: {
				DEFAULT: "linear",
			},
			zIndex: {
				1: "1",
				2: "2",
				3: "3",
				4: "4",
				5: "5",
			},
			borderWidth: {
				DEFAULT: "0.0625rem",
			},
			backgroundImage: {
				"radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
				"conic-gradient":
					"conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
				"sync-pattern": "url('src/assets/hero/hero-background.jpg')",
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, addComponents, addUtilities }) {
			addBase({});
			addComponents({
				".container": {
					"@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
						{},
				},
				".h1": {
					"@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
						{},
				},
				".h2": {
					"@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
						{},
				},
				".h3": {
					"@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
				},
				".h4": {
					"@apply text-[2rem] leading-normal": {},
				},
				".h5": {
					"@apply text-2xl leading-normal": {},
				},
				".h6": {
					"@apply font-semibold text-lg leading-8": {},
				},
				".body-1": {
					"@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
						{},
				},
				".body-2": {
					"@apply font-light text-[0.875rem] leading-6 md:text-base": {},
				},
				".caption": {
					"@apply text-sm": {},
				},
				".tagline": {
					"@apply font-grot font-light text-xs tracking-tagline uppercase": {},
				},
				".quote": {
					"@apply font-code text-lg leading-normal": {},
				},
				".button": {
					"@apply font-code text-xs font-bold uppercase tracking-wider": {},
				},
				".backToTop": {
					"@apply transition-all duration-200 font-semibold flex mx-auto items-center space-x-2 justify-center rounded-lg text-[15px] p-2 hover:scale-125 fixed right-[10px] lg:right-[15px] xl:right-[20px] bottom-[15px] cursor-pointer z-[999] bg-n-9/40 border-n-1/10 backdrop-blur border hover:bg-gray-500/30 z-10":
						{},
				},
			});
			addUtilities({
				".tap-highlight-color": {
					"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
				},
			});
		}),
	],
};
