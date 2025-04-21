import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './Layouts/AppLayout';
import Tools from './Pages/Tools';
import Notes from './Pages/Notes';
import Profile from './Pages/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Tools />
            },
            {
                path: 'tools',
                element: <Tools />
            },
            {
                path: 'notes',
                element: <Notes />
            },
            {
                path: 'profile',
                element: <Profile />
            }
        ],
        errorElement: <div>Error: Page Not Found</div>
    }
]);

export default router;
