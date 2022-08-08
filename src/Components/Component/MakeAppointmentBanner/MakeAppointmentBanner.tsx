import Button from "../Button";
import doctorSmall from "./../../../images/images/doctor-small.png"
const MakeAppointmentBanner = () => {
    return (
        <section className="w-full px-4 py-20 md:py-0 md:mt-56 bg-appointmentBG">
            <div className="container flex mx-auto">
                <div className="hidden w-2/4 md:flex">
                    <img src={doctorSmall} alt="" className="-mt-36 "/>
                </div>
                <div className="flex flex-col items-start justify-center w-full md:w-2/4">
                    <h3 className="mb-3 text-xl font-bold text-bgGreenL">Appointment</h3>
                    <h4 className="mb-3 text-4xl font-semibold text-white">Make an appointment Today</h4>
                    <p className="mb-3 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointmentBanner;