import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const NutruitionShowPage = ({ choosenNutrition, user }) => {
    const { id } = useParams()
    const [show, setShow] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://gym-life.herokuapp.com/api/nutruition/${id}`)
                setShow(response.data.superMan)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return (
        <div className="nutBackGround">
            <h1>{`Good ${choosenNutrition.name}`}</h1>
            <p className="deal">{`${choosenNutrition.goodDetail}`}</p>
            <h1>{`Bad ${choosenNutrition.name}`}</h1>
            <p className="deal">{`${choosenNutrition.badDetail}`}</p>

            <a href={`/nutrition`}><button>Back button</button></a>
            {user.admin ? < Link to={`/EditNutrition/${choosenNutrition._id}`}><button>Edit button</button></Link> : ''}
        </div>

    )
}

export default NutruitionShowPage