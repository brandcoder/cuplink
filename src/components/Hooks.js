import { useEffect, useState, useRef } from "react";

// useTitle: Changing the document title.
export const useTitle=(initTitle)=>{
    const [docTitle, setDocTitle] = useState(initTitle);
    const docTitleUpdate=()=>{
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerHTML = docTitle;
    }
    useEffect(docTitleUpdate, [docTitle]);
    return setDocTitle;
}

// useTabs: Make tabs 
export const useTabs = (initIndex, tabArr)=>{
  const [currentIndex, setCurrentIndex] = useState(initIndex);
  if(!tabArr || !Array.isArray(tabArr)) {
    return;
  }
  return(
    {
      currentItem: tabArr[currentIndex],
      changeItem: setCurrentIndex
    }
  )
}

// useInput: Input box controll
export const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = event => { 
      const val2 = event.target.value;
      let willUpdate = true;
      if(typeof validator === "function"){
          willUpdate = validator(val2);
      }
      if(willUpdate){
          setValue(val2);
      }
  };
  return { value, onChange };
};

// useClick: Click controll
export const useClick = onClick =>{
  const element = useRef(); 
  useEffect(() => {
    // Component Did Mount, Component Did Update  as long as no dependency
    if(element.current) element.current.addEventListener("click", onClick);
    // Component Will Unmount: return function (we should remove event. ) in component will un mount.
    return () => { if(element.current) element.current.removeEventListener("click", onClick); }
  }, []);
  return element;
}

// useHover: Hover event controll
export const useHover = onHover =>{
  const element = useRef(); 
  useEffect(() => {
    // Component Did Mount, Component Did Update  as long as no dependency
    if(element.current) element.current.addEventListener("mouseenter", onHover); 
    // Component Will Unmount: return function (we should remove event. ) in component will un mount.
    return () => { if(element.current) element.current.removeEventListener("mouseenter", onHover); }
  }, []);
  return element;
}

// useConfirm: Call the confirm box
export const useConfirm = (message = "", onConfirm, onCancel) => {
  if( !onCancel || typeof onConfirm !== "function"){ return; }
  if( onCancel && typeof onCancel !== "function"){ return; }
  const aciton = () => {
    if (window.confirm(message) )
      onConfirm();
    else
      onCancel();
  }
  return aciton;
}

// usePrevent: Make alert before page unloading.
export const usePrevent = () => {
  const listener = event =>{
    event.preventDefault();
    event.returnValue=""; // ?? Stupid Chrome Stuff...
  }
  const enablePrevent = () => window.addEventListener("beforeunload", listener );
  const disablePrevent = () =>window.removeEventListener("beforeunload", listener );
  return {enablePrevent, disablePrevent};
}

// useBeforeLeave: Check when mouse leave the browser.
export const useBeforeLeave = onBefore => { 
  const handle = event => {
    //console.log(event);
    const {clientY} = event;
    onBefore();
  };

  useEffect(() => { 
      if(typeof onBefore !== "function") return;
      document.addEventListener("mouseleave", handle); 
      return () => document.removeEventListener("mouseleave", handle);
  }, []);
}

// useFadeIn: Mix animation effect on object
export const useFadeIn = (duration=1, delay=0) =>{
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      element.current.style.transition=`opacity ${duration}s ease-in-out ${delay}s`;
      element.current.style.opacity=1;
    }
  }, []);

  return { ref:element, style:{opacity:0} }
}

// useNetwork: You can determine whether the device is currently online or offline.
export const useNetwork = callback => {

  const [status, setStatus] = useState(navigator.onLine);

  const handler = () => {
    callback(navigator.onLine);
    setStatus(navigator.onLine);
  }

  useEffect(()=>{
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return ()=>{
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    }
  },[]);

  return status;
}


// useScroll
export const useScroll = () =>{
  const [locaiton, setLocation] = useState({x:0, y:0});

  const onScroll = () => {
    setLocation({x: window.scrollX, y: window.scrollY})
  }

  useState( ()=>{
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll); 
  }, []);

  return locaiton;
}

// useFullscreen
export const useFullscreen = callback => {

  const element = useRef();

  const runCb = isFull => {
      if( callback && typeof callback === "function"){
        callback(isFull);
      }
  }

  const triggerFull = () => {

    console.log(element.current);

    if(element.current){

      if(element.current.requestFullscreen){
        element.current.requestFullscreen(); 

      }else if(element.current.mozRequestFullScreen){
        element.current.mozRequestFullScreen(); 

      }else if (element.current.webkitRequestFullScreen){
        element.current.webkitRequestFullScreen(); 

      }else if (element.current.msRequestFullscreen){
        element.current.msRequestFullscreen(); 

      }

      runCb(true);
    }
  };

  const exitFull = () =>{
    window.document.exitFullscreen();
    
    if(callback && typeof callback !== "function"){
      callback(true);
    }
  };

  return {element, triggerFull , exitFull};

}