import React, { useState, useEffect, useContext, createContext } from "react";
import{ InfoProvider, UserContextData, UserContext }from "./GetUser";
import api from "./Api";



type Events = {
    names: {
        day_of_month: number,
        day_of_week: number,
        desc: string,
        duration: number,
        id: number,
        month: number,
        starth: number,
        startm: number,
        title:string,
        week: number,
        year: number
    }[]
}

const Events = () => {
  const [events, setEvents] = useState<Events[]>([]);
  const userInfo = useContext(UserContext);
  const [ww, setWw] = useState(userInfo?.week_number);

  useEffect(() => {
    setWw(userInfo?.week_number);
  }, [userInfo]);

  useEffect(() => {
    try {
      api.get(`/get_events/${1}/${50}`).then((response: any) => {
        setEvents(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);


  const updateWeek = ()=>{
    setWw(Number(ww)+1)
    console.log(ww)
  }

  //console.log(ww);

  return (
    <div className="container">
      <button onClick={updateWeek}>update_week</button>
      {/* map to be continued */}
    </div>
  );
};
export default Events;