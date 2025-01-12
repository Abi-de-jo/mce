import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className=" h-full w-full flex">
      {/* LEFT */}
      <div className="w-[13%] bg-neutral-400 md:w-[10%] lg:w-[25%] xl:w-[20%] min-w-[60px]">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
          <Image src="/favicon.ico" className="rounded-full" width={30} height={30} alt="Home" />
          <span className="hidden lg:block font-bold">MCE</span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT */}
      <div className="w-[100%] bg-slate-900 md:w-[90%] lg:w-[75%] xl:w-[80%] overflow-scroll flex flex-col">
       <Navbar />
        {children}
      </div>
    </div>
  );
}
