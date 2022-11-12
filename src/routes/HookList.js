import React from 'react';
import { useEffect, useState, useRef } from "react";
import NavBar from "./layout/NavBar";
import { useInput, useTabs, useClick, useHover, useConfirm } from "../components/Hooks";
import { usePrevent, useBeforeLeave, useFadeIn, useNetwork } from "../components/Hooks";
import { useScroll, useFullscreen } from "../components/Hooks";
import styles from "../css/common.css";

const mycontent = [
    {tab:"Section1",  content: "I'm the contents of the First!"},
    {tab:"Section2",  content: "I'm the contents of the Second!"} ,
    {tab:"Section3",  content: "I'm the contents of the Third!"} ,
    {tab:"Section4",  content: "I'm the contents of the Forth!"} 
  ];

const HookList = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    
    // useEffect 연습. count1에 의존하는 sayHello 함수 테스트
    const sayHello = () => console.log("Hello");
    useEffect(()=>sayHello(), [count1]);

    const maxLen = value => {
        let validate= true;
        validate = value.length <= 10;  // validate = value.includes("@");
        return validate;
    }

    // 2nd Hook. useInput
    const name = useInput("Mr.", maxLen);

    // 3rd Hook. useTabs  
    const {currentItem, changeItem} = useTabs(0, mycontent);

    // 4th Hook, useClick
    const callme = () => console.log("Call My Title!");
    const callTitle = useClick(callme);

    // 5th Hook, useHover
    const hoverme = () => console.log("Hover Me!");
    const hoverTitle = useHover(hoverme);

    // 6th Hook, useConfirm 
    const doDel = () => console.log("Delete the world!");
    const noDel = () => console.log("Aborted!");
    const deletAll = useConfirm("R U Sure?" , doDel, noDel);

    // 7th Hook, usePrevent  
    const {enablePrevent, disablePrevent} = usePrevent(); 

    // 8th Hook, useBeforeLeave
    const notiLeave = () => console.log("Do not leave!");
    useBeforeLeave(notiLeave);

    // 9th Hook, useFadein
    const fadeinH1 = useFadeIn(1, 0);
    const fadeinP1 = useFadeIn(1, 1);
    const fadeinP2 = useFadeIn(1, 2);

    // 10th Hook, useNetwork
    const currentNetworkStatus = networkstatus => {
        console.log(networkstatus);
    }
    const onLine = useNetwork(currentNetworkStatus);
     
    // 11th Hooks, useScroll
    const { y } = useScroll();

    // useFullscreen
    const  {element, triggerFull , exitFull} = useFullscreen();

    return (
        <div className={styles.container}>

            <NavBar />
            
            <div className={styles.row} style={{paddingTop:'100px'}}>

              {/* Hooks : useNetwork */}
              <div style={{ position:"fixed", color:y>100? "red":"black" }}>현재 네트워크 상태: {onLine ? "On-line" : "Off-line"}</div>

              {/* Hooks : useFullscreen */}
              <div className={styles.hooks}>
                  <div ref={element}>
                        <button onClick={exitFull}>Exit FullScreen</button>
                        <img width="100px" src="https://yts.mx/assets/images/movies/gintama_the_final_2021/medium-cover.jpg" />
                  </div>
                    <button onClick={triggerFull}>Make FullScreen</button>
              </div>

              {/* Hooks : useFadeIn */}
              <div className={styles.hooks}>
                  <h1 {...fadeinH1}>useFadeIn</h1>
                  <p {...fadeinP1}>Add a fade-in animation effect on you object.</p>
                  <p {...fadeinP2}>More rich comunication is possible with your clients.</p>
              </div>

              {/* Hooks : usePrevent */}
              <div className={styles.hooks}>
                  <button onClick={enablePrevent}>Protect</button>
                  <button onClick={disablePrevent}>Un-Protect</button>
              </div>

              {/* Hooks : useConfirm */}
              <div className={styles.hooks}>
                  <button onClick={deletAll}>Delete All</button>
              </div>


              {/* Hooks : useHover */}
              <div className={styles.hooks}>
                  <h1 ref={hoverTitle} style={{margin:'0px'}}>useHover Hook</h1> 
              </div>

              {/* Hooks : useClick */}
              <div className={styles.hooks}>
                  <h1 ref={callTitle} style={{margin:'0px'}}>useClick Hook</h1> 
              </div>

              {/* Hooks : useEffect */}
              <div className={styles.hooks}>
                  <h1 style={{margin:'0px'}}>useEffect Hook</h1>
                  <button onClick={()=> setCount1(prev=>prev+1)}>{count1}</button>
                  <button onClick={()=> setCount2(prev=>prev+1)}>{count2}</button>
              </div>
              

              {/* Hooks : useTab */}
              <div className={styles.hooks}>
                  <h1 style={{margin:'0px'}}>useTab Hook</h1>
                  { mycontent.map((section, index)=>(
                  <button onClick={()=>changeItem(index)} key={index}>{section.tab}</button>
                  )) }
                  <div>{currentItem.content}</div>
              </div>
              


              {/* Hooks : useInput */}
              <div className={styles.hooks}>
                  <h1 style={{margin:'0px'}}>useInput Hook</h1>
                  <p style={{margin:'0px'}}><input placeholder="Name" {...name} /></p>
                  {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
              </div>

         

            </div>
            
        </div>

    );
}

export default HookList;