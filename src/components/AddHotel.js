import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './AddHotel.css';

const AddHotel = () => {
    const [hotel, setHotel] = useState({
        img:"",
        desc:"",
        label:"",
        link:"",
       
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
       setHotel(prev=>({...prev, [e.target.name]: e.target.value })); 

    };

    const handleClick = async e =>{
       e.preventDefault()
       try{
           await axios.post("http://localhost:8000/hotels", hotel)
           navigate("/Admin")
       }catch(err){
        console.log(err)
       }
    }

    console.log(hotel)
    return (
        <div className='form'>
            <h1>Add new hotel</h1>
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
             <input 
            type="text" 
            placeholder='link' 
            onChange={handleChange} 
            name="link"
            />
            
            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddHotel