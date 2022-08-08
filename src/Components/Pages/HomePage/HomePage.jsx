
import Banner from '../../Component/Banner/Banner';
import ContactForm from '../../Component/ContactForm/ContactForm';
import DentalCare from '../../Component/DentalCare/DentalCare';
import InfoCard from '../../Component/InfoCard/InfoCard';
import MakeAppointmentBanner from '../../Component/MakeAppointmentBanner/MakeAppointmentBanner';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
import Testimonial from '../../Component/Testimonial/Testimonial';
const HomePage = () => {
    return (
       <div>
          <Banner/>
          <InfoCard/>
          <ServiceCard/>
          <DentalCare/>
          <MakeAppointmentBanner/>
          <Testimonial/>
          <ContactForm/>
       </div>
    );
};

export default HomePage