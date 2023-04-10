import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-8'>
            <h1 className='text-4xl font-bold'>Job Corner</h1>
            <div className='flex gap-12 text-base font-semibold text-[#87878b]'>
                <Link>Statistics</Link>
                <Link>Applied Job</Link>
                <Link>Blog</Link>
            </div>
            <button className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded'>Start Applying</button>
        </div>
    );
};

export default Header;