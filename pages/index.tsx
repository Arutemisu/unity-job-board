import { GetServerSideProps } from 'next'
import axios from 'axios'
import React, { useState } from 'react'
import { JobListing } from '../interfaces'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import List from '../components/List'


type Props = {
  items?: JobListing[],
  error?: string | null 
}

const Home = ({ items, error }: Props) => {
  
  const [listings, setListings] = useState<JobListing[]>(items);
  const [errors, setErrors] = useState<string | null>(error);
  const [search, setSearch] = useState<string>('');


  const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };
  
  if (errors) {
    <Layout title="Job Listing Unity">
    <h1>There was an error connecting to the server.</h1>
    <p>Please contact Tal.</p>
  </Layout>
  } else {
  return (
  <Layout title="Job Listing Unity">
    <h1>Unity Job Listings</h1>
    <div className={styles.wrapper}>
      <img className={styles.search_icon} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
      <input type="text" className={styles.search} onChange={handleChange} />
    </div>  
    {true && <List items={listings} search={search} />}
  </Layout>
)}
}



export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await axios.get('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs');
    return { props: { items: res.data.jobs, error: null } }
  } catch(error) {
    return { props: { items: [], error: error.toString() } }
  }
}

export default Home
