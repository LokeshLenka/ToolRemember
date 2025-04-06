import React, { ReactNode } from "react";
import { Head } from '@inertiajs/react';
import ThemeToggleButton from "./ThemeToggleButton";

interface props {
    children: ReactNode;
}

function MainBackground({ children }: props) {
    return (
        <div className="min-h-screen bg-light-background dark:bg-dark-background border-indigo-900">
            <ThemeToggleButton></ThemeToggleButton>
            <div className="flex justify-center items-start mx-auto w-11/12 lg:w-4/5 sm:w-11/12 mt-12 border-teal-900">
                {children}</div></div>
    );
}

export default MainBackground;
