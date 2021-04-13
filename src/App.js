import React, {useState, createRef} from 'react'
import styled from 'styled-components'
import {data} from './data'
import bg from './assets/images/bg-pattern.svg'
import circle from './assets/images/circle-pattern.svg'
import './App.css';



const Container = styled.div`
   display: flex;
   align-items: center;
   /* justify-content: center; */
   flex-direction: column;
   height: 100vh;
   position: relative;
   font-family: 'Manrope', sans-serif;
`


const ContainerBg = styled.div`
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  right: 0;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
`

const Head = styled.div`
  margin: 90px 0 100px 0;
  position: relative;
  svg{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20%;
    z-index: -1;
  }
  p{
    margin: 0;
    text-align: center;
    font-size: 16px;
  }

  //MOBILE 375px
  @media(max-width: 375px){
    margin: 60px 0 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2{
      font-size: 24px;
      margin-bottom: 10px;
    }

    p{
      font-size: 15px;
      width: 200px;
      color: hsl(225, 20%, 60%);
    }
    
    svg{
      top: -30%;
      z-index: -1;
    }
  }

`


const Pricing = styled.div`
  -webkit-box-shadow: 0px 0px 8px -1px rgba(128,128,128,1);
  -moz-box-shadow: 0px 0px 8px -1px rgba(128,128,128,1);
  box-shadow: 0px 0px 8px -1px rgba(128,128,128,1);
  border-radius: 10px;
  background: white;
  width: 35%;
  min-width: 488px;
  padding: 10px 0px;

  .pricing{
    padding: 0px 35px;
  }
  
  @media(max-width: 375px){
    width: 90%;
    min-width: 345px;

    .pricing{
       padding: 0px 15px;
    }
  }
`
const PricingHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  h4{
    color: hsl(225, 20%, 60%);
  }

  div {
    color: #000;
    font-size: 50px;
    font-weight: 800;
    margin-left: auto;
    display: flex;
    align-items: center;

    span{
      padding-left: 5px;
      color: hsl(225, 20%, 60%);
      font-size: 17.5px;
    }
  
    @media(max-width: 375px){
      font-size: 40px;
    }
  
  }

  @media(max-width: 375px){
    h4{
      font-size: 17px;
    }
   
  }
`
const PricingMiddle = styled.div`
  
  h5 {
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
  }
`
const Range = styled.div`
    display: flex;
    justify-content: center;
    
    
  input[type=range]{
      width: 90%;
      height: 10px;
      background: hsl(224, 65%, 95%);
      border-radius: 15px;
      -webkit-appearance: none;
      position: relative; 
      cursor: pointer;
    }

    input[type=range]:focus {
        outline: none; 
    }
    
    input[type=range]::-webkit-slider-thumb{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      -webkit-appearance: none;
      background: hsl(174, 86%, 45%);
      -webkit-box-shadow: 0px 6px 10px -1px rgba(128,128,128,0.75);
      box-shadow: 0px 6px 10px -1px rgba(128,128,128,0.75);
    }

    input[type=range]::-moz-range-thumb{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      -moz-appearance: none;
      background: hsl(174, 86%, 45%);
      -moz-box-shadow: 0px 6px 10px -1px rgba(128,128,128,0.75);
      box-shadow: 0px 6px 10px -1px rgba(128,128,128,0.75);
    }

    input[type=range]::-webkit-slider-runnable-track{
      cursor: pointer;
    }
    
    input[type=range]::-moz-range-track{
      cursor: pointer;
    }
    
    input[type=range]::-moz-range-progress{
      cursor: pointer;
    }
    
  
`

const Billing = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 15px;
  color: hsl(225, 20%, 60%);
  
  .discount_desktop{
    position: absolute;
    right: 5%;
    font-size: 10px;
    background: hsl(14, 92%, 95%);
    color: hsl(15, 100%, 70%);
    padding: 2px 4px;
    border-radius: 10px;

    @media(max-width: 1479px){
      right: 0%;
    }
  }

  .discount_mobile{
    display: none;
    position: absolute;
    right: -0.6%;
    
    font-size: 10px;
    background: hsl(14, 92%, 95%);
    color: hsl(15, 100%, 70%);
    padding: 2px 4px;
    border-radius: 10px;
  }

  @media(max-width: 375px){
    .discount_desktop{
      display: none;
    }

    .discount_mobile{
      display: inline-block;
    }
  }
`


const PricingBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  padding: 0px 35px;
  padding-top: 10px;
  
  -webkit-box-shadow: 0px -2px 2px 0px rgba(128,128,128,0.6);
  -moz-box-shadow: 0px -2px 2px 0px rgba(128,128,128,0.6);
  box-shadow: 0px -1px 2px 0px rgba(128,128,128,0.6);

  button {
    margin-left: auto;
    width: 35%;
    padding: 12px 4px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background: hsl(227, 35%, 25%);
    color: white;
    font-size: 14px;
    font-family: 'Manrope', sans-serif;

    &:focus{
      outline: none;
    }

    @media(max-width: 375px){
      font-size: 12.5px;
    }
  }

  @media(max-width: 375px){
    padding: 0px 15px;
  }
`
const PricingBottom1 = styled.div`
  ul {
    list-style: none;
    padding: 0;

    li{
      font-size: 15px;
      margin-bottom: 9px;
      display: flex;
      align-items: center;
      color: hsl(225, 20%, 60%);

      svg{
        margin-right: 10px;
      }
    }
  }

`

const Switch = styled.div`
  position: relative;
  width: 55px;
  height: 30px;
  margin: 0 20px;
  
  @media(max-width: 375px){
    margin: 0 10px;
  }

  input {
    position: relative;
    z-index: 2;
    margin: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .slider{
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: hsl(223, 50%, 87%);
    border-radius: 25px;
  }

  .slider:before{
    content: '';
    position: absolute;
    left: 5px;
    bottom: 5px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: #fff;
    transition: .4s;
  }

  input:checked + .slider{
    background-color: #2196F3;
  }

  input:checked + .slider:before{
    transform: translateX(25px);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
`


const getPriceAfterDiscount = (price) => {
  const price_u = parseInt(price.replace('$',''))
  const semi_final = price_u * 0.25
  let final = price_u - semi_final
  final = final.toString()
  return '$'+final
}

const App = () => {
  const [value, setValue] = useState(2)
  const [d, setData] = useState(data[2])
  let switch_input = createRef()
   

  return (
    <Container>
      <ContainerBg/>
        <Head>
          <svg width="146" height="145"><g fill="none" fillRule="evenodd" stroke="#CFD8EF"><circle cx="63" cy="82" r="62.5"/><circle cx="105" cy="41" r="40.5"/></g></svg>
          <h2>Simple, traffic-based pricing</h2>
          <p>Sign-up for out 30-day trial. No credit card required.</p>
        </Head>
        <Pricing>
        <div className="pricing">
          <PricingHead>
            <h4>{d.pageviews} PAGEVIEWS</h4>
            <div>{d.pricepmonth}<span>/month</span></div>
          </PricingHead>

          <PricingMiddle>
            <Range>
              <input type="range" max="4" value={value} onInput={(event) => {
                setValue(parseInt(event.target.value)) 
                switch_input.current.checked ? setData({...data[parseInt(event.target.value)], pricepmonth: getPriceAfterDiscount(data[parseInt(event.target.value)].pricepmonth).toString()}) : setData(data[parseInt(event.target.value)])              
              }}></input>
            </Range>  
          
          <Billing>
            <h5>Monthly Billing</h5>
            
            <Switch>
              <input type='checkbox' ref={switch_input} onChange={(event) => {
                event.target.checked ? setData((previous) => {
                return {...previous, pricepmonth: getPriceAfterDiscount(previous.pricepmonth).toString()}
              }) :  setData((previous) => {
                return {...previous, pricepmonth: data[value].pricepmonth}
              })
              }}/>
              <div className='slider'></div>
            </Switch>
            <h5>Yearly Billing</h5>
            <div className="discount_desktop">25% discount</div>
            <div className="discount_mobile">-25%</div>
          </Billing>
          
        </PricingMiddle>
        </div>
        

        <PricingBottom>
          <PricingBottom1>
            <ul>
              <li><svg  width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>Unlimited websites</li>
              <li><svg  width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>100% data ownership</li>
              <li><svg  width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>Email reports</li>
            </ul>
          </PricingBottom1>

          <button>Start my trial</button>


        </PricingBottom>
        

      </Pricing>

    </Container>
      
      

    
  );
}

export default App;
