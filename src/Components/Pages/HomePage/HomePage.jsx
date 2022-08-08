import React from 'react';
import Banner from '../../Component/Banner/Banner';
import DentalCare from '../../Component/DentalCare/DentalCare';
import InfoCard from '../../Component/InfoCard/InfoCard';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
const HomePage = () => {
    return (
       <div>
          <Banner/>
          <InfoCard/>
          <ServiceCard/>
          <DentalCare/>
       </div>
    );
};

export default HomePage