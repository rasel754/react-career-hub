import { useLoaderData, useParams } from "react-router-dom";
import { LuCircleDollarSign ,LuSubtitles } from "react-icons/lu";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineEmail,MdLocationCity } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";




const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}= useParams();
    const idInt= parseInt(id);
    const job = jobs.find((job) => job.id === idInt);
    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information}=job;
    // console.log(job);
    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('you have applied successfully')
    }
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center my-28">Job Details</h1>
            <div className="grid md:grid-cols-5 gap-5 ">
                
                <div className="border my-12 md:col-span-3 p-14">
                    <h2 className="mb-9"><span className="text-xl font-bold ">job description:</span>{job_description}</h2>
                    <h2 className="mb-5"><span className="text-xl font-bold">job responsibility :</span>{job_responsibility}</h2>
                    <h2 className="mb-7"><span className="text-xl font-bold ">educational requirements :</span>{educational_requirements}</h2>
                    <h2><span className="text-xl font-bold">experiences :</span>{experiences}</h2>
                </div>
                <div className="border md:col-span-2">
                    <h2 className="p-9 text-2xl font-extrabold">Job Details</h2> < hr className="mx-9" />
                    <div className="flex justify-center items-center mt-5">
                        <LuCircleDollarSign className="text-2xl mr-2"></LuCircleDollarSign>
                        <p className="text-2xl"><span className="font-extrabold">salary:</span>{salary} per month</p>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <LuSubtitles className="text-2xl mr-2"></LuSubtitles>
                        <p className="text-2xl"><span className="font-extrabold">job title:</span>{job_title}</p>
                    </div>
                    <h2 className="p-9 text-2xl font-extrabold">Contact Information</h2> < hr className="mx-9" />
                    <div className="flex justify-center items-center mt-5">
                        <FaSquarePhone className="text-2xl mr-2"></FaSquarePhone>
                        <p className="text-2xl"><span className="font-extrabold">phone:</span>{contact_information.phone}</p>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <MdOutlineEmail className="text-2xl mr-2"></MdOutlineEmail>
                        <p className="text-2xl"><span className="font-extrabold">email:</span>{contact_information.email}</p>
                     </div>
                    <div className="flex justify-center items-center mt-5">
                        <MdLocationCity className="text-5xl mr-2"></MdLocationCity>
                        <p className="text-2xl"><span className="font-extrabold">location:</span>{contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    
            </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default JobDetails;