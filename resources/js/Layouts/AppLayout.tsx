// resources/js/Layouts/AppLayout.tsx
import React from 'react';
import MainBackground from '@/Components/MainBackground';
import PrimaryContainer from '@/Components/PrimaryContainer';
import Dock from '@/Components/Dock';
import { Wrench, NotebookPen, User, Settings } from 'lucide-react';
import { useNavigate, Outlet } from 'react-router-dom';

const AppLayout = () => {
    const navigate = useNavigate();

    const items = [
        { icon: <Wrench size={18} />, label: 'Tools', onClick: () => navigate('/tools') },
        { icon: <NotebookPen size={18} />, label: 'Notes', onClick: () => navigate('/notes') },
        { icon: <User size={18} />, label: 'Profile', onClick: () => navigate('/profile') },
    ];

    return (
        <MainBackground>
            <PrimaryContainer>
                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={50}
                />
                <Outlet />
            </PrimaryContainer>
        </MainBackground>
    );
};

export default AppLayout;
