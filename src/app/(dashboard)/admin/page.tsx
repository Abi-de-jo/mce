import { Announdement } from "@/components/Announdement";
import { AttedanceChart } from "@/components/AttedanceChart";
import CountChart from "@/components/CountChart";
import { EventCalendar } from "@/components/EventCalendar";
import { FinanceChart } from "@/components/FinanceChart";
import  {UserCard}  from "@/components/UserCard";









export default function AdminPage() {
  return (
	<div className="p-4 flex gap-4 flex-col md:flex-row ">
	  <div className="w-full lg:w-2/3 flex flex-col gap-8">
	  
	  <div className="flex flex-wrap justify-between gap-4 ">

<UserCard User="student"/>
<UserCard User="teacher"/>
<UserCard User="parent"/>
<UserCard User="staff"/>
		</div>

{/* MIDDLE CHART */}
		<div className="flex gap-4 flex-col lg:flex-row">

{/* count chart */}

<div className=" w-full lg:w-1/3 h-[450px]">

<CountChart/>

</div>





{/* ATTENDANCE */}
<div className=" w-full lg:w-2/3 h-[450px]">

<AttedanceChart/>

</div>
 
		</div>


{/* bottom CHART */}
		<div className="w-full h-[500px] ">


<FinanceChart/>

		</div>

	  
	  </div>
	  <div className="w-full lg:w-1/3 flex flex-col gap-4">
	  <EventCalendar/>
	  <Announdement/>
	  
	  
	  
	  
	  </div>
	</div>
  );
}