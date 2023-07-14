import React from 'react';
import { RiCalendarEventFill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineTransaction, AiOutlineLike } from 'react-icons/ai';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PiePages from './PiePages';

const data = [
    {
        name: 'Week 1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Week 1',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Week 3',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Week 4',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Week 5',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Week 6',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Week 7',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Main = () => {
    return (
        <>
            <div className='px-[25px] pt-3'>
                <div className='grid grid-cols-4 gap-[40px] mt-[20px] pb-[15px]'>
                    <div className='flex h-[110px] rounded-[12px] border-[2px] py-4 bg-[#cfe9d0]'>
                        <div className='self-end ps-5 pe-12'>
                            <h2 className='text-[13px]'> Total Revenues </h2>
                            <h1 className='text-[20px] font-bold'> $2,129,430 </h1>
                        </div>
                        <RiCalendarEventFill className='text-[25px]' />
                    </div>

                    <div className='flex h-[110px] rounded-[12px] border-[2px] py-4 bg-[#f8efe7]'>
                        <div className='self-end ps-5 pe-12'>
                            <h2 className='text-[13px]'> Total Transactions </h2>
                            <h1 className='text-[20px] font-bold'> 1,520 </h1>
                        </div>
                        <AiOutlineTransaction className='text-[25px]' />
                    </div>

                    <div className='flex h-[110px] rounded-[12px] border-[2px] py-4 bg-[#fbdffc]'>
                        <div className='self-end ps-5 pe-20'>
                            <h2 className='text-[13px]'> Total Likes </h2>
                            <h1 className='text-[20px] font-bold'> 9,721 </h1>
                        </div>
                        <AiOutlineLike className='text-[25px]' />
                    </div>

                    <div className='flex h-[110px] rounded-[12px] border-[2px] py-4 bg-[#dce6fc]'>
                        <div className='self-end ps-5 pe-20'>
                            <h2 className='text-[13px]'> Total Users </h2>
                            <h1 className='text-[20px] font-bold'> 892 </h1>
                        </div>
                        <FiUsers className='text-[25px]' />
                    </div>
                </div>

                <div className='flex-col pt-2 pe-3 bg-[white] rounded-[15px]'>
                    <div className='text-[16px] font-bold px-[30px] py-1'>
                        <h2> Activities </h2>
                    </div>

                    <div className='text-[16px] px-[30px] flex items-center'>
                        <h2> May -June 2021  </h2>
                        <AiOutlineDown className='ms-2' />
                    </div>
                    <div className='text-[16px] px-[25px] pb-1 flex justify-end items-center'>
                        <LineChart width={200} height={10}>
                            <Line dataKey="Guest" stroke="#f52230" />
                            <Line dataKey="User" stroke="#17cf2c" />
                            <Legend />
                        </LineChart>
                    </div>

                    <div className=''>
                        <LineChart width={1050} height={350} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 1" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="pv" stroke="#f52230" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#17cf2c" />
                        </LineChart>
                    </div>
                </div>

                <div className='flex pt-2 w-full gap-[170px]'>
                    <div className='basis-[50%] bg-[white] rounded-[20px]'>
                        <div className='flex items-center justify-between pt-3 px-[30px]'>
                            <h2 className='text-[15px] font-bold'> Top products </h2>
                            <div className='text-[16px] flex items-center'>
                                <h2 className='text-[#c5c7c5] pe-2'> May -June 2021  </h2>
                                <AiOutlineDown className='text-[#c5c7c5]' />
                            </div>
                        </div>

                        <div>
                            <PiePages />
                        </div>
                    </div>

                    <div className='basis-[50%] bg-[white] rounded-[20px]'>
                        <div className='flex items-center justify-between pt-3 px-[30px]'>
                            <h2 className='text-[20px] font-bold'> Today's schedule </h2>
                            <div className='text-[18px] flex items-center'>
                                <h2 className='text-[#c5c7c5] pe-1'> See All  </h2>
                                <MdOutlineKeyboardArrowRight className='text-[#c5c7c5]' />
                            </div>
                        </div>

                        <div className='px-[30px] py-3'>
                            <div className='border-l-8 border-[#68c471] px-3'>
                                <h2 className='text-[16px] font-bold text-[#5c5e5c]'> Meeting with suppliers from Kuta Bali </h2>
                                <p className='text-[#c5c7c5]'> 14.00-15.00 </p>
                                <p className='text-[#c5c7c5]'> at Sunset Road, Kuta, Bali </p>
                            </div>
                        </div>

                        <div className='px-[30px] py-3'>
                            <div className='border-l-8 border-[#8a94c5] px-3'>
                                <h2 className='text-[16px] font-bold text-[#5c5e5c]'> Check operation at Giga Factory 1 </h2>
                                <p className='text-[#c5c7c5]'> 18.00-2000 </p>
                                <p className='text-[#c5c7c5]'> at Central JaKarta </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Main