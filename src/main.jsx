import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import JobDetail from './components/JobDetail/JobDetail'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import { jobsAndAppliedJobs } from './loaders/getJobsAndAppliedJobs'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json')
      },
      {
        path:'job-detail/:id',
        element: <JobDetail></JobDetail>,
        loader: () => fetch('jobs.json')
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader:jobsAndAppliedJobs
      },
      {
        path:'*',
        element: <NotFound></NotFound>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
