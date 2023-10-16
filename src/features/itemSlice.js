import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useEffect, useState} from "react";


const num= 7234258

export const getItems=createAsyncThunk("item/getItems", async()=>{
let url="https://tracking.bosta.co/shipments/track/"

    try{
        //part 2.1
        // bet3mal dispatchg({type:'item/getItems/pending', payload:undefined})
        
        const res =await fetch(url.concat(num))
        const data = await res.json();
       
        return data;
          //part 2.2
        // bet3mal dispatchg({type:'item/getItems/fulfilled', payload:data})
    }
    catch(error){
    console.log(error);
        //part 2.3 
        // bet3mal dispatchg({type:'item/getItems/rejected', payload:error})
    }
    
});
//part 1 getItems:1{pending,fulfilled,rejected}
//getItems -> createAsyncThunk -> create 3 types of actions
//pending createAction('item/getItems/pending',(payload)=>{return payload})
//fulfilled createAction('item/getItems/fulfilled',(payload)=>{return payload})
//rejected createAction('item/getItems/rejected',(payload)=>{return payload})


//part 2

const itemSlice = createSlice({
    name:"item",
    initialState:{
        items:[],
        loading:false,
    },
    extraReducers:{
        //lesa bahawl atsl biha 
        [getItems.pending]:(state,action)=>{
            console.log(action);
            state.loading=true;
        },
        // 5alas el data ba2t ma3aya
        [getItems.fulfilled]:(state,action)=>{
            console.log(action);
            state.loading=false;
            state.items=action.payload;
        },
        // hasal fail 
        [getItems.rejected]:(state,action)=>{
            console.log(action);
            state.loading=false;
            
        },
    }
});


export default itemSlice.reducer;