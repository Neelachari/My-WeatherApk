import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

const Forecastcard = (props) => {
    console.log(props, "dsads");
    let data = props?.forecast?.forecastday;
    console.log(data, "hello");
    return (
        <>
            {!data  ? <p style={{fontSize:"18px", color:"black", fontWeight:"700"}}>Loading...</p> :
                <WRAPPER>
                    {
                        data?.map((el) => {
                            return (
                                <div className='animate__animated animate__zoomIn' id="card" key={el.date}>
                                    <p>{el.date}</p>
                                    <img src={el.day.condition.icon} alt="" />
                                    <p>Max temp: {el.day.maxtemp_c}°c</p>
                                    <p>Min temp: {el.day.mintemp_c}°c</p>
                                </div>
                            );
                        })
                    }
                </WRAPPER>
            }
        </>
    );
};



export default Forecastcard
const WRAPPER = styled.div`


  width: 250px;
  margin: auto;
  height: 280px;
  overflow-y: scroll;
  padding-right: 12px;
  padding-top: 10px;
  margin-bottom: 15px;
#card{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    width: 230px;
    margin: auto;
    margin-bottom: 15px;
    padding: 4px 2px 4px 0px;
    border-radius: 15px;
  
}






`