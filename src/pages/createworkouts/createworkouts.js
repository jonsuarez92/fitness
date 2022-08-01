import React from 'react';
//get info towards w.e you pointing it to useref
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'





export default function CreateWorkouts(props) {
    const navigate = useNavigate();
    const bannerImg = useRef();
    const name = useRef();
    const details = useRef();
    const category = useRef();
    const des = useRef();
    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();
    const img5 = useRef();

    const handleSubmit = async (input) => {
        //method below prevent the form from crashing web page.
        input.preventDefault()
        try {
            // try is where we building the object csac hdskvk
            await axios.post('/api/workouts', {
                bannerImg: bannerImg.current.value,
                name: name.current.value,
                details: details.current.value,
                category: category.current.value,
                des: des.current.value,
                img1: img1.current.value,
                img2: img2.current.value,
                img3: img3.current.value,
                img4: img4.current.value,
                img5: img5.current.value,
            })
            navigate('/workouts')
        } catch (err) {
            console.log(err)
        }
    }
    return (

        <div className="create-body" >
            <h1>Creating New Workout</h1>
            <form className="create-form-container" onSubmit={handleSubmit}>
                <p>Image</p>
                <input placeholder='Enter a image' type="text" ref={bannerImg} />
                <p>Name Of Workout</p>
                <input placeholder='Enter Day of workout' type="text" ref={name} />
                <p>Details Of Workout</p>
                <textarea placeholder='Enter details of workout' type="text" ref={details} />
                <p>Image 1 Of Workout</p>
                <input placeholder='Enter image of workout' type="text" ref={img1} />
                <p>Image 2 Of Workout</p>
                <input placeholder='Enter image of workout' type="text" ref={img2} />
                <p>Image 3 Of Workout</p>
                <input placeholder='Enter image of workout' type="text" ref={img3} />
                <p>Image 4 Of Workout</p>
                <input placeholder='Enter image of workout' type="text" ref={img4} />
                <p>Image 5 Of Workout</p>
                <input placeholder='Enter image of workout' type="text" ref={img5} />
                <p>Category For Workouts</p>
                <input placeholder='Enter category of workout' type="text" ref={category} />
                <p>description Of Workouts</p>
                <textarea placeholder='Enter description' type="text" ref={des} />
                <input type="submit" value="create workout" />
            </form>

        </div>
    )
}


