import { useEffect, useState } from "react";
import Job from "../Job/Job";

const CategoryList = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch(`jobs.json`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="my-16">
            <div className="mx-auto max-w-[60%] text-center space-y-4">
                <h2 className="text-4xl font-bold ">Job Category List:{jobs.length} </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, doloremque! Ut labore praesentium molestias iure quis tempora provident accusantium voluptate?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}> <button onClick={() => setDataLength(jobs.length)} className="btn bg-slate-500 text-white">Show All Jobs</button></div>
        </div>
    );
};

export default CategoryList;