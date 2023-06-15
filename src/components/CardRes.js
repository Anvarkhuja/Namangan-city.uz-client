import React from 'react';


import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const CardsRes = () => {
  const [restourants,setRestourants] = useState([])

  useEffect(()=>{
      const fetchAllRestourants = async ()=>{
          try{
             const res = await axios.get("http://localhost:8000/restourants")
             setRestourants(res.data);
          }catch(err){
              console.log(err)
          }
      }
      fetchAllRestourants()
  },[])

// function CardHotels() {
  return (
    <div>
        <h1 className='head-title'>The best Restourants</h1>
        <div className="restourants">
            {restourants.map(restourant=>(
                <div className="restourant" key={restourant.id}>
                    {restourant.img && <img src={restourant.img} alt="" />}
                    <h2 className='desc'>{restourant.desc}</h2>
                    <p><i class="fa-solid fa-location-dot"></i>  {restourant.label}  </p>
                   
                </div>
            ))}
        </div>
   
    </div>
)

}
const style = document.createElement('style');
style.innerHTML = `
.restourants {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  
}
.desc{
  color: black;
  font-size: 18px
}

.restourant{
  max-width: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 1rem;
  background-color: #f7cedc;
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
  border: none;
  padding: 3px 6px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid rgb(204, 204, 243);
  color: rgb(139, 139, 234);
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

.btnnon{
  text-decoration: none;
}
@media (min-width: 600px) {
  .restourants { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 900px) {
  .restourants { grid-template-columns: repeat(3, 1fr); }
}
    `;
document.head.appendChild(style);


export default CardsRes;