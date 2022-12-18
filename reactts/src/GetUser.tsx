import React, { createContext, FunctionComponent, useState,useEffect } from 'react';
import api from './Api';

export type UserContextData = {
  day_month_number: number,
  day_week_number:number,
  month_number:number,
  user_id:number,
  week_number:number,
  year:number
}

export const UserContext = createContext<UserContextData|null>({
  day_month_number: 0,
  day_week_number: 0,
  month_number: 0,
  user_id: 0,
  week_number: 0,
  year: 0
});

// type Props = {
//   children: React.ReactNode;
// }

export const InfoProvider: FunctionComponent<any> = ({ children }: any) => {

  const [userInfo, setUserInfo] = useState<UserContextData|null>({
    day_month_number: 0,
    day_week_number: 0,
    month_number: 0,
    user_id: 0,
    week_number: 0,
    year: 0
  });

  useEffect(() => {
    try {
      api.get('/').then((response) => {
        if (response.status === 200) {
          setUserInfo(response.data);
        } else {
          console.error(`Error fetching user data: ${response.status}`);
        }
      });
    } catch (error) {
      console.error(`Error fetching user data: ${error}`);
    }
  }, []);

  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  );
};
