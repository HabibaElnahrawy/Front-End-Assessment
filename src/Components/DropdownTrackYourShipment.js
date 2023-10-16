import React from 'react'
import TextField from "@mui/material/TextField";


import {useEffect, useState} from "react";
import styled from 'styled-components';
import ItemSlice from '../features/itemSlice';
const  numnb =7234258;
const DropdownTrackYourShipment =()=> {

  



    const [inputText, setInputText] = useState(1);
    
    let inputHandler = (e) => {
      
      var num = e.target.value;
      
        if (num.length>0 )
        {
            setInputText(num);
        }

        
        
       
    };
   

  console.log(inputText);
    return (
        <SearchBar>
        
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
       
<div className='w-[170px] col-span-2 pr-2 '>
      
                <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        
                        variant="outlined"
                        fullWidth
                        label="Search"
                   />
                 </div> 
        <div className='ml-5'>
        <SearchIcon>
            <img src='./searchIcon.png' alt=''/>
            </SearchIcon>
           
            </div>
         </div>
        </SearchBar>
       
        
              
    )
}

const SearchBar =styled.div`
 // height: 100%;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;
 

`;
const SearchIcon =styled.div`
background-color: #E30613;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
  }
`;

export default DropdownTrackYourShipment
