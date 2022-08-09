
import { aboutPage, appointmentPage, contactPage, homePage, loginPage, reviews } from './../path';
export const navManu : {
    id:number,
    name: string,
    link : string,
    navLink: boolean,
    isActiv : boolean    
}[] =[
    {
        id: 1,
        name: "Home",
        link : "/#home",
        navLink: false,
        isActiv : false,
    },
    {
        id: 2,
        name: "About",
        link : aboutPage,
        navLink: true,
        isActiv : false,
    },

    {
        id: 3,
        name: "Appointment",
        link : appointmentPage,
        navLink: true,
        isActiv : false,
    },

    {
        id: 4,
        name: "Reviews",
        link : "/#reviews",
        navLink: false,
        isActiv : false,
    },
    {
        id: 5,
        name: "Contact Us",
        link : "/#contactus",
        navLink: false,
        isActiv : false,
    },
    {
        id: 6,
        name: "Login",
        link : loginPage,
        navLink: true,
        isActiv : false,
    },
]