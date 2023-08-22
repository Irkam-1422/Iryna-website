import React, { useRef } from 'react'
import { Service } from './Service'
import styles from '../styles/Last.module.css'

const serviecs = [
    {title: 'Web Development',
    img: 'webdev.png',
    description: 'I can develop different types of web applications from company websites to crm systems. I have a decent experience with js frameworks, but I am also open to write websites using Shopify or Wordpress!'},
    {title: 'Web Design',
    img: 'design.png',
    description: 'In case when you don`t have a design yet, I will be more than happy to create one for you, just on its own or with further development!'},
    {title: 'Ready to work in a copany!',
    img: 'company.png',
    description: 'I am excited about transitioning from freelancing to a collaborative team environment. I am looking forward to working alongside experienced professionals from whom I can learn and develop my personal and professional skills, by delivering high-quality digital solutions!'},
]

export const Last = () => {

    const cont = useRef(null)
 
    const getCoords = (elem) => {
        let box = elem.getBoundingClientRect();
      
        return {
          top: box.top + window.pageYOffset,
          right: box.right + window.pageXOffset,
          bottom: box.bottom + window.pageYOffset,
          left: box.left + window.pageXOffset
        };
      }  
        
  return (
    <div className="container c3" ref={cont}>
        <div className="">
            <div className={styles.offer} 
                 style={cont.current ? {} : {}}
                 >What do I offer?</div>
            <div className={styles.cont}>
            {serviecs.map((s,i) => <Service service={s} i={i}/>)}
            <div className={styles.techs}>
                <div className={styles.text}>Technologies I have experience with</div>
                <img src={require('../assets/icons.png')} className={styles.img} />
            </div>
            </div>
        </div>
    </div>
  )
}
