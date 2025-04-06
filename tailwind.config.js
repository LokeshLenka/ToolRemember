import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import { text } from 'stream/consumers';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                light: {
                    primarytext: '#53534b',
                    secondarytext: '#221d21',
                    background: '#f6f7f3',
                    primary: '#d3d4cf',
                    secondary: '#889583',
                    accent: '#c5a77d',
                },
                dark: {
                    primarytext: '#b4b4ac',
                    secondarytext: '#0b0c08',
                    background: '#0b0c08',
                    primary: '#1f231b',
                    secondary: '#6f7c6a',
                    accent: '#56442a',
                },

            },
        },
    },

    plugins: [forms],
};
