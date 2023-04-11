import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col md:lg:flex-row gap-3 md:lg:gap-0 md:lg:justify-between items-center py-8 bg-[#f9f9ff]'>
            <h1 className='text-4xl font-bold text-center md:lg:text-left'>Job Hunter</h1>
            <nav className='flex flex-col items-center md:lg:flex-row gap-3 md:lg:gap-12 text-base font-semibold text-[#87878b]'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied_job">Applied Job</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <button className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded hover:bg-none hover:text-[#9873ff] hover:border-[#9873ff] hover:border-2'>Start Applying</button>
        </div>
    );
};

export default Header;