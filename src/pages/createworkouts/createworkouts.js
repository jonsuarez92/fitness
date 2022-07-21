import React from 'react';
//get info towards w.e you pointing it to useref
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'




export default function CreateWorkouts(props) {
    const navigate = useNavigate();
    const img = useRef();
    const name = useRef();
    const details = useRef();
    const category = useRef();
    const des = useRef();

    const handleSubmit = async (input) => {
        //method below prevent the form from crashing web page.
        input.preventDefault()
        try {
            console.log(img.current.value)
            // try is where we building the object 
            await axios.post('/api/workouts', {
                img: img.current.value,
                name: name.current.value,
                details: details.current.value,
                category: category.current.value,
                des: des.current.value
            })
            navigate('/workouts')
        } catch (err) {
            console.log(err)
        }
    }
    return (

        <div>
            <h1>Creating New Workout</h1>
            <form onSubmit={handleSubmit}>
                <p>Image</p>
                <input placeholder='Enter a image' type="text" ref={img} />
                <p>Name Of Workout</p>
                <input placeholder='Enter a image' type="text" ref={name} />
                <p>Details Of Workout</p>
                <textarea placeholder='Enter a image' type="text" ref={details} />
                <p>Category For Workouts</p>
                <input placeholder='Enter a image' type="text" ref={category} />
                <p>description Of Workouts</p>
                <textarea placeholder='Enter a image' type="text" ref={des} />
                <input type="submit" value="create workout" />
            </form>

        </div>
    )
}


