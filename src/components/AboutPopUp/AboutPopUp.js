import React from "react";

function AboutPopUp (props) {
  return (props.trigger) ?(
    <div className="about-container"> 
      <div className="about-inner">
      <button className="about-close"onClick={(()=> props.setTrigger(false))}> close </button> 
      {props.children}
      </div> 
      </div>
  ) : "";
}

export default AboutPopUp;