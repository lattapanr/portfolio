/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                header: ["Tenor Sans", "sans-serif"],
                text: ["Cardo", "serif"],
            },
        },
    },
    plugins: [],
};
