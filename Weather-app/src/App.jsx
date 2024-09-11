import 'animate.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import './App.css';
import Forecast from './Forecast';


function App() {
  const [data, setData] = useState({})
  const [city, setCity] = useState("")
  const [image, setImage] = useState(null)
  const [loading, setIsLoaing] = useState(null)
  const [icon, setIcon] = useState("")
  const [popup , setPopup] = useState(false)
  const [place,setPlace] = useState("")
 

  const notify = () => toast.info("Input filed is empty!!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
   
    });

  const handleclick = () => {
    if (city.trim().length == 0) {
      return notify()
    }
    setIsLoaing(false)
    fetch(`https://api.weatherapi.com/v1/current.json?key=663717f4a8c3430db10100725241203&q=${city}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        if (data.error && data.error.code == 1006) {
          return setIsLoaing("error")
        }

        setIsLoaing(true)
        setData(data)
        console.log("be;pw")
        setImage(data.current.condition.text)
        setIcon(data.current.condition.icon)
        setCity("")

      })
      .catch((err) => {

        console.log(err, "here")
      })
  }

  const handlechange = (e) => {

    setCity(e.target.value)
    setPlace(e.target.value)

  }
  const handletry = () => {
    setData({})
    setCity("")
    setImage(null)
    setIsLoaing(null)
    setPlace("")
  }

  const handlepopup =()=>{
    setPopup(true)
  }

  return (
    <DIV className="App">
      {
        !popup ? 
      <>
      <div>
        <h1 id='weather'>Weather App</h1>
        <div id='header'>
          {
            loading == null ? <div>
              <input onChange={handlechange} value={city} placeholder='Enter City name...' />
            </div> : null
          }
          {
            loading == true || loading == "error" ? null : <button onClick={handleclick}>Get Weather</button>
          }
        </div>
      </div>
      {
        loading == true ?
          <div>
            <div>
              {
                image == null ? null : <div>
                  <img src={icon} />


                </div>
              }
            </div>

            {
              loading == true ?
                <div className='animate__animated animate__zoomIn'>
                  <h1 id='name'> {data.current.temp_c}°<span id='degree'>C</span> </h1>
                  <h1  id='place'>{data.location.name}</h1>
                  <span >{data.current.humidity}% Humidity </span>
                  <p > {data.current.wind_kph} Km/hr Wind Speed </p>
                </div>
                : null
            }
          </div>
          :
          loading == false ?
            <h5> Getting weather update.....</h5>
            : loading == "error" ? <div>
              <h4 id='error'>No matching location found....</h4>
              <button onClick={handletry}>Try another city</button>
            </div>
              : null
      }
      <div>
        {
          loading == true ? <button onClick={handletry}>Try another city</button> : null
        }
      </div>
      <div>
        {
          loading == true ? <button id='forecast' onClick={handlepopup}>Get 3 days forecast</button> : null
        }
      </div>

      <ToastContainer
  

        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"


    
/>
</>

:
 <Forecast data={setPopup}  place ={place}  />
      }
    </DIV>
  );
}



export default App;

const DIV = styled.div`
/* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

width: 330px;
margin: auto;
padding-bottom: 10px;
padding-top: 10px;
border-radius: 15px;
margin-top: 60px;
background: #2F37D1;
background: linear-gradient(135deg, #2F37D1, #4876F2);
color: white;


input{
  margin-bottom: 10px;
  border-radius:10px;
  padding: 5px 11px;
  outline: none;
 
}
button{

  font-size: 14px;
  color: white;
  border-radius: 10px;
  font-weight: 600;
  padding: 10px 24px;
  outline: none;
  cursor: pointer;
  border: none;
  background: #2F37D1;
background: linear-gradient(135deg, #2F37D1, #4876F2);
}

button:hover{
  background-color: rgb(137, 137, 230);

}

#header{
  padding-bottom: 10px;
}  

#name{
  font-size: 45px;

  margin: 0px;
}

#degree{
  font-size: 30px;
}

img{
  border-radius: 50%;
  width:100px;
  height:100px;
  margin-bottom: 0px;
}

p{
  font-size: 16px;
  font-weight: 500;
}

span{
  color: white;
}

#error{
  color: red;
  font-size: 20px;
}


#place{
  font-size: 25px;
}

#weather{
  font-size: 30px;
}

#forecast{
  margin-top: 10px;
}




@media screen and (min-width: 250px ) and (max-width:500px)  {
   width: 90%;


}



#error{
  color: black;
}

`












