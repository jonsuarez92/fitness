import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { useEffect, useState } from 'react';



export default function HomePage ( { user, setUser }) {
  
    return (
      <div className="homeBackGround">
     <header>
        <h1 className="authH">JSHRED</h1>
   </header>
   <UserLogOut  user={user} setUser={setUser} />
     </div>
    )};