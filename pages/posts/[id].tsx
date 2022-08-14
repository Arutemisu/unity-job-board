import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import React, { useState } from 'react'
import axios from 'axios'
import { JobListing } from '../../interfaces'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'

type Props = {
  item?: JobListing
  error?: string
}

const JobListingDetail = ({ item, error }: Props) => {
  const [listing, setListing] = useState<JobListing>(item);
  const [errors, setErrors] = useState<string | null>(error);
  if (errors) {
    return (
      <Layout title="No Posting Found">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        listing ? listing.title : 'Job Posting Detail'
      }`}
    >
      {listing && <ListDetail item={listing} />}
    </Layout>
  )
}

export default JobListingDetail


export const getServerSideProps: GetServerSideProps = async ({params}) => {

  try {
    const res = await axios.get('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs/'+params.id);
    return { props: { item: res.data, error: null } }
  } catch(error) {
    return { props: { item: [], error: error.toString() } }
  }
}
