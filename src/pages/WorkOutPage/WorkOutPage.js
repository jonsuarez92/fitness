import axios from 'axios'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';




export default function WorkOutPage({setChoosenWorkOut}) {
    const [workOutList, setWorkOutList] = useState([])

    useEffect(()=>{
        (async ()=> {
            try{
        const response = await axios.get('https://gym-life.herokuapp.com/ ')
        setWorkOutList(response.data)
        console.log('text')
        console.log(workOutList)
            }catch(err){
            console.log(err)
            }
        })()
    },[])
    return (
     <div className="workOutBackGround">
        <h1 className="workH">🦾WorkOut!🦾</h1>

     <div className="workOutListWrapper">   
    {workOutList.map((workOut, i) => {
        return(
        //  <div key={i}>
        //      <Link to = {`/nutrition/${nut._id}`}>
        //     <h3>{`this item name is: ${nut.name}`}</h3></Link>
        //     <img  src={nut.img} alt=""/>
        //     {console.log(nut.img)}
        //     <p>{` ${nut.des}`}</p>
        //  </div>

        //If your on click has a function that requires props you have to wrap it in 
        //a arrow function otherwise you dont have to
            <Link  onClick={()=>{setChoosenWorkOut(workOut)}} to = {`/workouts/${workOut._id}`}>
       <div key={i} className="" style={{width: "18rem"}}>
  <div className="" >
    <h5 className="">{workOut.name}</h5>
    <img className="workOutImg"src={workOut.img} alt=""/>
    <p className="">{workOut.des}</p>
    
    
  </div>
</div>
    </Link>
        )
    })}
    </div>
    </div>
    
    );
}