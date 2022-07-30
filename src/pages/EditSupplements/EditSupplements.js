import React from 'react';
//get info towards w.e you pointing it to useref
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

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

    return (
        <div className="create-body" >
            <h1>Creating New Supplement</h1>
            <form className="create-form-container" onSubmit={handleSubmit}>
                <p>Image</p>
                <input defaultValue={choosenSupplements.img} placeholder='Enter a image' type="text" ref={img} />
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