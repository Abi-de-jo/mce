"use client";

import { useState } from "react"; 
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const BigCalendar = () => {
  const [view, setView] = useState(Views.WORK_WEEK); 

  return (
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]} 
      events={calendarEvents}
      view={view}
      onView={(newView) => setView(newView)}
      style={{ height: "98%" }}
      min = {new Date(2025, 1, 0, 8, 0, 0)}
      max = {new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};
 