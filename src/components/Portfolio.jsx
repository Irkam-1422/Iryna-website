import React from 'react'
import { Project } from './Project'
import styles from '../styles/Project.module.css'

const projects = [
    {
        title: 'Digital Marketing Company Website',
        desc: 'A website that presents the company, tells about their services, allows adding articles and cases, includes contact froms.',
        stack: 'MERN',
        img: 'expansion4you.png',
        gitLink: {
          client: 'https://github.com/Irkam-1422/Expansion4YOU-client',
          server: 'https://github.com/Irkam-1422/Expansion4YOU-server'
        },
        preview: 'https://expansion4-you-client.vercel.app/'
    } ,
    {
        title: 'RECEPIIRA - Social network for horeca proffesionals',
        desc: 'An application where cooks can make accounts, post their recipes, browse other people`s posts, save them to the collections, rate them, leave comments, and apply for a job. And restaurants can post jobs, view cooks profile and portfolio.',
        stack: 'MERN',
        img: 'RECEPIRA.png',
        gitLink: {
          client: 'https://github.com/Irkam-1422/RECEPIRA-client',
          server: 'https://github.com/Irkam-1422/RECEPIRA-server'
        },
        preview: ''
    }
]

export const Portfolio = () => {
  return (
    <div className="container c2" style={{height: 'auto'}}>
        <div className={styles.portfolio}>Portfolio</div>
        <div className="">
          {projects.map((p,i) => <Project project={p} i={i}/>)}
        </div>
    </div>
  )
}
