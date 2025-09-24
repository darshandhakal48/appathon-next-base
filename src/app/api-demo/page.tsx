

import LogOut from '@/components/dashboard/logout';
import ApiWrapper from '@/features/api/api-wrapper';
import withCandidate from '@/hoc/withCandidate';


export interface JobPosting {
  id: number;
  clientName: string;
  deadline: string; // Format: 'YYYY-MM-DD' (can be Date if parsed)
  description: string;
  employmentType: string;
  jobTitle: string;
  jobType: string;
  location: string;
  position: string;
  salary: number;
}

const ApiDemo = () => {
  return (
    <>
      <h2>Manual Fetch (via fetch API)</h2>
      <ApiWrapper<JobPosting[]>
        fallback={<p>Fetching from backend via ApiWrapper...</p>}
        route="/jobs/all-jobs"
      >
        {({ data }) => {
          console.log('ApiWrapper JOBS => ', data);
          return (
            <ul>
              {data?.map((job, index) => (
                <li key={index}>JOb TIELE : {job.jobTitle}</li>
              ))}
            </ul>
          );
        }}
      </ApiWrapper>
      <LogOut />
    </>
  );
};

export default withCandidate(ApiDemo);

