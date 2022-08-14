import * as React from 'react'
import ListItem from './ListItem'
import styles from '../styles/Home.module.css'
import { JobListing } from '../interfaces'

type Props = {
  items: JobListing[],
  search: string
}

const List = ({ items, search }: Props) => (
  <div className={styles.grid}>
    {items.map((item) => {
             if (search == "" || item.title.toLowerCase().includes(search.toLowerCase())) {
                 return (
                  (
                    <ListItem data={item} />
                ))
             }
             return null;
         })}
  </div>
)

export default List
