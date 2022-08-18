import React, { useState } from 'react';
//get info towards w.e you pointing it to useref
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { uploadImage } from '../../utilities/imageUpload';





export default function EditWorkouts({ choosenWorkOut }) {
    const navigate = useNavigate();
    //use ref gets info on a html element
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
        //method below prevent the form from refreshing the page! preventing the page from losing all state values and stoping it from becoming its default like star wars bladein Ant project.
        input.preventDefault()
        try {
            // try is where we building the object to send to the backend to create a new workout 
            await axios.put(`/api/workouts/${choosenWorkOut._id}`, {
                bannerImg: workOutMainImage,
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
            // -1 is the same as hitting the back button
            navigate('/workouts')
        } catch (err) {
            console.log(err)
        }
    }
    const handledelete = async (id) => {
        try {
            const response = await axios.delete(`/api/workouts/${id}`, {

            })
            if (response.status === 200) {
                navigate('/workouts')
            }
        }

        catch (err) {
            console.log(err)
        }
    }
    //below is what ill need to make could stufff work 
    const [files, setFiles] = useState([])
    const [body, setBody] = useState({ img: '' })
    const [workOutMainImage, setWorkOutMainImage] = useState('')

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
        setWorkOutMainImage(response)
    }

    const handleFiles = (evt) => {
        setFiles(evt.target.files)
    }
    return (
        <>
            <div className="create-body">
                <div >
                    <h1>Edit Workout</h1>
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
                        <p>Name Of Workout</p>
                        <input defaultValue={choosenWorkOut.name} placeholder='Enter a image' type="text" ref={name} />
                        <p>Details Of Workout</p>
                        <textarea defaultValue={choosenWorkOut.details} placeholder='Enter a image' type="text" ref={details} />
                        <p>Image 1 Of Workout</p>
                        <input defaultValue={choosenWorkOut.img1} placeholder='Enter image of workout' type="text" ref={img1} />
                        <p>Image 2 Of Workout</p>
                        <input defaultValue={choosenWorkOut.img2} placeholder='Enter image of workout' type="text" ref={img2} />
                        <p>Image 3 Of Workout</p>
                        <input defaultValue={choosenWorkOut.img3} placeholder='Enter image of workout' type="text" ref={img3} />
                        <p>Image 4 Of Workout</p>
                        <input defaultValue={choosenWorkOut.img4} placeholder='Enter image of workout' type="text" ref={img4} />
                        <p>Image 5 Of Workout</p>
                        <input defaultValue={choosenWorkOut.img5} placeholder='Enter image of workout' type="text" ref={img5} />
                        <p>Category For Workouts</p>
                        <input defaultValue={choosenWorkOut.category} placeholder='Enter a image' type="text" ref={category} />
                        <p>description Of Workouts</p>
                        <textarea defaultValue={choosenWorkOut.des} placeholder='Enter a image' type="text" ref={des} />
                        <input type="submit" value="update workout" />
                    </form>
                    <button onClick={() => { handledelete(choosenWorkOut._id) }}>Delete Workout</button>
                </div>
            </div>
        </>
    )
}


