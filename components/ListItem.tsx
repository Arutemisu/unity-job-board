import React from 'react'
import styles from '../styles/Home.module.css'
import {JobListing} from '../interfaces'

type Props = {
  data: JobListing
}

const ListItem = ({ data }: Props) => {
  const handleOnClick = () => {
    window.location.href='/posts/'+data.id;
  }

  return (
  <article className={styles.job_card}>
    <div className={styles.company_logo_img}>
      <img src="/Unity_2021.svg" alt="Unity Logo" />
    </div>
    <div className={styles.job_title}>{data.title.substring(0,50)}</div>
    <div className={styles.company_name}>Unity</div>
    <div className={styles.skills_container}>
      <div className={styles.skill}>{data.id}</div>
      <div className={styles.skill}>{data.location.name}</div>
    </div>
    <button onClick={handleOnClick} className={styles.apply}>Check It Out</button>
    <a href={'/posts/'+data.id}></a>
  </article>
)}

export default ListItem
