import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Forecastcard from './Forecastcard';

const Forecast = (props) => {
    console.log(props,"here")
    const [data, setdata] = useState()


    useEffect(()=>{
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=663717f4a8c3430db10100725241203&q=${props.place}&days=10&aqi=no&alerts=no`)
        .then((res)=>{
            // console.log(res)
            return res.json()
        })
        .then((data)=>{
            console.log(data, "here")
            setdata(data)
        
        })

    }, [])


    




const handleclose = ()=>{
    props.data(false)
}
  return (
    <WRAPPER >
    <h2> Forecast</h2>
      <Forecastcard  {...data} />
    <button onClick={handleclose}>Go back</button>
    
    </WRAPPER>
    
  )
}

export default Forecast

const WRAPPER = styled.div`

   button{
    margin-top: 10px;
  
   }
`