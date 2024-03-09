// const url = "http://localhost:3000";
// // const url = "./data.json";


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

export async function deleteItem(id) {
  // const res = await fetch(`${url}/cart/${id}`, {
  //   method: "DELETE",
  // });
}

export async function addToCart(data) {
  // const res = await fetch(`${url}/cart`, {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // });
}


const url = "/data.json";

export async function getCars() {
  const res = await fetch(url);
  const data = await res.json();
  return data.cars;
}

export async function getBrands() {
  const res = await fetch(url);
  const data = await res.json();
  return data.brands;
}

export async function getCarDetails(id) {
  const res = await fetch(url);
  const data = await res.json();

  const car = data.cars.find(car => car.id.toString() === id); 
  return car;
}

export async function getCart() {
  const res = await fetch(url);
  const data = await res.json();
  return data.cart;
}

