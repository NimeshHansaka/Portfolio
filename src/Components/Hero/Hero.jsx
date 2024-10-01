import React from 'react'
import { getImageurl } from '../../utils'
import styles from "./Hero.module.css"

function Hero() {
  return (
   
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nimesh Hansaka</h1>
    <p className={styles.description}>I'm a Full-Stack Develope With 5 years of experiance React and NodeJS.
        Reach out if you'd like to learn more!
    </p>
    
<a className={styles.ContactBtn} href="mailto:nimeshhansaka1999@gmail.com">Contact Me</a>


    </div>
<img  className={styles.heroImg} src={getImageurl("hero/heroImage.png")} alt="Hero image of me" />

<div className={styles.topbar}/>
<div className={styles.bottompbar}/>
   </section>
  )
}

export default Hero
