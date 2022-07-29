import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SuppsShowPage = ({ choosenSupplements }) => {
    const { id } = useParams()
    const [show, setShow] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://gym-life.herokuapp.com/api/supps/${id}`)
                setShow(response.data.superMan)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return (
        <div className="supBackGround">
            <h1 className="supH">{choosenSupplements.name}</h1>
            <p className="supDeal">{`${choosenSupplements.goodDetail}`}</p>

            <a href={`/supps`}><button>Back button</button></a>

        </div>


    )
}

export default SuppsShowPage