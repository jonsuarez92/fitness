import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';




export default function WorkOutPage({ setChoosenWorkOut }) {
    const [workOutList, setWorkOutList] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://gym-life.herokuapp.com/api/workouts ')
                setWorkOutList(response.data)
                console.log('text')
                console.log(workOutList)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return (
        <div className="workOutBackGround">
            <h1 className="workH">🦾WorkOut!🦾</h1>
            {/* <Link to='/createWorkouts'><button>Create Workout</button></Link> */}
            <div className="workOutListWrapper">
                {workOutList.map((workOut, i) => {
                    return (
                        //If your on click has a function that requires props you have to wrap it in 
                        //a arrow function otherwise you dont have to
                        <Link key={i} onClick={() => { setChoosenWorkOut(workOut) }} to={`/workouts/${workOut._id}`}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={workOut.bannerImg} alt="" alt="card image cap" />
                                <div className="card-body" >
                                    <h5 className="card-title">{workOut.name}</h5>
                                    <p className="card-text">{workOut.details}</p>
                                    <button className="btn btn-primary">Go here</button>
                                </div>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </div>

    );
}