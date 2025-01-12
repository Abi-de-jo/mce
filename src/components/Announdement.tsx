"use client"

 
export const Announdement = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between items-center mt-4'>
                <h1 className='text-xl font-semibold my-4'>Announcement</h1>
                <span className='text-gray-500 text-xs'>View All</span>
             </div>



            <div className='flex flex-col gap-4 mt-4'>
                <div className='p-5 bg-colors-lamaSkyLight rounded-md border-2 border-t-4 '>
                    <div className='flex justify-between items-center p-2 rounded-xl'>
                        <h1 className='font-semibold text-gray-500'>Event 1</h1>
                        <h1 className='text-gray-500 text-xs bg-white rounded-md px-1 py-1'>2021-09-01</h1>
                    </div>
                    <p className='text-gray-500  text-sm font-semibold'>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
              
              
                <div className='p-5 bg-colors-lamaPurple rounded-md border-2 border-t-4 '>
                    <div className='flex justify-between items-center  p-2 rounded-xl '>
                        <h1 className='font-semibold text-gray-500'>Event 2</h1>
                        <h1 className='text-gray-500 text-xs bg-white rounded-md px-1 py-1'>2021-09-05</h1>
                    </div>
                    <p className='text-gray-500 text-sm  font-semibold'>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
              
              
                <div className='p-5 bg-colors-lamaYellow rounded-md border-2 border-t-4 '>
                    <div className='flex justify-between items-center  p-2 rounded-xl'>
                        <h1 className='font-semibold text-gray-500'>Event 3</h1>
                        <h1 className='text-gray-500 text-xs bg-white rounded-md px-1 py-1'>2021-09-02</h1>
                    </div>
                    <p className='text-gray-500  text-sm  font-semibold'>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
            </div>
            </div>

    )
}
 
