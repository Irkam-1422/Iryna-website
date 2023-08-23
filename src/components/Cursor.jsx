import React, {useRef} from 'react'
import { useEffect } from 'react';

export const Cursor = () => {

  const cursor = useRef(null)  

  const mouseMove = (e) => { 
    let x = e.pageX;
    let y = e.pageY;
    cursor.current.style.left = x + "px";
    cursor.current.style.top = y + "px";
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
  },[])

  return (
    <div className='cursor' ref={cursor}>
        <div className="point">.</div>
    </div>
  )
}
