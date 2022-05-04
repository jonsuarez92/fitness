import axios from 'axios'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';


export default function NutritionPage(props) {
    const [workOutList, setWorkOutList] = useState([])

    useEffect(()=>{
        (async ()=> {
            try{
        const response = await axios.get('http://localhost:3001/api/workouts')
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

     <div className="nutListWrapper">   
    {workOutList.map((workOut, i) => {
        return(
        //  <div key={i}>
        //      <Link to = {`/nutrition/${nut._id}`}>
        //     <h3>{`this item name is: ${nut.name}`}</h3></Link>
        //     <img  src={nut.img} alt=""/>
        //     {console.log(nut.img)}
        //     <p>{` ${nut.des}`}</p>
        //  </div>
            <Link to = {`/workouts/${workOut._id}`}>
        
       
  <div className="container">
    
    <div className="row row-flex">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-1">
          <h3>{workOut.name}</h3>
          <p>{workOut.des}</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-2">
          <h3>Second column</h3>
          <p>Normal content.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-3">
          <h3>Third column</h3>
          <p>Normal content.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-4">
          <h3>Fourth column</h3>
          <p>Normal content.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-5">
          <h3>Fifth column</h3>
          <p>Normal content.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-6">
          <h3>Sixth column</h3>
          <p>Normal content.</p>
        </div>
      </div>
    </div>
    </div>

    </Link>
        )
    })}
    </div>
    </div>
    
    );
}