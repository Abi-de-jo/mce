import { Announdement } from "@/components/Announdement";
import { BigCalendar } from "@/components/BigCalender";
import { EventCalendar } from "@/components/EventCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css"
 
export default function StudentPage() {
    return (
      <div className="p-4 flex gap-4 flex-col xl:flex-row">

{/* LEFT */}
<div className="w-full xl:w-2/3">

<div className="h-full bg-white p-4 rounded-lg shadow-md">

 <h1 className="text-xl font-semibold">Schedule ( E41A  )</h1>

<BigCalendar/>

  </div>

</div>

{/* RIGHT */}
<div className="w-full xl:w-1/3 flex flex-col gap-4">

<EventCalendar/>
<Announdement/>

</div>

      </div>
    );
  }