import { MdLocationOn,MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
// import { MdAttachMoney } from "react-icons/md";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure >
        <img  src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-[#757575] text-2xl">{company_name}</p>
        <div className="">
          <button className="btn btn-outline btn-primary mr-4 font-extrabold">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-primary font-extrabold">{job_type}</button>
        </div>
       <div className="flex gap-7 ">
        <div className="flex justify-center items-center">
        <MdLocationOn className="text-2xl"></MdLocationOn>
        <p className="text-2xl font-normal">{location}</p>
        </div>
        <div className="flex justify-center items-center">
        <MdAttachMoney className="text-2xl"></MdAttachMoney>
        <p  className="text-2xl font-normal">{salary}</p>
        </div>
       </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}> <button className="btn btn-primary bg-[#7E90FE]">View Details</button></Link>
         
        </div>
      </div>
    </div>
  );
};

export default Job;
