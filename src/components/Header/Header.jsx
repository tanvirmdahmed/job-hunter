import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-8 bg-[#f9f9ff]'>
            <h1 className='text-4xl font-bold'>Job Corner</h1>
            <nav className='flex gap-12 text-base font-semibold text-[#87878b]'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied_job">Applied Job</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <button className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded'>Start Applying</button>
        </div>
    );
};

export default Header;