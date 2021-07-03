import React, { useState } from 'react'
import WetherData from './WetherData';
import Weather from './Weather';
const DisplayCity =()=> {

    const[city,setCity]=useState({
        city:""
    });
    const[val,setVal]=useState("chennai")
    const onChangeCity=(event)=>{
        const{name,value}=event.target;
        // console.log(event.target.value)
        setCity((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
        
    }
    const onsubmit =()=>{
        setVal(city.city)
    }
 
    return (
        <div>
            <legend>Form title</legend>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" id="city" name="city" onChange={onChangeCity} placeholder="Input City"/>
                </div>
                <button className="btn btn-primary" onClick={onsubmit}>Submit</button>
                <Weather city={val}/> 
        </div>
    )
}
export default DisplayCity;