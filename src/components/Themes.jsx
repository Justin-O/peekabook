import React from 'react';
import SciFi from '../assets/sci-fi.svg';
import Action from '../assets/action.svg';
import Fantasy from '../assets/fantasy.svg';

function Themes() {
  return (
    <div>
        <div className='flex flex-col sm:flex-row space-y-8 sm:space-y-0'>
            <div className='flex flex-col sm:w-1/3 text-center space-y-3 p-0 sm:p-8 md:p-12'>
                <img className='px-[25%] sm:px-0' src={SciFi} alt="sci-fi theme icon" />
                <p className='font-gothic text-lg'>Sci-fi</p>
            </div>
            <div className='flex flex-col sm:w-1/3 text-center space-y-3 p-0 sm:p-8 md:p-12'>
                <img className='px-[25%] sm:px-0' src={Action} alt="action theme icon" />
                <p className='font-gothic text-lg'>Actie</p>
            </div>
            <div className='flex flex-col sm:w-1/3 text-center space-y-3 p-0 sm:p-8 md:p-12'>
                <img className='px-[25%] sm:px-0' src={Fantasy} alt="fantasie theme icon" />
                <p className='font-gothic text-lg'>Fantasie</p>
            </div>
        </div>
    </div>
  )
}

export default Themes