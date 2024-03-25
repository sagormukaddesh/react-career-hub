import { IoIosTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, job_description, salary } = job;
    return (
        <div className="card bg-slate-300 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{company_name} </h2>
                <p>{job_title} </p>
                <button className="px-5 py-2 font-bold border rounded border-[#7E90FE]"> {remote_or_onsite}  </button>
                <p>{job_description} </p>
                <h2></h2>
                <p className="flex items-center gap-2"> <IoLocationSharp></IoLocationSharp> {location} </p>
                <p className="flex items-center gap-2"><IoIosTime></IoIosTime> {job_type} </p>
                <p>{job_title} </p>
                <p className="flex items-center gap-2"><BsCurrencyDollar></BsCurrencyDollar> {salary} </p>
                <p>{job_title} </p>
                <Link to={`job/${id}`}><button className="btn bg-slate-500 text-white hover:text-black ">View Details</button></Link>

            </div>
        </div>
    );
};

export default Job;