import React, { useState } from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/outline'

function Navbar() {
    const [nav, setNav] = useState(false);
    
    return (
        <div className='h-20 md:h-28 md:bg-transparent bg-blue-light'>
            <div className='flex px-12 justify-between items-center h-full'>
                <ul className='flex gap-12 font-kanit text-2xl tracking-wider'>
                    <li className='hidden md:flex'>Home</li>
                    <li className='hidden md:flex'>Thema's</li>
                </ul>
                <div>
                    <a className='hidden md:flex bg-purple px-10 py-2 rounded-2xl text-white font-kanit tracking-wider' href={require("../assets/peekabook-installer.apk")} download>Download app</a>
                    <div className='md:hidden cursor-pointer' onClick={() => setNav(!nav)}>
                        {!nav ? <MenuIcon className='w-6' /> : <XIcon className='w-6' />}
                    </div>
                </div>
            </div>
            
            <ul className={nav ? 'md:hidden absolute p-6 bg-blue-light w-full font-kanit text-xl sm:text-2xl' : 'hidden'}>
                <li className='border-b-2 border-blue-dark p-8 text-center'>Home</li>
                <li className='border-b-2 border-blue-dark p-8 text-center'>Thema's</li>
                <li className='flex justify-center border-b-2 border-blue-dark p-8'>
                    <a className='bg-purple px-10 py-2 rounded-2xl text-white font-kanit tracking-wider w-[80%] text-center' href={require("../assets/peekabook-installer.apk")} download>Download app</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;