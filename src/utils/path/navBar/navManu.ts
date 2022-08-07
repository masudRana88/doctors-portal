
import { aboutPage, appointmentPage, contactPage, homePage, loginPage, reviews } from './../path';
export const navManu : {
    id:number,
    name: string,
    link : string,
    navLink: boolean    
}[] =[
    {
        id: 1,
        name: "Home",
        link : homePage,
        navLink: true
    },
    {
        id: 2,
        name: "About",
        link : aboutPage,
        navLink: true
    },

    {
        id: 3,
        name: "Appointment",
        link : appointmentPage,
        navLink: true
    },

    {
        id: 4,
        name: "Reviews",
        link : reviews,
        navLink: true
    },
    {
        id: 5,
        name: "Contact Us",
        link : contactPage,
        navLink: true
    },
    {
        id: 6,
        name: "Login",
        link : loginPage,
        navLink: true
    },
]