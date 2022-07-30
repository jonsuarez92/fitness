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


    return (
        <div>
            <h1>Creating Nutrition</h1>
        </div>
    )
}

export default CreateNutrition