"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
name:"MON", 
   present: 30,
    absent: 23,
   },
  {
    name:"TUE", 
    present: 10,
    absent: 29,
   },
  {
    name:"WED", 
    present: 12,
    absent: 33,
   },
  {
    name:"THU", 
    present: 12,
    absent: 43,
   },
  {
    name:"FRI", 
    present: 55,
    absent: 65,
   },
  {
    name:"SAT", 
    present: 66,
    absent: 76,
   },
 
];



export const AttedanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>

<div className='flex items-center justify-between'>
<h1 className='text-lg font-semibold'>Attedance</h1>

<Image src="/moreDark.png" alt="" width={20} height={20} className="rounded-full" />

</div>

<ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
        barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}}  tickLine={false}/>
          <YAxis  axisLine={false} tick={{fill:"#d1d5db"}}  tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px" }} />
          <Bar dataKey="present" fill="#C3EBFA"  legendType='circle' radius={[5,5,0,0]} />
          <Bar dataKey="absent" fill="#FAE27C"  legendType='circle' radius={[5,5,0,0]} />
        </BarChart>
      </ResponsiveContainer>
           </div>
    );
}