import * as React from 'react'
import styles from '../styles/Home.module.css'
import { JobListing } from '../interfaces'

type ListDetailProps = {
  item: JobListing
}

const ListDetail = ({ item: listing }: ListDetailProps) => {
  const fixData = (data:string) => {
    return data
      .replace(/&amp;/gi, '&')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&amp;nbsp;/gi, ' ')
      .replace(/&amp;rsquo;/gi, "'")
      .replace(/href=""([^"]+)""/g, 'href="$1"');
  };
  return(
    <div>
      <h1>Details for {listing.title}</h1>
      <h2>Location: {listing.location.name}</h2>
      <p>ID: {listing.id}</p>
      <div dangerouslySetInnerHTML={{__html:fixData(listing.content)}}></div>
    </div>
)}

export default ListDetail
