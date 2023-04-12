// Add the applied jobs to local storage
const addToDb = id =>{
    let allAppliedJobs = {};
    
    // Check if local storage is already storing any data 
    const previouslyAppliedJobs = localStorage.getItem('applied-jobs');

    // If there is already items in the local storage
    if(previouslyAppliedJobs){
        // Convert the existing items of the local storage to objects and store them in a variable, allAppliedJobs
        allAppliedJobs =  JSON.parse(previouslyAppliedJobs);
    }
    // Store the number of times a job has been applied to
    const quantity = allAppliedJobs[id]
  if (quantity) {
    const newQuantity = quantity + 1
    allAppliedJobs[id] = newQuantity
  } else {
    allAppliedJobs[id] = 1
  }
    localStorage.setItem('applied-jobs',JSON.stringify(allAppliedJobs));
}


 
const getLocalStorageData = () => {
    let data = {};

    // Retrieve data from local storage
    const storedData = localStorage.getItem('applied-jobs');
    
    // If there is data present, 
    if(storedData){
        // Convert it to an JS object from a JSON object
        data = JSON.parse(storedData);
    }

    // return the object
    return data;

}







export { addToDb, getLocalStorageData }