import '../css/app.css';
import './bootstrap';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import { Progress } from '@inertiajs/core';
import router from './router';

const appName = import.meta.env.VITE_APP_NAME || 'ToolRemember';

// Get the root element
const rootElement = document.getElementById('app');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <RouterProvider router={router} />
    );
}
