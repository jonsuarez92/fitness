import React from 'react';
//get info towards w.e you pointing it to useref
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'


const CreateNutrition = () => {
    const navigate = useNavigate();
    const img = useRef();
    const name = useRef();
    const goodDetail = useRef();
    const badDetail = useRef();
    const detail = useRef();
    const des = useRef();


    const handleSubmit = async (input) => {
        //method below prevent the form from crashing web page.
        input.preventDefault()
        try {
            // try is where we building the object csac hdskvk
            await axios.post('/api/nutruition', {
                img: img.current.value,
                name: name.current.value,
                detail: detail.current.value,
                goodDetail: goodDetail.current.value,
                badDetail: badDetail.current.value,
                des: des.current.value,

            })
            navigate('/nutrition')
        } catch (err) {
            console.log(err)
        }
    }
    return (

        <div className="create-body" >
            <h1>Creating New Nutrition</h1>
            <form className="create-form-container" onSubmit={handleSubmit}>
                <p>Image</p>
                <input placeholder='Enter a image' type="text" ref={img} />
                <p>Name Of Nutrition</p>
                <input placeholder='Enter Day of Nutrition' type="text" ref={name} />
                <p>Details Of Nutrition</p>
                <textarea placeholder='Enter details of nutrition' type="text" ref={detail} />
                <p>Good Details Of Nutrition</p>
                <textarea placeholder='Enter good details of nutrition' type="text" ref={goodDetail} />
                <p>Bad Details Of Nutrition</p>
                <textarea placeholder='Enter bad details of nutrition' type="text" ref={badDetail} />
                <p>description Of Nutrition</p>
                <textarea placeholder='Enter description' type="text" ref={des} />
                <input type="submit" value="create Nutrition" />
            </form>

        </div>
    )
}
export default CreateNutrition