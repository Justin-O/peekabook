import React from 'react';
import AR from '../assets/augmented-reality.svg';
import Tag from '../assets/peek-a-tag.svg';
import Scanning from '../assets/scanning.svg';
import Phone from '../assets/augmented-reality-phone.svg';


function Content() {
    return (
        <div className='md:mb-16'>
            <div className='flex flex-col md:flex-row justify-center md:space-x-16 p-12 pb-0 md:p-0'>
                <img src={AR} alt="AR" className='md:w-2/5 h-auto p-8 md:p-0' />
                <div className='flex flex-col justify-center md:w-3/5'>
                    <h2 className='font-kanit text-2xl mb-4'>Wat is Peek A' Book</h2>
                    <p className='text-lg font-gothic'>Met Peek A’ Book breng je boeken recht voor je neus tot leven! Je kan op een snelle en makkelijke manier veel verschillende boeken ontdekken!</p>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-center md:space-x-16 p-12 md:p-0'>
                <div className='flex flex-col justify-center md:w-3/5'>
                    <h2 className='font-kanit text-2xl mb-4'>Hoe werkt het?</h2>
                    <p className='text-lg font-gothic'>In de bibliotheek zal je boeken tegen komen met een Peek A Tag. Je kan in elk boek met zo’n Peek A Tag een afbeelding vinden van het thema van het boek.</p>
                </div>
                <img src={Tag} alt="AR" className='md:w-2/5 h-auto p-8 md:p-0' />
            </div>

            <div className='flex flex-col md:flex-row justify-center md:space-x-16 p-12 pb-0 md:p-0'>
                <img src={Scanning} alt="AR" className='md:w-2/5 h-auto p-8 md:p-0' />
                <div className='flex flex-col justify-center md:w-3/5'>
                    <h2 className='font-kanit text-2xl mb-4'>Vind een boek!</h2>
                    <p className='text-lg font-gothic'>Als je een boek hebt gevonden die jou leuk lijkt met een Peek A’ Tag dan sla je hem open en scant het thema met de Peek A’ Book app!</p>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-center md:space-x-16 p-12 md:p-0'>
                <div className='flex flex-col justify-center md:w-3/5'>
                    <h2 className='font-kanit text-2xl mb-4'>Beleef je boek!</h2>
                    <p className='text-lg font-gothic'>Zodra je het thema hebt gescand, kom het boek tot leven op je beeldscherm!</p>
                </div>
                <img src={Phone} alt="AR" className='md:w-2/5 h-auto p-8 md:p-0' />
            </div>
        </div>
    )
}

export default Content