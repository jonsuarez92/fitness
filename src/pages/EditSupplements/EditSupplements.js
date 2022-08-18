import React, { useState } from 'react';
//get info towards w.e you pointing it to useref
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { uploadImage } from '../../utilities/imageUpload';

const EditSupplements = ({ choosenSupplements }) => {
    const navigate = useNavigate();
    //use ref gets info on a html element
    const img = useRef();
    const name = useRef();
    const goodDetail = useRef();
    const badDetail = useRef();
    const category = useRef();
    const des = useRef();
    const url = useRef();

    const handleSubmit = async (input) => {
        //method below prevent the form from crashing web page.
        input.preventDefault()
        try {
            // try is where we building the object csac hdskvk
            await axios.put(`/api/supps/${choosenSupplements._id}`, {
                img: supplementMainImage,
                name: name.current.value,
                goodDetail: goodDetail.current.value,
                // goodDetails: badDetail.current.value,
                // category: category.current.value,
                des: des.current.value,
                // url: url.current.value,
            })
            navigate('/supps')
        } catch (err) {
            console.log(err)
        }
    }
    const handledelete = async (id) => {
        try {
            const response = await axios.delete(`/api/supps/${id}`, {

            })
            if (response.status === 200) {
                navigate('/supps')
            }
        }

        catch (err) {
            console.log(err)
        }
    }
    //below is what ill need to make could stufff work 
    const [files, setFiles] = useState([])
    const [body, setBody] = useState({ img: '' })
    const [supplementMainImage, setSupplementMainImage] = useState('')

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
        setSupplementMainImage(response)
    }

    const handleFiles = (evt) => {
        setFiles(evt.target.files)
    }


    return (
        <div className="create-body" >
            <h1>Creating New Supplement</h1>
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
                <p>Name Of Supplement</p>
                <input defaultValue={choosenSupplements.name} placeholder='Enter name of supplement' type="text" ref={name} />
                <p>Des Of Supplement</p>
                <textarea defaultValue={choosenSupplements.des} placeholder='Enter description of Supplement' type="text" ref={des} />
                <p>About Supplement</p>
                <textarea defaultValue={choosenSupplements.goodDetail} placeholder='Enter description of Supplement' type="text" ref={goodDetail} />
                <input type="submit" value="update Supplement" />
            </form>
            <button onClick={() => { handledelete(choosenSupplements._id) }}>Delete Supplement</button>
        </div>
    )
}
export default EditSupplements