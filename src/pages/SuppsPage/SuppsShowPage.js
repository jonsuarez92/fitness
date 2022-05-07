import React from 'react'
import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SuppsShowPage = () => {
    const {id} = useParams()
    const [show, setShow] = useState({})

    useEffect(()=>{
        (async ()=> {
            try{
        const response = await axios.get(`https://gym-life.herokuapp.com/${id}`)
        setShow(response.data.superMan)
            }catch(err){
            console.log(err)
            }
        })()
    },[])
  return (
    <div className="supBackGround">
        <h1 className="supH">{show.name}</h1>
    <p className="supDeal">{`${show.goodDetail}`}</p>
     
<a href = {`/supps`}><button>Back button</button></a>
    
    </div>
    
  )
}

export default SuppsShowPage