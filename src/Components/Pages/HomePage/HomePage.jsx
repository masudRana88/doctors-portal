
import Banner from '../../Component/Banner/Banner';
import DentalCare from '../../Component/DentalCare/DentalCare';
import InfoCard from '../../Component/InfoCard/InfoCard';
import MakeAppointmentBanner from '../../Component/MakeAppointmentBanner/MakeAppointmentBanner';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
const HomePage = () => {
    return (
       <div>
          <Banner/>
          <InfoCard/>
          <ServiceCard/>
          <DentalCare/>
          <MakeAppointmentBanner/>
       </div>
    );
};

export default HomePage