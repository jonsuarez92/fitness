import React from 'react';
//get info towards w.e you pointing it to useref
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const CreateSupplements = (props) => {
    const navigate = useNavigate();
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
            await axios.post('/api/supps', {
                img: img.current.value,
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

    return (
        <div className="create-body" >
            <h1>Creating New Supplement</h1>
            <form className="create-form-container" onSubmit={handleSubmit}>
                <p>Image</p>
                <input placeholder='Enter a image' type="text" ref={img} />
                <p>Name Of Supplement</p>
                <input placeholder='Enter name of supplement' type="text" ref={name} />
                <p>Des Of Supplement</p>
                <textarea placeholder='Enter description of Supplement' type="text" ref={des} />
                <p>About Supplement</p>
                <textarea placeholder='Enter description of Supplement' type="text" ref={goodDetail} />
                <input type="submit" value="create supps" />
            </form>

        </div>
    )
}

export default CreateSupplements