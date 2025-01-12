import Image from 'next/image';  
export const UserCard = ({ User }: { User: string }) => {
    return ( 
        <div className="rounded-2xl odd:bg-colors-lamaPurple flex-1 p-4 even:bg-colors-lamaYellow min-w-[130px]">
 
 <div className="flex items-center justify-between">
    <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600 '>2024/25</span>
    <Image src="/more.png" alt="" width={20} height={20} className="rounded-full" />
 </div>
 <h1 className='text-2xl font-semibold my-4'>1,232</h1>
 <h2 className='text-sm font-medium text-gray-500 capitalize'>{User}</h2>
 
          </div>
    );
    }