import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { useEffect, useState } from 'react';
import AboutPopUp from '../../components/AboutPopUp/AboutPopUp';



export default function HomePage({ user, setUser }) {

  const [timePopUp, setTimePopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimePopUp(true);
    }, 2000);
  }, []);

  return (
    <div className="homeBackGround">
      <header>
        <h1 className="authH">JSHRED</h1>
      </header>
      <UserLogOut user={user} setUser={setUser} />
      <AboutPopUp timePopUp={timePopUp} setTimePopUp={setTimePopUp}>
        <h3 className="about-h">About JSHRED</h3>
        <p className="about-p">This website was intended as a passion project for myself
          and anyone else who loves to workout and would like a place to find info about
          workingOut and nutrition and supplements.
        </p>


      </AboutPopUp>
    </div>
  )
};