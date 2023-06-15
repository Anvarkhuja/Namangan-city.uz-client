import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './AddHotel.css';

const AddDestinations = () => {
    const [destination, setDestination] = useState({
        img:"",
        desc:"",
        label:"",
       
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
       setDestination(prev=>({...prev, [e.target.name]: e.target.value })); 

    };

    const handleClick = async e =>{
       e.preventDefault()
       try{
           await axios.post("http://localhost:8000/destinations", destination)
           navigate("/Admin")
       }catch(err){
        console.log(err)
       }
    }

    console.log(destination)
    return (
        <div className='form'>
            <h1>Add new Destination</h1>
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

export default AddDestinations