import React, {useRef,useEffect} from 'react'
import styles from '../styles/Service.module.css'
import anim from '../styles/Animation.module.css'
import observer from '../observers.js'

export const Service = ({service,i}) => {

  const cont = useRef(null)

  useEffect(() => {
    const style = i%2===0 ? anim.left : anim.right
    if (cont.current) observer(`${style}`).observe(cont.current)
  },[])

  return (
    <div className={styles.cont} ref={cont}>
        <div className="">
            <div className={styles.header}>
                <img src={require(`../assets/${service.img}`)} className={styles.img} />
                <div className={styles.title}>{service.title}</div>
            </div>
            <div className={styles.description}>{service.description}</div>
        </div>
    </div>
  )
}
