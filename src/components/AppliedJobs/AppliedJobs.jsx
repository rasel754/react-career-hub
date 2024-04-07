import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import Display from "../Display/Display";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJob, setAppliedJob] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      // console.log(jobApplied,jobs,storedJobIds);
      setAppliedJob(jobApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h1>Applied Jobs:{appliedJob.length}</h1>

      <div>
        {appliedJob.map((job) => (
          <Display key={job.id} job={job}></Display>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
