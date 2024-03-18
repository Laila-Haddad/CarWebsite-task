import  { cars, brands, cart }  from "./data.js"

export async function getCars() {
  return cars;
}

export async function getBrands() {
  return brands;
}

export async function getCarDetails(id) {
  const car = cars.find(car => car.id.toString() === id); 
  return car;
}

export async function getCart() {
  return cart;
}

export async function addCar(data) {
  cart.push(data)
}


export async function deleteCar(id) {
  cart.filter(e=> e.id === id )
}
// const url = "http://localhost:3000";

// export async function getCars() {
//   const res = await fetch(`${url}/cars`);
//   const data = res.json();

//   return data;
// }

// export async function getBrands() {
//   const res = await fetch(`${url}/brands`);
//   const data = await res.json();
//   return data;
// }

// export async function getCarDetails(id) {
//   const res = await fetch(`${url}/cars/${id}`);
//   const data = await res.json();
//   return data;
// }

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



