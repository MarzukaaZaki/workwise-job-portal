import { getLocalStorageData } from "../utilities/fakeDb";

export const jobsAndAppliedJobs = async () => {
    const jobsData = await fetch('/jobs.json');
    const jobs = await jobsData.json();

    const savedJobs = getLocalStorageData();
    let all = [];
    for (const id in savedJobs){
        const found = jobs.find(job => job.id === parseInt(id));
        
        if(found){
            found.quantity = savedJobs[id];
            all.push(found);
            
        }
        

        
    }
    
    return {all, jobs};
}