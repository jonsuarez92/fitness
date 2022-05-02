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
        const response = await axios.get(`http://localhost:3001/api/nutruition/${id}`)
        setShow(response.data.superMan)
            }catch(err){
            console.log(err)
            }
        })()
    },[])
  return (
    <div>
        
    <p>{`this item name is: ${show.name}`}</p>
    
    </div>
    
  )
}

export default NutruitionShowPage