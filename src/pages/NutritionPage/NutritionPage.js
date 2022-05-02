import axios from 'axios'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function NutritionPage(props) {
    const [nutList, setNutList] = useState([])

    useEffect(()=>{
        (async ()=> {
            try{
        const response = await axios.get('http://localhost:3001/api/nutruition')
        setNutList(response.data)
        console.log('text')
        console.log(nutList)
            }catch(err){
            console.log(err)
            }
        })()
    },[])
    return (
     <div>
        <h1>NutritionPage</h1>
        
    {nutList.map((nut, i) => {
        return(
         <div key={i}>
             <Link to = {`/nutrition/${nut._id}`}><p>{`this item name is: ${nut.name}`}</p></Link>
         </div>
        )
    })}
    </div>
    
    );
}