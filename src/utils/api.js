import { cars, cart , rating , colors , images , descriptions , seats} from "./data.js";
import {fixMilage } from './utils.js'


export async function getCart() {
  return cart;
}

export async function addCar(data) {
  cart.push(data);
}

export async function deleteCar(id) {
  cart.filter((e) => e.id === id);
}

export async function searchByCarName(name){
  return fetch(`${url}?search=${name}`)
  .then((response) => response.json())
  .then((data) => {
    let  mappedData = data.map(mapAttributes);
    return mappedData;

  })
  .catch((error) => {
    console.error("Failed fetching search results", error);
    return cars;
  });
}



function mapAttributes(realApiObject) {
  return Object.keys(realApiObject).reduce((acc, currentKey) => {
    const mappedKey = attributeMapping[currentKey] || currentKey;
    acc[mappedKey] = realApiObject[currentKey];
    mappedKey == 'mileagePerGas' ?  acc[mappedKey] = fixMilage(acc.mileagePerGas) : acc
    [mappedKey] 
    mappedKey == 'type' && acc[mappedKey] == "Automatic" ? acc[mappedKey] = "Auto" : acc[mappedKey]
    mappedKey == 'images' ? acc.images = images[acc.id-1]: acc[mappedKey]
    mappedKey == 'seats' ? acc.seats = seats[acc.id-1]: acc[mappedKey]
    mappedKey == 'colors' ? acc.colors = colors[acc.id-1]: acc[mappedKey]
    return acc;
  }, {});
}


const attributeMapping = {
  make: "brand",
  model: "name",
  price: "rentPrice",
  mileage: "mileagePerGas",
  image:"images", 
  transmission : "type",
  owners: "seats" , 
  color: "colors"
};

const url = "https://freetestapi.com/api/v1/cars";

export async function getCars() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let  mappedData = data.map(mapAttributes);
      return mappedData;
    })
    .catch((error) => {
      console.error("failed fetching cars", error);
      return cars;
    });
}


export async function getCarDetails(id) {
  return fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => { 
      let mappedData = mapAttributes(data);
      mappedData = {...mappedData , images: images[id-1] , colors: colors[id-1] , rating : rating[id-1] , description : descriptions[id-1]}
      return mappedData;
    })
    .catch((error) => {
      console.error("Could not find car details", error);
      const car = cars.find((car) => car.id.toString() === id);
      return car;
    });
}

// export async function getCart() {
//   const res = await fetch(`${url}/cart`);
//   const data = await res.json();
//   return data;
// }

// export async function deleteItem(id) {
// const res = await fetch(`${url}/cart/${id}`, {
//   method: "DELETE",
// });
// }

// export async function addToCart(data) {
// const res = await fetch(`${url}/cart`, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-type": "application/json",
//   },
// });
// }