import React, { useState } from 'react';
//get info towards w.e you pointing it to useref
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { uploadImage } from '../../utilities/imageUpload';


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
                img: nutritionOutMainImage,
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
    const [files, setFiles] = useState([])
    const [body, setBody] = useState({ img: '' })
    const [nutritionOutMainImage, setNutritionOutMainImage] = useState('')

    const upload = async () => {
        //FormData() class that stores data in a {}
        const formData = new FormData()
        //apppend is express function
        formData.append('file', files[0])
        formData.append('upload_preset', 'gkwoq2h0')
        // console.log(formData)
        const response = await uploadImage(formData)
        console.log(response)
        setBody({ img: response })
        setNutritionOutMainImage(response)
    }

    const handleFiles = (evt) => {
        setFiles(evt.target.files)
    }


    return (

        <div className="create-body" >
            <h1>Creating New Nutrition</h1>
            <form className="create-form-container" onSubmit={handleSubmit}>
                <p>Image</p>
                {/* form starts here to have the functionality to work to 
                add a file and upload the file to cloud and web page */}
                <div >
                    <label >
                        <input type='file' name='img' onChange={handleFiles} />
                    </label>
                    <button type='button' onClick={upload}>{body.img ? "Image Uploaded" : "Upload Image"}</button>
                </div>
                {/* ends here for cloud stuff */}
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