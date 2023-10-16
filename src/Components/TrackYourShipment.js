import React from 'react'
import NavBar from './NavBar'

import styled from 'styled-components';

import {FormattedMessage, FormattedDate, FormattedNumber, FormattedPlural, FormattedTime} from 'react-intl';
import {Context} from "./Wapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItems } from "../features/itemSlice";
import moment from "moment";
import ProgessBar from './ProgressBar';




function TrackYourShipment() {
    const dispatch = useDispatch();
    const { loading, items}  = useSelector((state) => state.items);
    const Steps=[
        "created",
        "etslmt men el tager",
        "out for taslim",
        "delivered"
    ];
    useEffect(() => {
      dispatch(getItems());
    }, [dispatch]);

  return (
    <Container>
        <NavBar/>
    <div>
       
        <TopContainer>
            <div className='grid grid-cols-4 divide-x '>
                <div>
             
                    <p className=' text-gray-500'>
                    <FormattedMessage id = "ShipmentNumber" values = {{ShipmentNumber: items.TrackingNumber}} defaultMessage="Shipment number" />
                    <br/>
                    </p>
                    <p  className={items.CurrentStatus?.state === 'DELIVERED_TO_SENDER' ? "text-green-600" : items.CurrentStatus?.state === 'DELIVERED'? "text-green-600":"text-red-600" }>
                    {items.CurrentStatus?.state==="CANCELLED" ? <FormattedMessage id="CANCELLED"/>
                    : items.CurrentStatus?.state==="DELIVERED_TO_SENDER" ? <FormattedMessage id="DELIVERED_TO_SENDER"/> 
                    : items.CurrentStatus?.state==="DELIVERED" ?<FormattedMessage id="DELIVERED"/>
                    : null
                             
                             }
                    
                        </p>
                </div>
                <div>
                    <p className=' text-gray-500'>
                    <FormattedMessage id = "LastUpdate"  />
                    <br/>
                    
                  
                          
                     </p>   
                     <p>
                     
                     <FormattedDate
                     value={moment(items.CurrentStatus?.timestamp).utc().format('dddd MM/DD/YYYY, h:mm a') }
                     year = 'numeric'
                    month= 'numeric'
                    day = 'numeric'
                    weekday = 'long'
                     hour="numeric"
                     minute="numeric"
                     />
                    </p>
                </div>
                <div>
                    <p className=' text-gray-500'> 
                    <FormattedMessage id = "VendorName"/>
                    <br/>
                    </p>
                        <p>{items?.provider}</p>
                    
                </div>
                <div>
                    <p className=' text-gray-500'>
                    <FormattedMessage id = "DeliveryTime"/>
                    <br/>
                    </p>
                   
                    {moment(items?.PromisedDate).utc().format('MM/DD/YYYY')}
                   
                  
                </div>
            </div>
        </TopContainer>
        <StatusBar>


            <div className="container horizontal mt-5 ">
               
            </div>
              <ProgessBar/>

        </StatusBar>
    </div>


    <Grid >
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 ">
        <div className='flex flex-col  mr-3'> 
        <p  className='mb-4 font-Cairo'>
        <FormattedMessage className='mb-4 ' id='ShipmentLocation'/>
        </p>
          
        <LeftContainer>
            <p>امبابة شارع طلعت حرب مدينة العمال بجوار 
                البرنس منزل 17 بلوك 33 Cairo</p>
        </LeftContainer>  
        <LeftContainer2>
            <p><FormattedMessage id='ask'/></p>
            <br/>
            <button className='rounded-[15px] bg-[#E30613] text-[white] text-center no-underline inline-block text-base cursor-pointer duration-[0.4s] mx-0.5 my-1 px-10 py-[12px] border-[none] hover:blur-sm hover:brightness-50 hover:sepia hover:contrast-100 hover:hue-rotate-30 hover:invert-0 hover:opacity-5 hover:saturate-150 hover:text-orange-400 hover:text-xl disabled:w-3/12 disabled:text-[color:var(--some-color)] disabled:text-[1em] md:inset-x-1/4 md:inset-y-auto supports-[display:grid]:grid supports-[display:grid]:col-span-1 mt-2'><FormattedMessage id='askBtn'/></button>
           
            <img src='./feature.png' alt='' className='w-40 h-25 absolute inset-y-0 right-0  '></img>
           
           
        </LeftContainer2> 
        </div>  
        <div class="col-span-2">
        <p  className='mb-4 font-Cairo'>
        <FormattedMessage id='ShipmentDetails'/>
        </p>
            <RightContainer>
            
            <div className='w-full' >
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                <thead class="text-base  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                        <FormattedMessage id='branch'/>
                            
                        </th>
                        <th scope="col" class="px-6 py-3">
                        <FormattedMessage id='Date'/>
                            
                        </th>
                        <th scope="col" class="px-6 py-3">
                        <FormattedMessage id='Time'/>
                           
                        </th>
                        <th scope="col" class="px-6 py-3">
                        <FormattedMessage id='Details'/>
                           
                        </th>
                    </tr>
                </thead>
                <tbody>
                {items.TransitEvents?.map((udata)=>(
                             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-900"> 
                             <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                             
                             
                             {udata.hub}
                             </th>
                             
                             <td class="px-6 py-4">
                             {moment(udata.timestamp).utc().format('MM/DD/YYYY')}
                             
                             </td>
                             <td class="px-6 py-4">
                             {moment(udata.timestamp).utc().format('h:mm a')}
                             
                            
                             </td>
                             <td class="px-6 py-4">
                             <FormattedMessage id={udata.state }/>
                             <br/>
                            <p className='text-xs text-orange-600'>

                           
                             {udata.exceptionCode==1 ? <FormattedMessage id="1ex"/>
                             : udata.exceptionCode==3 ? <FormattedMessage id="3ex"/> 
                             : udata.exceptionCode==7 ?<FormattedMessage id="7ex"/>
                             : null
                             
                             }
                              </p>
                             </td>
                         </tr>
                            ))}
                   
                    
                </tbody>
            </table>
        </div>
        </RightContainer>
    </div>
    </div>
</Grid>
</Container>
  )
}
const Container =styled.div``;
const Grid =styled.div`
margin: 3% auto 0px auto;
width: 90%;
`;
const TopContainer =styled.div`
    margin: 3% auto 0px auto;
    position: relative;
    background: #ffffff;
    border: 1px solid #D9DDE4;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    //border-radius: 4px;
    padding: 24px 32px 32px 32px;
    float:top;
    width: 90%;
    color:black;
       font-size: large;
        font-family: 'Cairo', sans-serif;
    
`;

