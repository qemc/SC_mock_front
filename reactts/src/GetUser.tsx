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

export const UserContext = createContext<UserContextData|null>(null);

type Props = {
  children: React.ReactNode;
}

export const InfoProvider: FunctionComponent<Props> = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<UserContextData|null>(null);

  useEffect(() => {
    try {
      api.get('/').then((response:any) => {
        setUserInfo(response.data)    
      })
    } catch (error) {
      console.log(error)
    }
  }, [])


  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  );
};
