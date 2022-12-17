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

    const [events, setEvents] = useState<Events[]>([])
    const userInfo = useContext(UserContext);

    useEffect(() => {
        try {
          api.get(`/get_events/${1}/${50}`).then((response:any) => {
            setEvents(response.data)    
          })
        } catch (error) {
          console.log(error)
        }
      }, [])

      console.log(userInfo)

    return ( 
      <div className="container">
            {/* map to be continiued */}
      </div>
     );
}
 
export default Events;