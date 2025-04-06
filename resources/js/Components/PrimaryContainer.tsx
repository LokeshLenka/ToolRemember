import React, { Children } from 'react'
import { ReactNode } from 'react';

interface props {
    children: ReactNode;
}

const PrimaryContainer = ({ children }: props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {children}
        </div>
    )
}

export default PrimaryContainer;
