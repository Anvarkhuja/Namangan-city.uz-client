import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const UpHotel = () => {
    const [hotel, setHotel] = useState({
        img:"",
        desc:"",
        label:"",
        link:"",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const Id = location.pathname.split("/")[2]

    

    const handleChange = (e) =>{
       setHotel(prev=>({...prev, [e.target.name]: e.target.value })); 

    };

    const handleClick = async e =>{
       e.preventDefault()
       try{
           await axios.put("http://localhost:8000/Hotels/"+ Id, hotel)
           navigate("/EditHotel")
       }catch(err){
        console.log(err)
       }
    }

    console.log(hotel)
    return (
        <div className='form'>
            <h1>Update the hotel</h1>
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
            placeholder='location' 
            onChange={handleChange} 
            name="label"
            />
            <input 
            type="text" 
            placeholder='link' 
            onChange={handleChange} 
            name="link"
            />
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    )
}

export default UpHotel