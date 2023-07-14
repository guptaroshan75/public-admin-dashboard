import React from 'react'
import { RiDashboard2Line } from 'react-icons/ri'
import { AiOutlineTransaction, AiFillSetting, AiOutlineSchedule } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='p-[18px]'>
            <div className='bg-[black] h-[94vh] rounded-[20px]'>
                <div className='flex items-center px-[40px] pt-[35px]'>
                    <h1 className='text-white text-[26px]  font-bold'> Board. </h1>
                </div>

                <div className='flex items-center gap-[10px] px-[40px] pt-[40px]'>
                    <RiDashboard2Line className='text-white' />
                    <p className='text-white'> Dashboard </p>
                </div>

                <div className='flex items-center gap-[10px] px-[40px] pt-[20px]'>
                    <AiOutlineTransaction className='text-[#acadac]' />
                    <p className=' text-[#acadac]'> Transactions </p>
                </div>

                <div className='flex items-center gap-[10px] px-[40px] pt-[20px]'>
                    <AiOutlineSchedule className='text-[#acadac]' />
                    <p className='text-[#acadac]'> Schedules </p>
                </div>

                <div className='flex items-center gap-[10px] px-[40px] pt-[20px]'>
                    <FaUser className='text-[#acadac]' />
                    <p className='text-[#acadac]'> Users </p>
                </div>

                <div className='flex items-center gap-[10px] px-[40px] pt-[20px]'>
                    <AiFillSetting className='text-[#acadac]' />
                    <p className='text-[#acadac]'> Settings </p>
                </div>

                <div className='flex-row mt-[150px]'>
                    <div className='px-[40px]'>
                        <p className='text-[#acadac] '> Help </p>
                    </div>
                    <div className='px-[40px] pt-[20px]'>
                        <p className='text-[#acadac]'> Contact Us </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar