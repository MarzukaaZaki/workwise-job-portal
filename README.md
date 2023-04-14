# WorkWise Portal 
This is a site that helps job seekers to learn about various job listings and apply to the jobs.
## Live Site Link:
The site was hosted on netlify --> [WorkWise Portal](https://work-wise-portal.netlify.app/)

# Main Functionalities
### Navigation Bar
It is common for all pages of the site. It consists of: 
- A logo text at the rightmost side
- 4 navigation links in the middle
- A button at the leftmost side.

### Homepage
- A banner with image and text.
- 4 categories of job in cards. They show the names of the categories and the number of jobs in each of them. These categories are loaded from data found in the public/categories.json file.
- 4 featured jobs in cards. There is a "See More Jobs" button to view all the jobs from the data. The jobs are loaded from public/jobs.json file. Each featured job card has a view details button which routes to the "Job Details" page.

### Job details
- This page can be accesses by clicking on the view details button in any of the featured job cards.
- Information such as: Job description, educational qualifications, location, job type, contact information can be found here.
- Dynamic route is set to navigate to a particular route to see the details of that particular job.
- It contains an "Apply Now" button which will allow for the particular job information to be set to the local storage.

### Statistics 
- A pie chart with tooltip showing the assignment number and marks is displayed.

### Applied Jobs
- This page can be accessed through the navigation link with the same name. The job data are loaded from the local storage and displayed in this page in horizontal cards.
- The applied jobs can be filtered by job type (remote and onsite) by two buttons. 

### Blog
- A simple page that answers 4 questions

## Resources and Packages Used
- [React Router](https://reactrouter.com/en/main)
- [Tailwind CSS in Vite](https://tailwindcss.com/docs/guides/vite)
- [Hero Icons](https://heroicons.com/)
- [Recharts](https://recharts.org/en-US/)
