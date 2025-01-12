"use client"

import Image from 'next/image';
import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORRAY

const events = [
    {
        title: 'Event 1',
        date: '2021-09-01',

        event:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."  
    },
    {
        title: 'Event 2',
        date: '2021-09-05',
        event:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."  

    },
    {
        title: 'Event 3',
        date: '2021-09-10',
        event:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."  

    },
 
]

export const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>

<Calendar onChange={onChange} value={value} />

<div className='flex justify-between items-center mt-4'>

<h1 className='text-xl font-semibold my-4'>Events</h1>
<Image src='/moreDark.png' width={20} height={20} alt='add event' />

</div>

<div className='flex flex-col gap-4 mt-4'>

{events.map((event)=>(

<div key={event.date} className='p-5 rounded-md border-2 border-t-4 border-gray-300 odd:border-t-colors-lamaSky even:border-t-colors-lamaPurple' >
<div key={event.date} className='flex justify-between items-center bg-gray-100 p-2 rounded-xl'>

<h1 className='font-semibold text-gray-500'>{event.title}</h1>
<h1 className='text-gray-500 text-xs'>{event.date}</h1>
 

</div>
<p>{event.event}</p>
</div>



))}

</div>


            </div>

    )
} 