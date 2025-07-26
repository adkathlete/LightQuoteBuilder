import React from "react";
import {useState,useEffect,useLayoutEffect} from 'react';

const ActionButton = (props)=>{
  //props:{variant:[TYPE], onClick:callBack}

  const [click,setClick]=useState(false);

  //Click the button
  useEffect(()=>{
    if(click){
      let timer=setTimeout(()=>setClick(false), 150);

      return ()=>clearInterval(timer);
    }
  },[click]);

  //Create new variant
  if(props.variant==='NEW'){
    return(
      <div className={`absolute bottom-6 right-0 flex flex-row items-center justify-center w-full h-16 ${props.highlighted?("animate-pulse"):("")}`}>
        <div className={`flex flex-row h-16 items-center justify-end ${props.isMobile?("px-4"):("")}`} style={{width:`${props.isMobile?("100%"):("90%")}`}}>
          <button className={`flex flex-col justify-center items-center text-white border-4 ${props.highlighted?("border-c2"):("border-c2-dark")} w-14 h-14 rounded-full shadow-xl z-40`} style={{backgroundColor:"#38bdf8"}} onClick={()=>props.onClick()}>
            <svg className={`h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </button>
        </div>
      </div>
    )
  }

  //Save new variant
  if(props.variant==='SAVE'){
    return(
      <div className={`absolute bottom-6 right-0 flex flex-row items-center justify-center w-full h-16 ${props.highlighted?("animate-pulse"):("")}`}>
        <div className={`flex flex-row h-16 items-center justify-end ${props.isMobile?("px-4"):("")}`} style={{width:`${props.isMobile?("100%"):("90%")}`}}>
          <button className={`flex flex-col justify-center items-center text-c2-highlight border-2 ${props.highlighted?("border-c2"):("border-gray-800 bg-gray-900")} ${click?"w-12 h-12":"w-14 h-14"} rounded-full shadow-xl z-40 focus:outline-none focus:ring-none transition-all duration-100 ease-in-out`} style={{transform:click?'rotate(1deg)':""}} onClick={()=>{props.onClick(); setClick(true);}}>
            <svg className={`h-7 w-7`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path>
            </svg>
          </button>
        </div>
      </div>
    )
  }

  //Cancle new variant
  if(props.variant==='CANCEL'){
    return (
      <div className={`absolute bottom-6 right-0 flex flex-row items-center justify-center w-full h-16 ${props.highlighted?("animate-pulse"):("")}`}>
        <div className={`flex flex-row h-16 items-center justify-end ${props.isMobile?("px-4"):("")}`} style={{width:`${props.isMobile?("100%"):("90%")}`}}>
          <button className={`flex flex-col justify-center items-center opacity-95 bg-shades-light text-white border-4 border-shades-light w-14 h-14 rounded-full shadow-xl z-40`} onClick={()=>props.onClick()}>
            <svg className={`h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    )
  }

  //Save new workflow
  if(props.variant==='SAVE-WORKFLOW'){
    return (
      <div className={`absolute bottom-6 right-0 flex flex-row items-center justify-center w-full h-16 ${props.highlighted?("animate-pulse"):("")}`}>
        <div className={`flex flex-row h-16 items-center justify-end ${props.isMobile?("px-4"):("")}`} style={{width:`${props.isMobile?("100%"):("90%")}`}}>
          <button className={`flex flex-col justify-center items-center text-white border-4 ${props.highlighted?("border-c2"):("border-green-600")} w-14 h-14 rounded-full shadow-xl z-40`} style={{backgroundColor:"#34d399"}} onClick={()=>props.onClick()}>
            <svg className={`h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
          </button>
        </div>
      </div>

    )
  }

  //Clone workflow
  if(props.variant==='CLONE'){
    return(
      <div className={`absolute bottom-6 right-0 flex flex-row items-center justify-center w-full h-16 ${props.highlighted?("animate-pulse"):("")}`}>
        <div className={`flex flex-row h-16 items-center justify-end ${props.isMobile?("px-4"):("")}`} style={{width:`${props.isMobile?("100%"):("90%")}`}}>
          <button className={`flex flex-col justify-center items-center text-white border-4 ${props.highlighted?("border-c2"):("border-c2-dark")} w-14 h-14 rounded-full shadow-xl z-40`} style={{backgroundColor:"#38bdf8"}} onClick={()=>props.onClick()}>
            <svg className={`h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
            </svg>
          </button>
        </div>
      </div>
    )
  }

  //Clone workflow
  if(props.variant==='ZOOM-UP'){
    return(
      <div className={`absolute bottom-6 right-0 flex flex-row items-center justify-center w-full h-16 ${props.highlighted?("animate-pulse"):("")}`}>
        <div className={`flex flex-row h-16 items-center justify-end ${props.isMobile?("px-4"):("")}`} style={{width:`${props.isMobile?("100%"):("90%")}`}}>
          <button className={`flex flex-col justify-center items-center text-c2-highlight border-2 ${props.highlighted?("border-c2"):("border-gray-800 bg-gray-900")} ${click?"w-12 h-12":"w-14 h-14"} rounded-full shadow-xl z-40 focus:outline-none focus:ring-none transition-all duration-100 ease-in-out`} style={{transform:click?'rotate(1deg)':""}} onClick={()=>{props.onClick(); setClick(true);}}>
            <svg className={`h-7 w-7`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
            </svg>
          </button>
        </div>
      </div>
    )
  }

  //Right Arrow workflow
  if(props.variant==='RIGHT'){
    return(
      <div className={`absolute bottom-6 right-0 flex flex-row items-center justify-center w-full h-16 ${props.highlighted?("animate-pulse"):("")}`}>
        <div className={`flex flex-row h-16 items-center justify-end ${props.isMobile?("px-4"):("")}`} style={{width:`${props.isMobile?("100%"):("90%")}`}}>
          <button className={`flex flex-col justify-center items-center text-white border-4 ${props.highlighted?("border-c2"):("border-c2-dark")} w-14 h-14 rounded-full shadow-xl z-40`} style={{backgroundColor:"#38bdf8"}} onClick={()=>props.onClick()}>
            <svg className={`h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
            </svg>
          </button>
        </div>
      </div>
    )
  }

  //Cancle new variant
  if(props.variant==='UPDATING'){
    return (
      <div className={`absolute bottom-6 right-0 flex flex-row items-center justify-center w-full h-16 ${props.highlighted?("animate-pulse"):("")}`}>
        <div className={`flex flex-row h-16 items-center justify-end ${props.isMobile?("px-4"):("")}`} style={{width:`${props.isMobile?("100%"):("90%")}`}}>
        <button className={`flex flex-col justify-center items-center opacity-95 bg-shades-light text-white border-4 border-shades-light w-14 h-14 rounded-full shadow-xl z-40 animate-pulse`} onClick={()=>props.onClick()}>
          <svg className={`h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
        </button>
        </div>
      </div>

    )
  }

  return(<div/>);
}

export default ActionButton
