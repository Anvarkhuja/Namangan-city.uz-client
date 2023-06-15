import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const EditHotel = () => {
    const [hotels,setHotels] = useState([])

    useEffect(()=>{
        const fetchAllHotels = async ()=>{
            try{
               const res = await axios.get("http://localhost:8000/hotels")
               setHotels(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllHotels()
    },[])

    const handleDelete = async (id)=>{
        try{
           await axios.delete("http://localhost:8000/Hotels/"+id)
           window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className='head-title'>Edit Hotels</h1>
            <div className="hotels">
                {hotels.map(hotel=>(
                    <div className="book" key={hotel.id}>
                        {hotel.img && <img src={hotel.img} alt="" />}
                        <h2>{hotel.desc}</h2>
                        <p>{hotel.label}  </p>
                        <div className='bookbtn'>
                        <button className="delete" onClick={()=>handleDelete(hotel.id)}>Delete</button>
                        <button className="update"><Link className='btnnon' to={`/UpHotel/${hotel.id}`}>Update</Link></button>
                        </div>
                    </div>
                ))}
            </div>
            <button className='addButton'> 
                <Link className='btnnon' to="/AdminHot">Add new hotel</Link> 
            </button>
            <button className='addButton'> 
                <Link className='btnnon' to="/Admin">Front</Link> 
            </button>
        </div>
    )
}
const style = document.createElement('style');
style.innerHTML = `
.hotels {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  
}
.desc{
  color: black;
  font-size: 18px
}

.hotel{
  max-width: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 1rem;
  background-color: #bfd9f1;
  border-radius: 20px;
  margin-bottom: 30px;
}

img{
  max-width: 300px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  background-color: rgb(158, 231, 207);
  
}

.delete{
  margin-right: 25px;
  border: none;
  padding: 3px 6px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid rgb(245, 191, 191);
  color: rgb(242, 100, 100);
}
.update{
  color: green;
  border: none;
  padding: 3px 6px;
  background-color: green;
  cursor: pointer;
  border: 1px solid rgb(204, 204, 243);
  
}

.form{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input{
  width: 250px;
  padding: 10px;
  border: 1px solid grey;
}
.head-title{
  text-align: center;
  margin: 20px;
}


.formButton{
  border: none;
  padding: 10px;
  background-color: rgb(28, 14, 223);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.addButton{
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  text-decoration: none;
  
 margin-left: auto;
 margin-right: auto;
 
 padding: 7px;
 border-radius: 5px;
 background-color: rgb(79, 202, 141);
  
}
.span,
i{
  
  cursor: pointer;
}
.link{
  cursor: pointer;
  color: white;
  padding:5px;
  border-radius: 5px;
  background-color: green;
  font-size: 18px;
  
}
a{
  text-decoration: none;
  color: white;
}


.btnnon{
  text-decoration: none;
}
@media (min-width: 600px) {
  .hotels { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 900px) {
  .hotels { grid-template-columns: repeat(3, 1fr); }
}
    `;
document.head.appendChild(style);

export default EditHotel