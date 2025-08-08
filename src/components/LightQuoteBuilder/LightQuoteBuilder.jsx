import React from 'react';
import {useState, useEffect, useLayoutEffect} from 'react';

import {
  NavLink,
  useLocation
} from "react-router-dom";

const ENERGY_COLORS = [
  {id:"0",color:"#0ea5e9", colorString:"blue-400" ,text:"General", emoji:"🎯",active:true, show:true},
  {id:"1",color:"#8b5cf6", colorString:"indigo-400", text:"Work", emoji:"💻", active:true, show:false},
  {id:"3",color:"#ec4899", colorString:"pink-400", text:"Emotional Health", emoji:"🧘‍♀️", active:true, show:false},
  {id:"5",color:"#22c55e", colorString:"yellow-400", text:"Friends", emoji:"🥳", active:true, show:false},
  {id:"6",color:"#22d3ee", colorString:"red-400", text:"Family", emoji:"🏡", active:true, show:false},
  {id:"7",color:"#fde047", colorString:"cyan-400", text:"Hobbies", emoji:"🏔", active:true, show:false},
  {id:"8",color:"#5eead4", colorString:"green-400", text:"School", emoji:"📚", active:true, show:false},
  {id:"9",color:"#e11d48", colorString:"red-800", text:"Love", emoji:"<3", active:true, show:false},
];

