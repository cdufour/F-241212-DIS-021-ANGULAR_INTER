// interface Country {
//     name: string;
//     inhabitants: number
// }

export interface City {
    id?: number;
    name: string;
    //country: Country
    country: string;
    image: string;
}

//let city: City = { name: "Paris", country: {name: "France", inhabitants: 60} }