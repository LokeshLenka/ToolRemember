import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggleButton = () => {
    // State to track the theme
    const [isDark, setIsDark] = useState(false);

    // Load the saved theme from localStorage on component mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        const isStoredDark = storedTheme === 'dark';
        setIsDark(isStoredDark);
        document.documentElement.classList.toggle('dark', isStoredDark);
    }, []);

    // Function to toggle theme
    const toggleTheme = () => {
        const htmlElement = document.documentElement;
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        htmlElement.classList.toggle('dark', newIsDark);
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    };

    return (
        <div className='flex justify-end'>
            <button
                onClick={toggleTheme}
                className="fixed t-0 z-50 m-4 p-2 border-2 bg-light-secondary border-light-primary dark:border-dark-primary hover:bg-light-primary hover::dark:bg-dark-primary rounded-lg font-bold shadow-sm shadow-light-accent dark:shadow-dark-accent text-light-accent dark:text-dark-accent transition-colors duration-200"
                aria-label="Toggle theme"
            >
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
        </div>
    );
};

export default ThemeToggleButton;
