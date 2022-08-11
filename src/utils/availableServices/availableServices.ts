import { cosmeticDentistry, teethOrthodontics, teethCleaning, cavityProtection, pediatricDental, oralSurgery } from './../path/path';
export const services : {
    id: number,
    name : string,
    link : string,
}[]=[
    {
        id: 1,
        name : "Teeth Orthodontics",
        link: teethOrthodontics
    },
    {
        id: 2,
        name : "Cosmetic Dentistry",
        link: cosmeticDentistry
    },
    {
        id: 3,
        name : "Teeth Cleaning",
        link: teethCleaning
    },
    {
        id: 4,
        name : "Cavity Protection",
        link: cavityProtection
    },
    {
        id: 5,
        name : "Pediatric Dental",
        link: pediatricDental
    },
    {
        id: 6,
        name : "Oral Surgery",
        link: oralSurgery
    },
]