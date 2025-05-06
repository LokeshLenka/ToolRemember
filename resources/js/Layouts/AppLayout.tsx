// resources/js/Layouts/AppLayout.tsx
import React from 'react';
import MainBackground from '@/Components/MainBackground';
import PrimaryContainer from '@/Components/PrimaryContainer';
import Dock from '@/Components/Dock';
import { Wrench, NotebookPen, User, Settings,PlusCircleIcon } from 'lucide-react';
import { useNavigate, Outlet } from 'react-router-dom';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

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
                <PrimaryButton className='fixed bottom-24 right-10 w-14 h-14 rounded-[1000px] justify-center'> <PlusCircleIcon size={24}></PlusCircleIcon> </PrimaryButton>
                <Outlet />
            </PrimaryContainer>
        </MainBackground>
    );
};

export default AppLayout;
