export type Location = {
  name: string
}

export type JobListing = {
  absolute_url: string,
  data_compliance?: any[],
  internal_job_id: number,
  location: Location,
  metadata?: any[],
  id: number,
  updated_at?: string,
  requisition_id?: string,
  title: string,
  content?: string
}
