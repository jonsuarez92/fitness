import React from 'react';
//get info towards w.e you pointing it to useref
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'


const EditNutrition = ({ choosenNutrition }) => {
    const navigate = useNavigate();
    const img = useRef();
    const name = useRef();
    const goodDetail = useRef();
    const badDetail = useRef();
    // const detail = useRef();
    const des = useRef();
    const handleSubmit = async (input) => {
        //method below prevent the form from crashing web page.
        input.preventDefault()
        try {
            // try is where we building the object csac hdskvk
            await axios.put(`/api/nutruition/${choosenNutrition._id}`, {
                img: img.current.value,
                name: name.current.value,
                // detail: detail.current.value,
                goodDetail: goodDetail.current.value,
                badDetail: badDetail.current.value,
                des: des.current.value,

            })
            navigate('/nutrition')
        } catch (err) {
            console.log(err)
        }
    }
    const handledelete = async (id) => {
        try {
            const response = await axios.delete(`/api/nutruition/${id}`, {

            })
            if (response.status === 200) {
                navigate('/nutrition')
            }
        }

        catch (err) {
            console.log(err)
        }
    }


    return (

        <div className="create-body" >
            <h1>Creating New Nutrition</h1>
            <form className="create-form-container" onSubmit={handleSubmit}>
                <p>Image</p>
                <input defaultValue={choosenNutrition.img} placeholder='Enter a image' type="text" ref={img} />
                <p>Name Of Nutrition</p>
                <input defaultValue={choosenNutrition.name} placeholder='Enter Day of Nutrition' type="text" ref={name} />
                <p>Good Details Of Nutrition</p>
                <textarea defaultValue={choosenNutrition.goodDetail} placeholder='Enter good details of nutrition' type="text" ref={goodDetail} />
                <p>Bad Details Of Nutrition</p>
                <textarea defaultValue={choosenNutrition.badDetail} placeholder='Enter bad details of nutrition' type="text" ref={badDetail} />
                <p>description Of Nutrition</p>
                <textarea defaultValue={choosenNutrition.des} placeholder='Enter description' type="text" ref={des} />
                <input type="submit" value="Edit Nutrition" />
            </form>
            <button onClick={() => { handledelete(choosenNutrition._id) }}>Delete Nutrition</button>
        </div>
    )
}

export default EditNutrition