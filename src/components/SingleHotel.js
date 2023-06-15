import React from 'react';


import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation} from 'react-router-dom'
import "./SingleHotel.css"

function SingleHotel() {

    
    
    const [hotel,setHotel] = useState([])

    const location = useLocation();
    

    const Id = location.pathname.split("/")[2];
     

    useEffect(()=>{
        const fetchHotel = async ()=>{
            try{
               const res = await axios.get("http://localhost:8000/hotels/" + Id)
               setHotel(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchHotel()
    },[Id])

  

    return (
        <div className='cards-about'>
          {/* <h1>About city</h1> */}
          {hotel.map(hotel=>(
          <div className='cards__title' >
          <img
                className='cards_about_img'
                alt=''
                src={hotel.img}
              />
              <h1>{hotel.desc}</h1>
            <p><i class="fa-solid fa-location-dot"></i> {hotel.label}</p>
            <h3><i class="fa-solid fa-tag" ></i> <a href={hotel.link}> book</a></h3>

            <p className="lorem">
               It is a long established fact that a reader will be 
              distracted by the readable content of a page when looking 
              at its layout. The point of using Lorem Ipsum is that it has
               a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable 
                English. Many desktop publishing packages and web page editors 
               by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
          ))}
       
        </div>
      );
  





}
    export default SingleHotel;
