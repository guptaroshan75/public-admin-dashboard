import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { RxDotFilled } from 'react-icons/rx'

const data = [
    { name: 'Group A', value: 270 },
    { name: 'Group B', value: 850 },
    { name: 'Group C', value: 380 },
];

const COLORS = ['#fa5252', '#68c471', '#f2c750'];

const PiePages = () => {
    return (
        <div className='flex'>
            <PieChart width={200} height={200}>
                <Pie data={data} labelLine={false}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='ps-[20px] py-5'>
                <div className='flex items-center font-bold'>
                    <RxDotFilled className='text-[#68c471] text-[30px]'/>
                    <h2 className='text-[18px] px-[3px]'> Basic Tees </h2>
                </div>
                <p className='px-[30px] text-[15px] text-[#b0ada5]'> 55% </p>

                <div className='flex items-center font-bold pt-2'>
                    <RxDotFilled className='text-[#f2c750] text-[30px]'/>
                    <h2 className='text-[18px] px-[3px]'> Custome Short Pants </h2>
                </div>
                <p className='px-[30px] text-[15px] text-[#b0ada5]'> 31% </p>

                <div className='flex items-center font-bold pt-2'>
                    <RxDotFilled className='text-[#fa5252] text-[30px]'/>
                    <h2 className='text-[18px] px-[3px]'> Super Hoodies </h2>
                </div>
                <p className='px-[30px] text-[15px] text-[#b0ada5]'> 14% </p>
            </div>
        </div >
    )
}

export default PiePages