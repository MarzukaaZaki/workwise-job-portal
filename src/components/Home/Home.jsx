import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <JobCategories></JobCategories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;