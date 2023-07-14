import React from 'react';
import { GoSearch } from 'react-icons/go';
import { BsFillBellFill } from 'react-icons/bs';

const Dashboardview = () => {
    return (
        <div>
            <div className='flex justify-between px-[30px] pt-5'>
                <h1 className='text-[26px] font-bold'> Dashboard </h1>
                <div className='flex items-center'>
                    <input type='text' placeholder='Search...' className='border-none outline-none
                     p-[2px] rounded-[12px]' />
                   <GoSearch className='relative left-[-20px] text-[#abacab] '/> 
                   <BsFillBellFill />
                   <div className='w-9 pl-3'>
                    < img src='../assets/profile12.webp' alt='profile-img'/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboardview
