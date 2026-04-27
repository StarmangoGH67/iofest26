export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
        fontFamily: {
            sans: ['Plus Jakarta Sans', 'Nunito', 'system-ui', 'sans-serif'],
        },
        colors: {
                brand: {
                50:  '#f0fdf4',
                100: '#dcfce7',
                500: '#22c55e',
                600: '#16a34a',
                700: '#15803d',
                },
            },
        },
    },
    plugins: [],
};
