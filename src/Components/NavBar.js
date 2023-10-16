import React, {Component , useContext}from 'react';
import styled from 'styled-components';
import {navItems} from './NavBarItems';
import{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
import {FormattedMessage, FormattedDate, FormattedNumber, FormattedPlural, FormattedTime} from 'react-intl';
import {Context} from "./Wapper";
import DropdownTrackYourShipment from './DropdownTrackYourShipment';


const NavBar = () => {
    // function change(option){
    //     localStorage.setItem('lang',this.option.target.value);
    //     window.location.reload();
    // }
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
    const context = useContext(Context);
    const [dropdown, setDropdown] = useState(false);
    
    const [inputText, setInputText] = useState("");

   

  let inputHandler = (e) => {
    
    var num = e.target.value;
    setInputText(num);
  };
console.log(inputText);
  return (
    
    <Container>
    <Inner>
        <Logo>
        { context.locale==='en' ? <img src='./BostaLogo.png' alt=""></img> : <img src='./BostaLogoArabic.png' alt=""></img> }

          
        </Logo>

        
        <CenterContainer>
                <ul >
                {navItems.map((item) => {
                    if (item.title === "Products") {
                    return (
                        <li
                        key={item.id}
                        
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                        >
                        <Link to={item.path}>
                            
                            <FormattedMessage id={item.title} />
                            </Link>
                        {dropdown && <Dropdown />}
                        </li>
                    );
                    }
                    return (
                    <li key={item.id} >
                        <Link to={item.path}>
                        <FormattedMessage id={item.title} />
                            
                        </Link>
                    </li>
                    );
                })}
                </ul>
                
           
        </CenterContainer>
        <RightContainer>
            <TrackShipmentBtn className='mt-10'>
            
            <div className="relative mt-2">
                <button onClick={handleOpen}>
                <p> <FormattedMessage id="TrackShipment" /></p>
                </button>
               
                {open ? (
                    <ul className="absolute list-none border mx-0 my-[5px] p-0 border-solid border-[grey] w-[260px] z-[4] bg-white">
                    <li className="m-2 ">
                    <p> <FormattedMessage id="TrackShipment" /></p>
                    <DropdownTrackYourShipment />    
                    </li>
                    <li className="menu-item">
                   
                    </li>
                    </ul>
                ) : null}
               
                </div>
                
            </TrackShipmentBtn>
            <LanguageChangingBtn>
                <nav className='container mb-4 mt-4'>
                    
                      
                        <div >
                            {/* <select className='custom-select pull-right'  value={lang}>
                                <option value="en">en</option>
                                <option value="ar">عربي</option>
                            </select> */}
                            <select value = {context.locale} onChange={context.selectLanguage}>
                            <option value= 'ar'>Ar</option>
                            <option value= 'en'>ENG</option>
                            
                            </select>
                        </div>
                    

                </nav>
            </LanguageChangingBtn>
            <SigninBtn>
            <FormattedMessage id = "signin.btn" defaultMessage="Sign In" />
            </SigninBtn>
            <SignupBtn className='text-[#E30613]'>
            <FormattedMessage id = "signup.btn" defaultMessage="Sign Up" /> 
            </SignupBtn>
        </RightContainer>
    </Inner>
    </Container>
  )
}
const Container =styled.div`
    width: 100%;
    height:100px;
    background-color: white;
    display: flex;
    align-items: center;
    position: relative;
    //flex-shrink: 0;
    border: 1px solid #D9DDE4;
   
   
`; 
const Inner =styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`; 
const Logo =styled.div`
     margin-left: 4%;

    cursor: pointer;
     img{
        width: 120px;
        margin-top: 10px;

     }
`; 
const CenterContainer =styled.div`
            
            display: inline-flex;
        height: 24px;
        padding-right: 0px;
        align-items: flex-start;
        gap: 40px;
        flex-shrink: 0;
    flex:1;
    
    margin-left: 6%;
    line-height: 20px;
    ul {
    display: inline-flex;
    list-style: none;
    z-index: 4;
    background-color: white;
    }
    li {
        width: 120px;
       
        padding: 10px;
    };
    li a{
        text-decoration: none;
        color:black;
       font-size: large;
        font-family: 'Cairo', sans-serif;
    }

  
`; 
const RightContainer =styled.div`
    width: 35%;
    display:flex;
    margin-right: 4%;
   margin-top: 0.5%; 
   color:black;
       font-size: large;
        font-family: 'Cairo', sans-serif;
`; 
const SignupBtn =styled.div`
    border: 2px solid #e30613;
    padding: 17px 32px;
    border-radius: 50px;
    display: flex;
    //padding: 16px 32.634px 17px 33px;
    margin-right: 8%;
   p{
    color: #E30613;
       font-size: large;
        font-family: 'Cairo', sans-serif;
   }
    
   
`; 
const TrackShipmentBtn =styled.div`
     /* display: flex;
    padding: 0px 28.99px 0px 29px;
    justify-content: center;
    align-items: center;
    gap: -0.362px;
    flex-shrink: 0; 
    margin-right: auto; */
    margin-right: 8%;
    margin-top:2%;
    p{
    color: #E30613;
       font-size: large;
        font-family: 'Cairo', sans-serif;

   }
`;
const LanguageChangingBtn =styled.div`
        display: inline-flex;
        
        padding-right: 0px;
        align-items: center;
        gap: 6.682px;
        flex-shrink: 0;
        color: #E30613;
   
   font-size: large;
    font-family: 'Cairo', sans-serif;
`;
const SigninBtn =styled.div`
display: flex;

flex-direction: column;
justify-content: center;
flex-shrink: 0;
margin-left:auto;
margin-right: auto;

`;


export default NavBar