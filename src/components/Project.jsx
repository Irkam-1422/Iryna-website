import React, { useEffect, useRef } from 'react'
import styles from '../styles/Project.module.css'
import anim from '../styles/Animation.module.css'
import observer from '../observers.js'

export const Project = ({project,i}) => {

  const cont1 = useRef(null) 

  useEffect(() => {
    //const style = i%2===0 ? anim.left : anim.right
    const style = anim.hidden
   if (cont1.current) observer(`${style}`).observe(cont1.current)
  })  

  const cont = i%2===0 ? styles.cont : styles.contRev
  const textCont = i%2===0 ? styles.textCont : styles.textContRev
  const imgCont = i%2===0 ? styles.imgCont : styles.imgContRev
  const img = i%2===0 ? styles.img : styles.imgRev
  const btnCont = i%2===0 ? styles.btnCont : styles.btnContRev

  return (
        <div className={cont} ref={cont1}> 
            <div className={textCont}>
                <div className={styles.num}>Project {i+1}</div>
                <div className={styles.title}>{project.title}</div>
                <div className="">{project.desc}</div>
                <div className="">
                    <span>Stack:</span>
                    {project.stack}
                </div>
                <div className={btnCont}>
                {typeof(project.gitLink) == 'string' ? 
                    <a href={project.gitLink}
                        style={{color: '#fefefe'}}
                        ><button className={styles.btnBlack}
                    onMouseEnter={(e) => e.target.style.backgroundPositionX = '100%'}
                    onMouseLeave={(e) => e.target.style.backgroundPositionX = '0'}
                    >
                        Git Repository
                    </button></a> :
                    <div className="">
                        <a href={project.gitLink.client}
                            style={{color: '#fefefe'}}
                            ><button className={styles.btnBlack}
                        onMouseEnter={(e) => e.target.style.backgroundPositionX = '100%'}
                        onMouseLeave={(e) => e.target.style.backgroundPositionX = '0'}
                        >
                            Client Repository
                        </button></a>
                        <a href={project.gitLink.server}
                            style={{color: '#fefefe'}}
                            ><button className={styles.btnBlack}
                        onMouseEnter={(e) => e.target.style.backgroundPositionX = '100%'}
                        onMouseLeave={(e) => e.target.style.backgroundPositionX = '0'}
                        >
                            Server Repository
                        </button></a>
                    </div>
                }
                {project.preview && <a href={project.preview}><button className={styles.btnWhite}
                        style={{height: '50px'}}
                        onMouseEnter={(e) => e.target.style.backgroundPositionX = '100%'}
                        onMouseLeave={(e) => e.target.style.backgroundPositionX = '0'}
                >Preview</button></a>}
                </div>
            </div>
            <div className={imgCont}>
                {project.img && <img src={require(`../assets/${project.img}`)} className={img} />}
            </div>
        </div>
  )
}
