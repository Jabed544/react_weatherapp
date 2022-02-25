import React, { useEffect, useState } from "react";

const App=()=>{
const[city,setCity]=useState();
const[degree,setDegree]=useState(0);
const[searchcitty,setSearchcity]=useState("SILCHAR");

useEffect(()=>{
  const key="3b2b97808825bf013ed953f211dd6c90";
  const base = `https://api.openweathermap.org/data/2.5/weather?q=${searchcitty}&appid=${key}&units=metric`;
  const fetchApi=async()=>{
    const response=await fetch(base);
    const resJason=await response.json();
    setDegree(resJason.main);
  }
  fetchApi();

})
const itemChange=(event)=>{
  setCity(event.target.value)
}
const subMit=()=>{
  setSearchcity(city);
}

  return(
   <div>
     {searchcitty ? (
      <>
      <input type="search" onChange={itemChange}/>
      <button onClick={subMit}>SEARCH</button>
      <h1>{searchcitty}</h1>
      <h1>{degree.temp}</h1>
    </>
     ):(
     <>
       <h1> data not found</h1>
     </>
     )

     }
   </div>
  )
}

export default App;