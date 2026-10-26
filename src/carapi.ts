import type { CarData } from "./type";

export function getCars(){
    return fetch(import.meta.env.VITE_API_URL + "/cars")
    .then((response) => {
        if(!response.ok){
            throw new Error("Error when fetching cars")
        }
        return response.json();
    })
}

export function deleteCar(url: string){
    return fetch(url, {method: 'DELETE'})
    .then(response => {
        if(!response.ok)
            throw new Error("Error when deleting a car")

        return response.json()
    })
}

export function addCar(car: CarData){
    return fetch(import.meta.env.VITE_API_URL + "/cars", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(car)
    })
    .then(response =>{
        if(!response.ok)
            throw new Error("Error whem adding a new car")
            return response.json()
    })
}