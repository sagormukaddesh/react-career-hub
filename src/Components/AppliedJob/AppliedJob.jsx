import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localstorage";

const AppliedJob = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJob(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === "Remote")
            setDisplayJob(remoteJob);
        } else if (filter === 'onsite') {
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === "Onsite")
            setDisplayJob(onsite);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplications();
        if (jobs.length > 0) {
            // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobApplied);
            const jobApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobApplied.push(job);
                }
            }
            setAppliedJobs(jobApplied);
            setDisplayJob(jobApplied);
        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-3xl">Applied Jobs:{appliedJobs.length} </h2>
            <details className="dropdown">
                <summary className="m-1 btn bg-slate-200">Job Type</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    displayJob.map(job => (
                        <div key={job.id} className="hero bg-slate-300 my-10">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={job.logo} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-xl font-bold">x{job.job_title}</h1>
                                    <p className="py-6">Job Name: {job.company_name}</p>
                                    <p className="py-6">Job Type: {job.remote_or_onsite}</p>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AppliedJob;