//Light Project Timeline
const LightQuoteBuilder=()=>{

  const LAYER_IMG_PATHS=[
    "./photos/verkada/layer1.png",
    "./photos/verkada/layer2.png",
    "./photos/verkada/layer3.png",
    "./photos/verkada/layer4.png",
    "./photos/verkada/layer5.png",
    "./photos/verkada/layer6.png",
  ]

  const PLATFORM_IMG_PATHS=[
    "./photos/verkada/command.png",
    "./photos/verkada/connect.png",
  ]

  const LAYERS=[0,0,0,0,0,0];
  const COSTS=[5000,8000,10000,3000,5000,6000];

  const [cells,setCells]=useState(null)
  const [layers,setLayers]=useState(LAYERS);

  const [activeLayerIndex,setActiveLayerIndex]=useState(null);
  const [activeSolutionIndex,setActiveSolutionIndex]=useState(null);
  const [showQuote,setShowQuote]=useState(true);
  const [showTimeline,setShowTimeline]=useState(false);


  useEffect(()=>{
    initializeCells();
  },[])

  const initializeCells=()=>{
    let GRID_SIZE=40;
    let cells=[];

    for(let row=0; row<GRID_SIZE; row++){
      let row =[];

      for(let cell=0; cell<GRID_SIZE; cell++){
        let cell = {
          layers:{},
        }

        row.push(cell);
      }
      cells.push(row);
    }

    setCells(cells)
  }


  const updateCellWithLayer=(curCells,rowIndex,cellIndex,layerIndex)=>{
    let newCells=[...cells];
    let newLayers=[...layers];

    if(newCells[rowIndex][cellIndex].layers[layerIndex]){
      delete newCells[rowIndex][cellIndex].layers[layerIndex];
      newLayers[layerIndex]--
    }else{
      newCells[rowIndex][cellIndex].layers[layerIndex]=true;
      newLayers[layerIndex]++
    }

    setLayers(newLayers);
    setCells(newCells)
  }

  return(
    <div className='relative flex flex-col h-full w-full items-center justify-center bg-white'>
      <div className='relative flex flex-col bg-gray-300 border-gray-200 shadow-lg rounded-xl border border-gray-200 overflow-hidden' style={{height:"40rem", width:"40rem"}}>
        <img className='flex flex-col h-full w-full' src={"./photos/verkada/floorplan.png"}/>

        {/*Cell Grid*/}
        <div className='absolute top-0 left-0 flex flex-col h-full w-full items-center justify-start'>
          {cells&&cells.map((row,rowIndex)=>{

            return(
              <div key={rowIndex} className='flex flex-row flex-1 w-full items-center justify-start'>
                {row.map((cell,cellIndex)=>{
                  let childElem=cell.layers[activeLayerIndex];
                  let activeGrid=activeLayerIndex!==null;
                  return(
                    <div key={cellIndex} className={`flex flex-col flex-1 h-full items-center justify-center rounded-sm ${activeGrid?"hover:bg-blue-100":""}`} onClick={()=>updateCellWithLayer(cells,rowIndex,cellIndex,activeLayerIndex)}>
                      {childElem && activeLayerIndex!==null?(
                        <div className='flex flex-col h-4 w-4 rounded-full animate-pulse' style={{backgroundColor:`${ENERGY_COLORS[activeLayerIndex].color}`}}>
                        </div>
                      ):(
                        <div className='hidden'/>
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      {/*Timeline Pane*/}
      <div className={`absolute bottom-0 left-0 w-full ${showTimeline?"h-full":"h-0 opacity-0"} transition-all duration-300 ease-in-out`}>
        <div className='relative flex flex-col h-full w-full items-center justify-center'>
          <div className='absolute top-0 left-0 h-full w-full bg-gray-100' style={{opacity:"95%"}}>
          </div>
          {showTimeline?(
            <div className='absolute top-0 left-0 flex flex-row h-full w-full items-center justify-center'>

              <div className='flex flex-col h-4/5 w-3/5 p-4 items-center justify-around border rounded-xl'>
                <div className='flex flex-row h-10 w-full items-center justify-start'>
                  <div className='shrink-0 w-28'>
                  </div>
                  {["Q1","Q2","Q3","Q4"].map((quarter,quarterIndex)=>{
                    return(
                      <div key={quarterIndex} className='flex flex-row h-10 flex-1 items-center justify-center border-r border-l font-bold text-3xl'>
                        {String(quarter)}
                      </div>
                    )
                  })}
                </div>
                {LAYERS.map((layer,layerIndex)=>{
                  let active=layerIndex===activeLayerIndex
                  return(
                    <div key={layerIndex} className='flex flex-row w-full items-center justify-start'>
                        <div className='flex flex-col h-24 w-28 items-center justify-center border-r font-bold px-4'>
                          <div className='flex flex-col h-12 w-12 rounded-lg shadow-xl overflow-hidden' onMouseEnter={()=>setActiveLayerIndex(layerIndex)} onMouseLeave={()=>setActiveLayerIndex(null)}>
                            <img className='flex flex-col h-12 w-12' src={LAYER_IMG_PATHS[layerIndex]}/>
                          </div>
                        </div>

                        <div className={`flex flex-col h-2 ml-4 rounded-full ${active?"bg-gray-800":"bg-white"} border shadow-lg transition-all duration-300 ease-in-out`} style={{width:`${Math.random()*70+20}%`}}>
                        </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ):(
            <div className='hidden'/>
          )}
        </div>
      </div>

      {/*LHS Tile List*/}
      <div className='absolute top-0 left-0 flex flex-col items-center justify-start h-full w-28 border-r bg-white'>
        <div className='relative flex flex-col h-full w-full py-4 items-center justify-start'>
          {/*Device Layers*/}
          <div className='flex flex-row w-full px-2 items-center justify-center text-gray-800 font-bold text-sm text-center'>
            {String("Products")}
          </div>
          {LAYERS.map((entry,index)=>{
            let active=index===activeLayerIndex;
            return(
              <div key={index} className={`flex flex-col my-4 ${active?"h-14 w-14":"h-12 w-12"} items-center justify-center rounded-xl shadow-lg border overflow-hidden transition-all duration-300 ease-in-out`} onMouseEnter={()=>setActiveLayerIndex(index)} onClick={()=>{activeLayerIndex===null?setActiveLayerIndex(index):setActiveLayerIndex(null)}} style={{transform:`translate(${active?"0.5rem":"0rem"},${active?"-0.5rem":"0rem"})`}}>
                <img className='flex flex-col h-full w-full' src={LAYER_IMG_PATHS[index]}/>
              </div>
            )
          })}

          <div className='flex flex-col h-0.5 w-2/3 my-4 rounded-full bg-gray-200'>
          </div>

          {/*Platform Layers*/}
          <div className='flex flex-row w-full px-2 items-center justify-center text-gray-800 font-bold text-sm text-lcentereft'>
            {String("Platforms")}
          </div>
          {[0,0,].map((entry,index)=>{
            let active=activeSolutionIndex===index;
            return(
              <div key={index} draggable className={`flex flex-col my-4 ${active?"h-14 w-14":"h-12 w-12"} items-center justify-center rounded-xl bg-white shadow-lg overflow-hidden border transition-all duration-300 ease-in-out`} onMouseEnter={()=>setActiveSolutionIndex(index)} onMouseLeave={()=>setActiveSolutionIndex(null)} style={{transform:`translate(${active?"0.5rem":"0rem"},${active?"-0.5rem":"0rem"})`}}>
                <img className='flex flex-col h-full w-full' src={PLATFORM_IMG_PATHS[index]}/>
              </div>
            )
          })}

          {/*Show Quote Button*/}
          <div className='flex flex-col flex-1 w-full items-center justify-end'>
            <div className='flex flex-col items-center justify-center rounded-xl h-10 w-10 shadow-xl' onClick={()=>setShowQuote((showQuote)=>!showQuote)}>
              {String("#")}
            </div> 
            <div className='flex flex-col items-center justify-center rounded-xl h-10 w-10 shadow-xl' onClick={()=>setShowTimeline((showTimeline)=>!showTimeline)}>
              {String("=")}
            </div> 
          </div>

          {/*Product Tile List*/}
          <div className={`absolute top-0 right-0 h-full ${activeLayerIndex!==null?"w-28 border-r border-l":"w-0 opacity-0"} bg-white transtion-all duration-300 ease-in-out`} style={{transform:"translate(100%,0%)"}}>
            {activeLayerIndex!==null?(
              <div className='flex flex-col py-4 items-center justify-start'>
                {[0,0,0,0,0,0,0,0].map((product,productIndex)=>{

                  return(
                    <div key={productIndex} className='flex flex-col h-12 w-12 my-4 items-center justify-center rounded-xl bg-white border shadow-lg'>
                      {String(100+productIndex+100*activeLayerIndex)}
                    </div>
                  )
                })}
              </div>
            ):(
              <div className='hidden'/>
            )}
          </div>
        </div>
      </div>

      {/*Quote Pane*/}
      <div className={`absolute top-0 right-0 h-full ${showQuote?"w-1/4 border-l bg-white":"w-0 opacity-0"} transtion-all duration-300 ease-in-out`}>
        {showQuote?(
          <div className='flex flex-col h-full w-full px-2 py-4 items-center justify-start'>
            <div className='font-bold text-3xl'>
              {String("Verkada Quote")}
            </div>
            <div className='flex flex-row items-center justify-center font-bold rounded-full bg-gray-800 text-white px-4 py-2'>
              {String("ABC Company")}
            </div>
            <div className='flex flex-row items-center justify-between text-sm'>
              {String("Quote ID: 54325262")}
            </div>

            {/*SKU List*/}
            <div className='flex flex-col flex-1 w-full mt-4 px-4 text-lg items-center justify-start shadow-lg rounded-b-lg'>
              <div className='flex flex-row font-bold text-xl mb-4'>
                {String("Verkada Products")}
              </div>
              {[0].map((layer,layerIndex)=>{
                return(
                  <div key={layerIndex} className={`flex flex-row w-full items-center rounded-sm justify-start border-b border-grAY-300 ${layerIndex%2===1?"bg-gray-300":"bg-white"}`}>
                    <div className='w-24 font-bold text-center'>
                      {String("Layer")}
                    </div>
                    <div className='font-bold border-l w-28 items-center justify-start text-center'>
                      {String("Qty")}
                    </div>

                    <div className='font-bold border-l border-r w-32 items-center justify-start text-center italic'>
                      {String("Unit $")}
                    </div>

                    <div className='flex flex-col flex-1 h-full'>
                    </div>
                    
                    <div className='flex flex-row w-40 px-2 items-center justify-end font-bold text-left'>
                      {String("Total")}
                    </div> 
                  </div>
                )
              })}
              {layers.map((layer,layerIndex)=>{
                let shade=activeLayerIndex!==null&&activeLayerIndex!=layerIndex
                return(
                  <div key={layerIndex} className={`flex flex-row w-full h-14 items-center rounded-sm justify-start ${layerIndex%2===1?"bg-gray-300":"bg-white"}`} style={{opacity:shade?"20%":"100%"}}>
                    <div className='flex flex-col h-12 w-24 items-center justify-center'>
                      <div className='flex flex-col h-10 w-10 rounded-lg shadow-xl overflow-hidden'>
                        <img className='flex flex-col h-full w-full' src={LAYER_IMG_PATHS[layerIndex]}/>
                      </div>
                    </div>
                    <div className='font-bold border-l w-28 items-center justify-start text-center'>
                      {String(layer)}
                    </div>

                    <div className='font-bold border-l border-r w-32 px-2 items-center justify-start text-right'>
                      {String("$"+COSTS[layerIndex])}
                    </div>

                    <div className='flex flex-col flex-1 h-full'>
                    </div>
                    
                    <div className='flex flex-row w-40 px-2 items-center justify-end font-bold text-right'>
                      {String("$"+(COSTS[layerIndex]*layer))}
                    </div> 
                  </div>
                )
              })}

              <div className='mt-8'>
              </div>

              <div className='flex flex-row font-bold text-xl mb-4'>
                {String("Verkada Platform Subscriptions")}
              </div>

              {/*SW Platform List*/}
              {[0].map((layer,layerIndex)=>{
                return(
                  <div className={`flex flex-row w-full items-center rounded-sm justify-start border-b ${layerIndex%2===1?"bg-gray-300":"bg-white"}`}>
                    <div className='w-24 font-bold text-center'>
                      {String("SWID")}
                    </div>
                    <div className='font-bold border-l w-28 items-center justify-start text-center'>
                      {String("Seats")}
                    </div>

                    <div className='font-bold border-l border-r w-28 items-center justify-start text-center italic'>
                      {String("Disc. %")}
                    </div>

                    <div className='flex flex-col flex-1 h-full'>
                    </div>
                    
                    <div className='flex flex-row w-40 items-center justify-end font-bold text-left'>
                      {String("Total")}
                    </div> 
                  </div>
                )
              })}
              {[0,0,].map((layer,layerIndex)=>{
                return(
                  <div className={`flex flex-row w-full h-14 items-center rounded-sm justify-start ${layerIndex%2===1?"bg-gray-300":"bg-white"}`}>
                    <div className='flex flex-col w-24 items-center justify-center font-bold'>
                      <div className='flex flex-col h-10 w-10 rounded-lg shadow-xl overflow-hidden'>
                        <img className='flex flex-col h-full w-full' src={PLATFORM_IMG_PATHS[layerIndex]}/>
                      </div>
                    </div>
                    <div className='font-bold border-l w-28 items-center justify-start text-center'>
                      {String(Number.parseInt(Math.random()*15))}
                    </div>

                    <div className='border-l border-r w-28 items-center justify-start text-center italic'>
                      {String(Number.parseInt(Math.random()*40)+"%")}
                    </div>

                    <div className='flex flex-col flex-1 h-full'>
                    </div>
                    
                    <div className='flex flex-row w-40 items-center justify-end font-bold text-right'>
                      {String("$"+Number.parseFloat(Math.random()*10000+5000).toFixed(1))}
                    </div> 
                  </div>
                )
              })}
            </div>

            {/*SubTotal*/}
            <div className='flex flex-row w-full mt-8 shrink-0 items-center justify-between font-bold text-lg'>
              <div>
                {String("Sub-Total:")}
              </div>
              <div >
                <LightNumber
                  value={layers.reduceRight((agg,cum,index)=>agg+COSTS[index]*cum,0)}
                  config={{
                    decimals:1,
                    prefix:"$",
                    suffix:"",
                    isTimestamp:false
                  }}
                />
              </div>
            </div>

            {/*Total Discount*/}
            <div className='flex flex-row w-full shrink-0 items-center justify-between font-bold text-lg'>
              <div>
                {String("Discount:")}
              </div>
              <div className='italic'>
                {String("20%")}
              </div>
            </div>

            <div className='flex flex-row h-0.5 w-full rounded-full bg-gray-800'>
            </div>

            {/*Quote Total*/}
            <div className='flex flex-row w-full shrink-0 items-center justify-between font-bold text-2xl'>
              <div>
                {String("Total:")}
              </div>
              <div >
                <LightNumber
                  value={layers.reduceRight((agg,cum,index)=>agg+COSTS[index]*cum,0)*.8}
                  config={{
                    decimals:1,
                    prefix:"$",
                    suffix:"",
                    isTimestamp:false
                  }}
                />
              </div>
            </div>

            {/*Save & Share Buttons*/}
            <div className='flex flex-row items-center justify-center px-4 py-2 hover:px-12 hover:py-4 rounded-full border shadow-lg transition-all duration-500 ease-in-out'>
              {"Save Quote"}
            </div>
          </div>
        ):( 
          <div className='hidden'/>
        )}
      </div>
    </div>

  )
}

//String value
const LightNumber= (props) => {
  const MONTH_NAMES={
    "0":"January",
    "1":"February",
    "2":"March",
    "3":"April",
    "4":"May",
    "5":"June",
    "6":"July",
    "7":"August",
    "8":"September",
    "9":"October",
    "10":"November",
    "11":"December",
  };
  const PERCENTILE_SUFFIXES={
    '0':'th',
    '1':'st',
    '2':'nd',
    '3':'rd',
    '4':'th',
    '5':'th',
    '6':'th',
    '7':'th',
    '8':'th',
    '9':'th',
  }
  const MILLISECONDS_PER_HOUR=216000

  if(props.config.isTimestamp){
    let newDate = new Date(Number.parseInt(props.value));
    let dateString;
    if(props.config.includeDateNum){
      dateString=String(MONTH_NAMES[newDate.getUTCMonth()].slice(0,3)+" "+newDate.getUTCDate()+", "+newDate.getUTCFullYear());
    }else{
      dateString=String(MONTH_NAMES[newDate.getUTCMonth()].slice(0,3)+", "+newDate.getUTCFullYear());
    }

    let textColor;

    if(props.config.signed){
      textColor = props.value>=0?props.config.positiveColor:props.config.negativeColor;
    }else{
      textColor = props.config.standardColor?props.config.standardColor:'#000000';
    }
    return (
      <div>
        <div className={`${props.config.bold?('font-bold'):('font-medium')}`} style={{color:textColor}}>
          {dateString}
        </div>
      </div>
    )
  }else if(props.config.isTimestampDelta){

    //Total Time - Floor Hours = Minutes
    //Total Minutes - Floor Minutes = Seconds
    let delta=props.value;
    let hours=Math.floor(delta/216000);
    let minutes=Math.floor((delta-hours*216000)/3600);
    let seconds=(delta-hours*216000-minutes*3600)/60;
    let hourString=hours<10?"0"+hours:hours;
    let timeString=String(hourString+":"+minutes+"."+seconds.toFixed(0));

    //Format the string as nice hours and minutes
    return timeString;
  }else{
    let value=(props.value!==null && props.value!==undefined)?props.value:"";

    //Convert percentiles
    if(props.config.suffix==='%'){
      //value=value*100;
    }

    let suffix=props.config.suffix;
    let decimals = props.config.decimals;

    //Adjust for spacing to center
    let prefix;

    //If it is a percentage point change or a percent change, then add a plus in front of positive values
    if((suffix==='p.p.'||suffix==='%%') && value>=0){
      prefix = '+'
    }else{
      prefix=props.config.prefix===''&&!props.config.centerText?'\u00A0\u00A0\u00A0':props.config.prefix
    }

    //If its a $ gain / loss then update accordingly
    if(prefix==='$$' && value>=0){
      prefix='+$';
    }else if(prefix==='$$' && value<0){
      prefix='-$';
    }

    //If its a ++ gain / loss then update accordingly
    if(prefix==='++' && value>=0){
      prefix='+';
    }else if(prefix==='++' && value<0){
      prefix='';
    }

    //Convert the metric to units if it is not a percent
    if(suffix!=='%' && suffix!=='%%' && suffix!=='p.p.' && suffix!=='X' && suffix!=='percentile' && value!==0){
    let power = Math.max(Math.floor(Math.log10(Math.abs(value))),0);

    //Calculate the units
    switch(power){
      case 0:
        suffix=''
        break;
      case 1:
        suffix='';
        power=0;
        break;
      case 2:
        suffix='';
        power=0;
        break;
      case 3:
        suffix='K'
        break;
      case 4:
        suffix='K'
        power=3;
        break;
      case 5:
        suffix='K';
        power=3;
        break;
      case 6:
        suffix='M'
        break;
      case 7:
        suffix='M'
        power=6;
        break;
      case 8:
        suffix='M'
        power=6;
        break;
      case 9:
        suffix='B'
        break;
      case 10:
        suffix='B'
        power=9;
        break;
      case 11:
        suffix='B'
        power=9;
        break;
      case 12:
        suffix='T'
        break;
      case 13:
        suffix='T'
        power=12;
        break;
      case 14:
        suffix='T'
        power=3;
        break;
      default:
        suffix=`^${power}`
        break;
    }

    //Convert the value
    value=props.value/Math.pow(10,power);
    }

    //Add a space to the p.p. suffix if there is one
    if(suffix==='p.p.'){
      suffix='\u00A0p.p.'
    }

    //Convert % change suffix back to percent
    if(suffix==='%%'){
      suffix='%'
    }

    //Update the suffix with a percentile if its a percentile
    if(suffix==='percentile'){
      //Set decimals to zero since its a percentile
      decimals=0;

      let roundedValue=value.toLocaleString('en-US',{minimumFractionDigits:0, maximumFractionDigits:0});
      let lastDigit=roundedValue[roundedValue.length-1];
      suffix=PERCENTILE_SUFFIXES[lastDigit];
    }


    //Reappend meters to suffix
    if(props.config.suffix==='m'&&value!==0){
      suffix=String(suffix+"m");
    }

    //Convert the value to a positive value if prefix = $$
    if(prefix==='-$'){
      value = Math.abs(value);
    }

    if(Math.abs(value)<0.000){
      value=0;
    }

    return String(prefix+value.toLocaleString('en-US',{minimumFractionDigits:decimals, maximumFractionDigits:decimals})+suffix);
  }
}

export default LightQuoteBuilder;