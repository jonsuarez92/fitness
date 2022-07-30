import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


export default function NutritionPage(props) {
    const [nutList, setNutList] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(' https://gym-life.herokuapp.com/api/nutruition')
                setNutList(response.data)
                console.log('text')
                console.log(nutList)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return (
        <div className="nutBackGround">
            <h1>Good Vs Bad</h1>

            <div className="nutListWrapper">
                {nutList.map((nut, i) => {
                    return (
                        //  <div key={i}>
                        //      <Link to = {`/nutrition/${nut._id}`}>
                        //     <h3>{`this item name is: ${nut.name}`}</h3></Link>
                        //     <img  src={nut.img} alt=""/>
                        //     {console.log(nut.img)}
                        //     <p>{` ${nut.des}`}</p>
                        //  </div>
                        <Link key={i} to={`/nutrition/${nut._id}`}>

                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={nut.img} alt="" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{nut.name}</h5>
                                    <p className="card-text">{nut.des}</p>
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