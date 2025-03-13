import React from 'react';
import Navbar from '../component/navigation/Navbar';

interface ScreenProps {
    children?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = (props) => {

    return (
        <div className='bg-amber-400 w-screen h-screen'>
            <Navbar />
            <div >
                {props.children}
            </div>
        </div>

    );
};

export default Screen;