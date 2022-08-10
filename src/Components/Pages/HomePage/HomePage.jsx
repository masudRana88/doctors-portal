
import Banner from '../../Component/Banner/Banner';
import ContactForm from '../../Component/ContactForm/ContactForm';
import DentalCare from '../../Component/DentalCare/DentalCare';
import Footer from '../../Component/Footer/Footer';
import InfoContainer from '../../Component/Info/InfoContainer';


import MakeAppointmentBanner from '../../Component/MakeAppointmentBanner/MakeAppointmentBanner';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
import Testimonial from '../../Component/Testimonial/Testimonial';
const HomePage = () => {
    return (
       <div>
          <Banner/>
          <InfoContainer/>
          <ServiceCard/>
          <DentalCare/>
          <MakeAppointmentBanner/>
          <Testimonial/>
          <ContactForm/>
          <Footer/>
       </div>
    );
};

export default HomePage