import React from 'react';
import Banner from '../../Component/Banner/Banner';
import InfoCard from '../../Component/InfoCard/InfoCard';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
const HomePage = () => {
    return (
       <div>
          <Banner/>
          <InfoCard/>
          <ServiceCard/>
       </div>
    );
};

export default HomePage