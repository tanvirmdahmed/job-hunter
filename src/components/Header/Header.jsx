import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='bg-[#f9f9ff]'>
            <div className='flex flex-col md:lg:flex-row gap-3 md:lg:gap-0 md:lg:justify-between items-center py-8 md:lg:px-[15%]'>
                <h1 className='text-4xl font-bold text-center md:lg:text-left'>Job Hunter</h1>
                <nav className='flex flex-col items-center md:lg:flex-row gap-3 md:lg:gap-12 text-base font-semibold text-[#87878b]'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/statistics">Statistics</ActiveLink>
                    <ActiveLink to="/applied_job">Applied Job</ActiveLink>
                    <ActiveLink to="/blog">Blog</ActiveLink>
                </nav>
                <button className='bg-gradient-to-r from-[#7f8ffe] to-[#9873ff] px-3 py-2 text-base font-semibold text-white rounded hover:bg-none hover:text-[#9873ff] hover:border-[#9873ff] hover:border-2'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;