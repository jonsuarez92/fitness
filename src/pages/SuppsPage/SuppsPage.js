import './Supps.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function SuppsPages({ setChoosenSupplements }) {
    const [supList, setSupList] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://gym-life.herokuapp.com/api/supps ')
                setSupList(response.data)
                console.log('text')
                console.log(supList)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return (
        <div className="supBackGround">

            <h1 className="supH">Supplements</h1>

            <div className="nutListWrapper">
                {supList.map((sup, i) => {
                    return (
                        //  <div key={i}>
                        //      <Link to = {`/nutrition/${nut._id}`}>
                        //     <h3>{`this item name is: ${nut.name}`}</h3></Link>
                        //     <img  src={nut.img} alt=""/>
                        //     {console.log(nut.img)}
                        //     <p>{` ${nut.des}`}</p>
                        //  </div>
                        <Link key={i} onClick={() => { setChoosenSupplements(sup) }} to={`/supps/${sup._id}`}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={sup.img} alt="" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{sup.name}</h5>
                                    <p className="card-text">{sup.des}</p>
                                    <button className="btn btn-primary">Go Here</button>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>

    );
}