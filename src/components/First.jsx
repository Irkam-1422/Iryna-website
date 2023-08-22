import React, { useEffect, useRef } from 'react'
import styles from '../styles/First.module.css'
import anim from '../styles/Animation.module.css'
import observer from '../observers.js'

export const First = () => {

  const img = useRef(null)  
  const text = useRef(null)

  useEffect(() => {
   if (img.current) observer(`${anim.right}`).observe(img.current)
   if (text.current) observer(`${anim.right}`).observe(text.current)
  })  

  return (
    <div className="container c1">
        <div className={styles.cont}>
            <div className={styles.titleCont}>
                <div className={styles.iAm}>I am a</div>
                <div className="">
                    Frontend <br />     
                    Developer
                    <span className={styles.span}>
                        .
                    </span>
                </div>
            </div>
            <div className={styles.imgCont} ref={img}>
                <img src={require('../assets/avatar.jpg')} className={styles.img} />
            </div>
        </div>
        <div className={styles.cont2}>
            <div className={styles.btnCont}>
                <a href="#footer" style={{color: '#fefefe'}}><button className={styles.btnBlack}
                        onMouseEnter={(e) => e.target.style.backgroundPositionX = '100%'}
                        onMouseLeave={(e) => e.target.style.backgroundPositionX = '0'}
                >
                Hire me</button></a>
                <a href={require('../assets/cv.pdf')}><button className={styles.btnWhite}
                        onMouseEnter={(e) => e.target.style.backgroundPositionX = '100%'}
                        onMouseLeave={(e) => e.target.style.backgroundPositionX = '0'}
                >my CV</button></a>
            </div>
            <div className={styles.textCont} ref={text}>
                <div className={styles.aboutMe}>About me</div>
                <div className="">
                    Hey! My name is Iryna!
                    My journey as a frontend developer started about 
                    2 years ago. I have been working as a freelancer 
                    on various projects and that has sharpened my 
                    technical skills, and I am willing to take a big step
                    forward now and work for a company in a team of 
                    professional developers. I am determined, 
                    honest and open-minded, and I would love 
                    to develop myself in the development industry. 
                    My life goal is to make myself better every day 
                    with every step! Hope to work with you!
                </div>
            </div> 
        </div>
    </div> 
  )
}
