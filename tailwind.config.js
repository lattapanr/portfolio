/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            primary: "#1C1918",
            white: "#ffffff",
            transparent: "transparent",
            darkBg: "#3e3d3c",
            darkText: "#dedfde",
        },
        extend: {
            fontFamily: {
                sans: ["Tenor Sans", "sans-serif"],
                cardo: ["Cardo", "serif"],
                atteron: ["Atteron", "serif"],
            },
            keyframes: {
                "fade-right": {
                    "0%": { opacity: 0, transform: "translateX(-20px)" },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
