import React from 'react'
import { ProfileInfo } from './ProfileInfo';

export const Profiles = ({data}) => {
    console.log(data);
  return (
    <div>Profiles <ProfileInfo name={data.name} email={data.email}/> </div>
  )
 
}
