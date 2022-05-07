import React from 'react'
import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const NutruitionShowPage = () => {
    const {id} = useParams()
    const [show, setShow] = useState({})

    useEffect(()=>{
        (async ()=> {
            try{
        const response = await axios.get(`https://gym-life.herokuapp.com/api/nutruition${id}`)
        setShow(response.data.superMan)
            }catch(err){
            console.log(err)
            }
        })()
    },[])
  return (
    <div className="nutBackGround">
        <h1>{`Good ${show.name}`}</h1>
    <p>{`this item name is: ${show.name}`}</p>
    <p className="deal">{`${show.goodDetail}`}</p>
     <h1>{`Bad ${show.name}`}</h1>
     <p className="deal">{`${show.badDetail}`}</p>

    <a href = {`/nutrition`}><button>Back button</button></a>
    
    </div>
    
  )
}

export default NutruitionShowPage