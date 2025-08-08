import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

import Alert from '../Shared/Alert.jsx'
import LightQuoteBuilder from "../LightQuoteBuilder/LightQuoteBuilder.jsx"

import Foundation from "../Shared/Annimations/Foundation.jsx"

//Initialize router and routes to be used
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Import Axios
import axios from 'axios';

//Initialize axios and point it at our GraphQL Apollo Server Endpoint
const APIGateway = axios.create({
  //baseURL:'https://www.starlightapigateway.com/graphql',
  baseURL:'http://localhost:9989/graphql',
});

function App() {

  //---------------------------------STATE--------------------------------------
  //State variable to flag UI layout for Mobile vs. Desktop
  const [isMobile,setIsMobile] = useState(false);

  //Initialize gloabl Light user object
  const [user,setUser] = useState(null);

  //Initialize Loading Screen to Load the User and init app state so the app only routes to the auth or unauth experiences
  const [foundationComplete,setFoundationComplete]=useState(null);

  //----------------TEST USER SETTINGS--------------
  //Show an alert from the homescreen globally if needed
  const [alert,setAlert] = useState({show:false, autoCloseDelayMS:null, message:"", detail:"", variant:""});

  //Show an error from the homescreen globally if needed
  const [error,setError] = useState({show:false, autoCloseDelayMS:null, message:"", detail:"", variant:"error"});

  //------------------------------CALLBACK FUNCTIONS----------------------------
  const handleAlert = (message,detail,variant,autoCloseDelayMS) =>{
    try{
      setAlert({show:true, autoCloseDelayMS:Number.parseInt(autoCloseDelayMS), message:message, detail:detail, variant:variant})
    }catch(err){
      console.log(`APP: Error Setting Alert, ${err}`);
    }
  }

  const handleError = (message,detail,variant,autoCloseDelayMS) =>{
    try{
      setError({show:true, autoCloseDelayMS:Number.parseInt(autoCloseDelayMS), message:message, detail:detail, variant:"error"});
    }catch(err){
      console.log(`APP: Error Setting Error, ${err}`);
    }
  }

  const handleAlertMessageClose = () =>{
    //Set show to false
    setAlert({show:false, message:"", detail:"", variant:"alert"});
  }

  const handleErrorMessageClose = () =>{
    //Set show to false
    setError({show:false, message:"", detail:"", variant:"error"});
  }

  //----------------------------APPLICATION------------------------------------

  return (
    <div id={'app'} className='relative flex flex-col flex-shrink-0 h-full w-full items-center justify-start bg-black'>
      <BrowserRouter>
        <div className='flex flex-col flex-shrink-0 h-screen w-full items-center justify-center bg-white'>
          {alert.show===true?(
            <Alert variant={alert.variant} show={alert.show} message={alert.message} detail={alert.detail} autoCloseDelayMS={alert.autoCloseDelayMS} isMobile={isMobile} onClose={handleAlertMessageClose}/>
          ):(
            <div className='hidden'/>
          )}
          {error.show===true?(
            <Alert variant={"error"} show={error.show} message={error.message} detail={error.detail} autoCloseDelayMS={alert.autoCloseDelayMS} isMobile={isMobile} onClose={handleErrorMessageClose} />
          ):(
            <div className='hidden'/>
          )}
          <Routes>
            <Route path="/" element={
              <LightQuoteBuilder
                onAlert={handleAlert}
                onError={handleError}
              />}/>
            <Route render={() => <Navigate replace to="/" />}/>
          </Routes>
        </div>
      </BrowserRouter>
      {/*Main App Routes*/}
      {/*Initialize the App Foundation Animation*/}
      {!foundationComplete?(
        <div className='absolute top-0 left-0 flex flex-col w-full h-full items-center justify-center bg-black' style={{zIndex:100}}>
          <div className='flex flex-col items-center justify-center w-full h-96'>
            <Foundation show={!foundationComplete} flash={false} foundationComplete={()=>{setFoundationComplete(true);}}/>
          </div>
        </div>
      ):(
        <div className='hidden'/>
      )}
    </div>
  )
}

export default App
