"use client"

import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
 
    {
 name:"JAN",
    income: 4000,
    expense: 2400,
  },
  {
     name:"FEB",

    income: 3000,
    expense: 1398,
  },
  {
     name:"MAR",

    income: 2000,
    expense: 9800,
  },
  {
     name:"APR",

    income: 2780,
    expense: 3908,
  },
  {
     name:"MAY",

    income: 1890,
    expense: 4800,
  },
  {
     name:"JUN",

    income: 2390,
    expense: 3800,
  },
  {
     name:"JUL",

    income: 3490,
    expense: 4300,
  },
  {
     name:"AUG",

    income: 3490,
    expense: 4300,
  },
  {
     name:"SEP",

    income: 3490,
    expense: 4300,
  },
  {
     name:"OCT",

    income: 3490,
    expense: 4300,
  },
  {
     name:"NOV",

    income: 3490,
    expense: 4300,
  },
  {
     name:"DEC",

    income: 3490,
    expense: 4300,
  },
];

export const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            
            <Image src="/moreDark.png" alt="" width={20} height={20} className="rounded-full" />
            
            </div>

<div className='w-full h-[95%]'>

 <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'  />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickMargin={10}  tickLine={false}/>
          <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickMargin={10}  tickLine={false}/>
          <Tooltip />
          <Legend align="center" verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d"  strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>

</div>



            </div>

    )
}
