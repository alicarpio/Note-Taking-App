import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4D64FF",
                "primary-dark": "#008ABC",
                accent: "#11AF22",
                surface: "#ffffff",
                "surface-dark": "#D9D9D9",
            },
        },
    },
    plugins: [flowbite],
};
