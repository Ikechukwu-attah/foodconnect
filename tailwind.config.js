// tailwind.config.js

module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#6EE7B7",
                    DEFAULT: "#10B981",
                    dark: "#047857",
                },
                secondary: {
                    light: "#FCD34D",
                    DEFAULT: "#FBBF24",
                    dark: "#B45309",
                },
                accent: {
                    light: "#FDBA74",
                    DEFAULT: "#FB923C",
                    dark: "#EA580C",
                },
                neutral: {
                    light: "#F3F4F6",
                    DEFAULT: "#E5E7EB",
                    dark: "#374151",
                },
                background: {
                    light: "#FFFFFF",
                    DEFAULT: "#F9FAFB",
                    dark: "#111827",
                },
            },
        },
    },
    plugins: [],
};