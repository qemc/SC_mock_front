import React, { useState, useEffect } from "react";
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

    const [events, setEvents] = useState<Events[]>([])


    useEffect(() => {
        try {
          api.get(`/get_events/${1}/${50}`).then((response) => {
            setEvents(response.data)
          })
        } catch (error) {
          console.log(error)
        }
      }, [])

      console.log(events)

    return ( 

        <div className="container">
            {/* map to be continiued */}
       </div>

     );
}
 
export default Events;