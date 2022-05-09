import React from "react";

function AboutPopUp (props) {
  return (props.trigger) ?(
    <div className="about-container"> 
      <div className="">
      <button className="about-close"onClick={(()=> props.setTrigger(false))}> close </button> 
      {props.children}
      </div> 
      </div>
  ) : "";
}

export default AboutPopUp;