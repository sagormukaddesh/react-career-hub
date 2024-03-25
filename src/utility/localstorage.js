const getStoredJobApplications = () => {
    const storedJobApplication = localStorage.getItem('job-Applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication)
    }
    return [];
}


const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplications();
    const exist = storedJobApplications.find(jobId => jobId === id);
    if (!exist) {
        storedJobApplications.push(id);
        localStorage.setItem('job-Applications', JSON.stringify(storedJobApplications));
    }

}

export { getStoredJobApplications, saveJobApplication }