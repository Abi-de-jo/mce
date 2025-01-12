import Image from "next/image";

const Navbar = () => {
    return (
         <div className="flex justify-between items-center bg-neutral-400 p-4">
 
{/* {search} */}

<div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-1">

<Image src="/search.png" width={20} height={20} alt="Search" />
<input
  type="text"
  placeholder="Search"
  className="border-none bg-transparent text-black p-3 w-[250px] focus:outline-none placeholder-gray-500"
/>


</div>


{/* {log} */}

<div className="flex items-center justify-end w-full gap-5">
    <div className="bg-white rounded-full p-2 flex items-center justify-center cursor-pointer">
        <Image src="/message.png" width={30} height={30} alt="Notification" />
    </div>
    <div className="bg-white rounded-full p-2 flex items-center justify-center cursor-pointer relative">
        <Image src="/announcement.png" width={30} height={30} alt="Notification" />
   <div className="absolute right-8 -top-[4px] w-5 h-5 justify-center items-center flex  bg-blue-800 p-2 rounded-full">1</div>
   
    </div>

<div className="flex flex-col items-center gap-1">

    <span className="text-black leading-3 font-medium">Abi</span>
    <span className="text-black-400 text-[10px] ">Admin</span>

</div>

<Image src="/avatar.png" width={30} height={30} alt="Profile" className="rounded-full" />


</div>



         </div>
    );
    }

    export default Navbar;  