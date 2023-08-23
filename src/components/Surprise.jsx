import React from 'react'
import styles from '../styles/Surprise.module.css'

export const Surprise = () => {
  return (
    <div className={styles.cont}>
        <div className={styles.bg}>
          <div className={`${styles.pink} ${styles.anim1}`}></div>
          <div className={`${styles.blue} ${styles.anim2}`}></div>
          <div className={`${styles.pink}  ${styles.anim3}`}></div>
          <div className={`${styles.blue}  ${styles.anim4}`}></div>
        </div>
        <div className={styles.cont2}>
        <div className={styles.text}>Let's craft websites that matter together!</div>
          <div className={styles.btnCont}>
                    <a href="#footer" style={{color: '#fefefe', height: '45px'}} className={styles.a}>
                        <button className={styles.btnBlack}
                            onMouseEnter={(e) => e.target.style.backgroundPositionX = '100%'}
                            onMouseLeave={(e) => e.target.style.backgroundPositionX = '0'}
                    >
                    Hire me</button></a>
                    <a href={require('../assets/cv.pdf')} className={styles.a}><button className={styles.btnWhite}
                            onMouseEnter={(e) => e.target.style.backgroundPositionX = '100%'}
                            onMouseLeave={(e) => e.target.style.backgroundPositionX = '0'}
                    >my CV</button>
                    </a>
          </div>
        </div>
      </div>
  )
}
