import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You Have Applied Successfully')
    }
    return (
        <div className="my-12">
            <h2>Job Details Id: {id} </h2>
            <div className="grid md:grid-cols-5 gap-6 ">
                <div className="col-span-3 p-4 bg-fuchsia-300 rounded-xl space-y-3">
                    <h3> <span className="font-bold">Job Description:</span> {job.job_description}</h3>
                    <h3> <span className="text-xl font-bold">Job Responsibity:</span> {job.job_responsibility}</h3>
                    <h2 ><span className="font-bold"> Educational Requirements: </span><br /> {job.educational_requirements} </h2>
                    <h2 ><span className="font-bold"> Experience: </span><br /> {job.experiences} </h2>

                </div>
                <div className="border col-span-2 p-4 bg-fuchsia-200 rounded-xl space-y-4">
                    <h3><span className="font-bold">Salary: </span> {job.salary}</h3>
                    <h3><span className="font-bold">job Title: </span> {job.job_title} </h3>
                    <h3 className="text-xl font-bold">Contact Information:</h3>
                    <h3><span className="font-bold">Phone: </span> {job.contact_information.phone} </h3>
                    <h3><span className="font-bold">Email: </span> {job.contact_information.email} </h3>
                    <h3><span className="font-bold">Address: </span> {job.contact_information.address} </h3>
                    <button onClick={handleApplyJob} className="btn bg-rose-300 text-white mx-auto w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;