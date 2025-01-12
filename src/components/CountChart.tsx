"use client";

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'TOTAL',
    count: 100,
     fill: '#fff',
  },
  {
    name: 'Girls',
    count: 50,
     fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 50,
     fill: '#C3EBFA',
  }
];



const CountChart = () => {

    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>


            {/* TITLE */}

<div className='flex items-center justify-between'>

<h1 className='text-lg font-semibold'>User Count</h1>

<Image src="/moreDark.png" alt="" width={20} height={20} className="rounded-full" />

</div>

{/* CHART */}
<div className='w-full h-[75%] relative'>

<ResponsiveContainer  >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={50} data={data}>
          <RadialBar
             background
             dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>

      <Image src="/maleFemale.png" alt="" width={50} height={50} className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" />

</div>

{/* BOTTOM */}

<div className='flex items-center gap-16 justify-between'>

<div className="flex flex-col items-center gap-2">
<div className="w-5 h-5 bg-colors-lamaSky rounded-full"/>
<h1 className='text-sm font-bold'>1,232</h1>
<h2 className='text-xs text-gray-600'> Boys (55%) </h2>
    
  
</div>


<div className="flex flex-col items-center gap-2">
<div className="w-5 h-5 bg-colors-lamaYellow rounded-full"/>
<h1 className='text-sm font-bold'>1,232</h1>
<h2 className='text-xs text-gray-600'> Girls (45%) </h2>
    
  
</div>

</div>


        </div>
    )

}

export default  CountChart;