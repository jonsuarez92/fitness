import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const WorkOutShowPage = ({ choosenWorkOut }) => {
    const { id } = useParams()
    const [show, setShow] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://gym-life.herokuapp.com/api/workouts${id}`)
                setShow(response.data.workOut)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return (
        <div className="supBackGround">
            <h1 className="supH">{choosenWorkOut.name}</h1>
            <p className="supDeal">{choosenWorkOut.des}</p>

            <a href={`/Workouts`}><button>Back button</button></a>
            < Link to={`/editworkouts/${choosenWorkOut._id}`}><button>Edit button</button></Link>
            {choosenWorkOut.img1 ? <img className="imgWorkOuts" src={choosenWorkOut.img1} /> : ""}
            {choosenWorkOut.img2 ? <img className="imgWorkOuts" src={choosenWorkOut.img2} /> : ""}
            {choosenWorkOut.img3 ? <img className="imgWorkOuts" src={choosenWorkOut.img3} /> : ""}
            {choosenWorkOut.img4 ? <img className="imgWorkOuts" src={choosenWorkOut.img4} /> : ""}
            {choosenWorkOut.img5 ? <img className="imgWorkOuts" src={choosenWorkOut.img5} /> : ""}

        </div>

    )
}

export default WorkOutShowPage