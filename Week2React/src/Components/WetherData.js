import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function WetherData(props) {

    const [city,setCity] = useState({
        city:props.city
    })
    useEffect(()=>{
        setCity({
            city:props.city
        })
        
    },[props.city])
    return (
        <div>
            {props.city} ---{city.city}
        </div>
    )
}
