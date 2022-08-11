
import Banner from '../../Component/Banner/Banner';
import ContactForm from '../../Component/ContactForm/ContactForm';
import DentalCare from '../../Component/DentalCare/DentalCare';
import InfoContainer from '../../Component/Info/InfoContainer';
import MakeAppointmentBanner from '../../Component/MakeAppointmentBanner/MakeAppointmentBanner';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
import Testimonial from '../../Component/Testimonial/Testimonial';
const HomePage = () => {
    return (
       <div className='mt-[66px]'>
          <Banner/>
          <InfoContainer/>
          <ServiceCard/>
          <DentalCare/>
          <MakeAppointmentBanner/>
          <Testimonial/>
          <ContactForm/>
       </div>
    );
};

export default HomePage