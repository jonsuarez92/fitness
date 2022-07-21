import React from "react";

function AboutPopUp ({timePopUp, setTimePopUp, children}) {
  return (timePopUp) ?(
    <div className="about-container"> 
      <div className="">
      <button className="about-close"onClick={(()=> setTimePopUp(false))}> close  </button> 
      {children}
      </div> 
      </div>
  ) : "";
}

export default AboutPopUp;