import React, {useRef,useEffect}  from 'react'
import styles from '../styles/Footer.module.css'
import anim from '../styles/Animation.module.css'
import observer from '../observers.js'
import emailjs from 'emailjs-com'

export const Footer = () => {

  const inp1 = useRef(null)
  const inp2 = useRef(null)
  const inp3 = useRef(null)
  const inp4 = useRef(null)
  const form = useRef(null)

  useEffect(() => {
    const inps = [inp1,inp2,inp3,inp4]
    for (let i = 0; i < inps.length; i++) {
        if (inps[i].current) observer(`${anim.right}`).observe(inps[i].current)
    }
  },[])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
        "personal_website1422",
        "template_cjx31w9",
        form.current,
        "cNS0RvHP3DClgf7RI"
    ).then(
        result => {
            console.log(result.text)
            alert('Your email was sent!')
            inp1.current.value = ''
            inp2.current.value = ''
            inp3.current.value = ''    
        },
        error => console.log(error.text)
    )
  }
 
  return (
    <div id='footer' className='container c2'>
        <div className={styles.reach}>How can you reach me?</div>
        <div className={styles.cont}>
            <div className={styles.firstCont}>
                <div className={styles.title1}>Hope to work with you!</div>
                <ul className={styles.ul}>
                <li>
                    <span  className={styles.span}>Phone:</span>
                    +31682259431
                </li>
                <li className="">
                    <span className={styles.span}>Email:</span>
                    Irka.Mor.2002@gmail.com
                </li>
                <li className="">
                    <a href="https://www.linkedin.com/in/irina-mormul-409a10269/"><span  className={styles.span}>LinkedIn</span></a>
                </li>
                <li className="">
                    <a href="https://github.com/Irkam-1422"><span  className={styles.span}>GitHub</span></a>
                </li>
                <li className="">
                    <a href="https://www.instagram.com/irkam1422/"><span  className={styles.span}>Instagram</span></a>
                </li>
                </ul>
            </div>
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <div className={styles.title2}>Feel free to drop me a message!</div>
                <input ref={inp1} type="text" placeholder='name'/>
                <input ref={inp2} type="text" placeholder='email'/>
                <textarea ref={inp3} name="message" placeholder='Your Message'></textarea>
                <input ref={inp4} type="submit" 
                       value="Send!" 
                       className={styles.submit} 
                       onMouseEnter={(e) => e.target.style.backgroundPositionX = '100%'}
                       onMouseLeave={(e) => e.target.style.backgroundPositionX = '0'}
                />
            </form>
        </div>
    </div>
  )
}
