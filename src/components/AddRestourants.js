import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './AddHotel.css';

const AddRestourants = () => {
    const [restourant, setRestourant] = useState({
        img:"",
        desc:"",
        label:"",
       
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
       setRestourant(prev=>({...prev, [e.target.name]: e.target.value })); 

    };

    const handleClick = async e =>{
       e.preventDefault()
       try{
           await axios.post("http://localhost:8000/restourants", restourant)
           navigate("/Admin")
       }catch(err){
        console.log(err)
       }
    }

    console.log(restourant)
    return (
        <div className='form'>
            <h1>Add new restourant</h1>
            <input
             type="text"
             placeholder='img url' 
             onChange={handleChange} 
             name="img"
             />
            <input 
            type="text" 
            placeholder='desc' 
            onChange={handleChange} 
            name="desc"
            />
            <input 
            type="text" 
            placeholder='label' 
            onChange={handleChange} 
            name="label"
            />
            
            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddRestourants