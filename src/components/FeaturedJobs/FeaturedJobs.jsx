import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs , setJobs] =useState([]);
    const [dataLength,setDataLength] = useState(4)

    useEffect(() =>{
        fetch('jobs.json')
       .then(res => res.json())
       .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div>
            <h2 className='text-5xl text-center'>Featured Jobs: {jobs.length}</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
                
            </div>
            <div className={dataLength===jobs.length && 'hidden '}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary w-[120px] text-center mt-5">See All Jobs</button>
                </div>
        </div>
    );
};

export default FeaturedJobs;