const LeftContainer2 =styled.div`
    position: relative;
    background: #ffffff;
    border: 1px solid #D9DDE4;
    border-radius: 4px;
    padding: 24px 32px 32px 32px;
    //margin: 0 1.5% 24px 1.5%;
    //float: left;
   // width: 31%;
   font-family: 'Cairo', sans-serif;

    
`;
const LeftContainer =styled.div`
    position: relative;
    background: #ffffff;
    border: 1px solid #D9DDE4;
    border-radius: 4px;
    padding: 24px 32px 32px 32px;
    margin: 0 0 24px 0;
   // float: left;
    background-color:#f8fafc;
    color:black;
       font-size: large;
        font-family: 'Cairo', sans-serif;
    //width: 31%;
`;


const RightContainer =styled.div`
   // position: relative;
    background: #ffffff;
    border: 1px solid #D9DDE4;
    border-radius: 4px;
    padding: 24px 32px 32px 32px;
        color:black;
       font-size: large;
        font-family: 'Cairo', sans-serif;
    //margin: 0 2% 24px 1.5%;
  //  float: right;
   // width: 62%;

`;
const StatusBar =styled.div`
    margin: 0 auto 24px auto;
    position: relative;
    background: #ffffff;
    border: 1px solid #D9DDE4;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    //border-radius: 0px;
    padding: 24px 32px 32px 32px;
    float:top;
    width: 90%;
    color:black;
       font-size: large;
        font-family: 'Cairo', sans-serif;
    
`;
export default TrackYourShipment