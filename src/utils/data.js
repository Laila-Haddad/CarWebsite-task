const cars = [
  {
    id: "1",
    name: "Chiron",
    engine: "6000 cc",
    brand: "Bugatti",
    imageUrl: "cars/car1.png",
    images: [
      "cars/car1.png",
      "cars/car2.png",
      "cars/car3.png",
      "cars/car4.png",
      "cars/car5.png",
      "cars/car6.png",
    ],
    type: "auto",
    rentPrice: 1500,
    numOfSeats: 2,
    description:
      "A marvel of engineering and design, with unparalleled performance. A marvel of engineering and design, with unparalleled performance.",
    rating: 5,
    colors: ["blue", "black", "white"],
    mileagePerGas: "5KM/1-lt",
  },
  {
    id: "2",
    name: "F8 Tributo",
    engine: "4000 cc",
    brand: "Ferrari",
    imageUrl: "cars/car2.png",
    images: [
      "cars/car2.png",
      "cars/car1.png",
      "cars/car3.png",
      "cars/car4.png",
    ],
    type: "auto",
    rentPrice: 1200,
    numOfSeats: 2,
    description:
      "An homage to Ferrari's most powerful V8 engine. A marvel of engineering and design, with unparalleled performance.",
    rating: 4,
    colors: ["red", "gold", "black"],
    mileagePerGas: "4KM/1-lt",
  },
  {
    id: "3",
    name: "Aventador",
    engine: "6400 cc",
    brand: "Lamborghini",
    imageUrl: "cars/car3.png",
    images: [
      "cars/car3.png",
      "cars/car2.png",
      "cars/car3.png",
      "cars/car4.png",
    ],
    type: "auto",
    rentPrice: 1800,
    numOfSeats: 2,
    description:
      "A flagship model representing the pinnacle of Lamborghini's legacy. A marvel of engineering and design, with unparalleled performance.",
    rating: 4.5,
    colors: ["green", "white", "orange"],
    mileagePerGas: "3KM/1-lt",
  },
  {
    id: "4",
    name: "911 Turbo S",
    engine: "6330 cc",
    brand: "Porsche",
    imageUrl: "cars/car4.png",
    images: [
      "cars/car4.png",
      "cars/car2.png",
      "cars/car3.png",
      "cars/car5.png",
    ],
    type: "manual",
    rentPrice: 900,
    numOfSeats: 4,
    description:
      "Iconic design, relentless performance, and unparalleled legacy. A marvel of engineering and design, with unparalleled performance.",
    rating: 4.8,
    colors: ["silver", "black", "blue"],
    mileagePerGas: "6KM/1-lt",
  },
  {
    id: "5",
    name: "720S",
    engine: "4000 cc",
    brand: "McLaren",
    imageUrl: "cars/car5.png",
    images: [
      "cars/car5.png",
      "cars/car2.png",
      "cars/car3.png",
      "cars/car4.png",
    ],
    type: "auto",
    rentPrice: 1300,
    numOfSeats: 2,
    description:
      "Innovation, performance, and striking aesthetics meet. A marvel of engineering and design, with unparalleled performance.",
    rating: 3,
    colors: ["orange", "grey", "white"],
    mileagePerGas: "5KM/1-lt",
  },
  {
    id: "6",
    name: "Martin DBS Superleggera",
    engine: "6000 cc",
    brand: "Aston",
    imageUrl: "cars/car6.png",
    images: [
      "cars/car6.png",
      "cars/car2.png",
      "cars/car3.png",
      "cars/car4.png",
    ],
    type: "auto",
    rentPrice: 1100,
    numOfSeats: 4,
    description:
      "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",
    rating: 3.7,
    colors: ["green", "black", "silver"],
    mileagePerGas: "4KM/1-lt",
  },
  {
    id: "7",
    name: "Martin ",
    engine: "6000 cc",
    brand: "Aston",
    imageUrl: "cars/car2.png",
    images: [
      "cars/car2.png",
      "cars/car2.png",
      "cars/car3.png",
      "cars/car4.png",
    ],
    type: "auto",
    rentPrice: 1100,
    numOfSeats: 4,
    description:
      "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",
    rating: 3.7,
    colors: ["green", "black", "silver"],
    mileagePerGas: "4KM/1-lt",
  },
];

const brands = [
  {
    id: "1",
    name: "Bugatti",
    imageUrl: "cars/brand1.png",
    cars: [
      {
        id: 101,
        name: "Bugatti Chiron",
      },
      {
        id: 102,
        name: "Bugatti Veyron",
      },
    ],
  },
  {
    id: "2",
    name: "Ferrari",
    imageUrl: "cars/brand2.png",
    cars: [
      {
        id: 201,
        name: "Ferrari LaFerrari",
      },
      {
        id: 202,
        name: "Ferrari 488 GTB",
      },
    ],
  },
  {
    id: "3",
    name: "Lamborghini",
    imageUrl: "cars/brand3.png",
    cars: [
      {
        id: 301,
        name: "Lamborghini Aventador",
      },
      {
        id: 302,
        name: "Lamborghini Huracan",
      },
    ],
  },
  {
    id: "4",
    name: "Porsche",
    imageUrl: "cars/brand4.png",
    cars: [
      {
        id: 401,
        name: "Porsche 911",
      },
      {
        id: 402,
        name: "Porsche Cayman",
      },
    ],
  },
];

const cart = [];

const rating = [
  4, 3.5, 4, 4.5, 5, 4, 3, 3.5,

  4, 4.5, 5, 3.5, 3, 3.5, 4, 4,

  5, 4.5, 3, 3.5, 4, 4.5, 5, 4,

  4, 3.5, 4, 4.5, 5, 4.5,
];
const colors = [
  ["purple", "blue", "green"],

  ["pink", "purple", "blue"],

  ["purple", "orange"],

  ["black", "silver"],

  ["green", "pink", "gold"],

  ["red", "black", "blue"],

  ["blue", "silver"],

  ["red", "gold"],

  ["blue"],

  ["purple", "red"],

  ["red"],

  ["purple", "red", "pink"],

  ["gold", "purple"],

  ["black", "pink"],

  ["purple", "green", "black"],

  ["gold", "gold"],

  ["gold", "black", "purple"],

  ["purple", "violet", "indigo"],

  ["blue", "purple"],

  ["red"],

  ["green", "gold", "black"],

  ["gold", "black"],

  ["blue"],

  ["black", "pink", "green"],

  ["pink", "gold"],

  ["purple", "green", "pink"],

  ["orange", "white", "green"],

  ["blue", "gold", "black"],

  ["pink", "blue"],

  ["green", "purple"],
];
const images = [
  ["cars/car1.png", "cars/car5.png", "cars/car9.png", "cars/car2.png"],

  ["cars/car2.png", "cars/car4.png", "cars/car8.png", "cars/car3.png"],

  ["cars/car3.png", "cars/car9.png", "cars/car4.png", "cars/car1.png"],

  ["cars/car4.png", "cars/car3.png", "cars/car2.png", "cars/car8.png"],

  ["cars/car5.png", "cars/car6.png", "cars/car1.png", "cars/car2.png"],

  ["cars/car6.png", "cars/car7.png", "cars/car2.png", "cars/car1.png"],

  ["cars/car7.png", "cars/car8.png", "cars/car3.png", "cars/car1.png"],

  ["cars/car8.png", "cars/car6.png", "cars/car7.png", "cars/car3.png"],

  ["cars/car9.png", "cars/car1.png", "cars/car6.png", "cars/car6.png"],

  ["cars/car10.png", "cars/car8.png", "cars/car5.png", "cars/car9.png"],

  ["cars/car11.png", "cars/car2.png", "cars/car7.png", "cars/car9.png"],

  ["cars/car12.png", "cars/car7.png", "cars/car10.png", "cars/car9.png"],

  ["cars/car13.png", "cars/car5.png", "cars/car8.png", "cars/car4.png"],

  ["cars/car14.png", "cars/car8.png", "cars/car23.png", "cars/car4.png"],

  ["cars/car15.png", "cars/car9.png", "cars/car12.png", "cars/car5.png"],

  ["cars/car16.png", "cars/car7.png", "cars/car8.png", "cars/car1.png"],

  ["cars/car17.png", "cars/car7.png", "cars/car3.png", "cars/car2.png"],

  ["cars/car18.png", "cars/car7.png", "cars/car1.png", "cars/car9.png"],

  ["cars/car19.png", "cars/car3.png", "cars/car9.png", "cars/car15.png"],

  ["cars/car20.png", "cars/car4.png", "cars/car9.png", "cars/car8.png"],

  ["cars/car21.png", "cars/car8.png", "cars/car2.png", "cars/car3.png"],

  ["cars/car22.png", "cars/car7.png", "cars/car4.png", "cars/car6.png"],

  ["cars/car23.png", "cars/car4.png", "cars/car7.png", "cars/car3.png"],

  ["cars/car24.png", "cars/car3.png", "cars/car16.png", "cars/car7.png"],

  ["cars/car25.png", "cars/car4.png", "cars/car2.png", "cars/car17.png"],

  ["cars/car26.png", "cars/car8.png", "cars/car6.png", "cars/car3.png"],

  ["cars/car27.png", "cars/car5.png", "cars/car3.png", "cars/car22.png"],

  ["cars/car28.png", "cars/car1.png", "cars/car9.png", "cars/car5.png"],

  ["cars/car29.png", "cars/car3.png", "cars/car9.png", "cars/car8.png"],

  ["cars/car30.png", "cars/car23.png", "cars/car19.png", "cars/car18.png"],
];

const descriptions = [
  "A marvel of engineering and design, with unparalleled performance. A marvel of engineering and design, with unparalleled performance.",

  "An homage to Ferrari's most powerful V8 engine. A marvel of engineering and design, with unparalleled performance.",

  "A flagship model representing the pinnacle of Lamborghini's legacy. A marvel of engineering and design, with unparalleled performance.",

  "Iconic design, relentless performance, and unparalleled legacy. A marvel of engineering and design, with unparalleled performance.",

  "Innovation, performance, and striking aesthetics meet. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",
  "Iconic design, relentless performance, and unparalleled legacy. A marvel of engineering and design, with unparalleled performance.",

  "Innovation, performance, and striking aesthetics meet. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",
  "Iconic design, relentless performance, and unparalleled legacy. A marvel of engineering and design, with unparalleled performance.",

  "Innovation, performance, and striking aesthetics meet. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",
  "Iconic design, relentless performance, and unparalleled legacy. A marvel of engineering and design, with unparalleled performance.",

  "Innovation, performance, and striking aesthetics meet. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",
  "Iconic design, relentless performance, and unparalleled legacy. A marvel of engineering and design, with unparalleled performance.",

  "Innovation, performance, and striking aesthetics meet. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",
  "Iconic design, relentless performance, and unparalleled legacy. A marvel of engineering and design, with unparalleled performance.",

  "Innovation, performance, and striking aesthetics meet. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",

  "Innovation, performance, and striking aesthetics meet. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",

  "A super GT offering the best of luxury and performance. A marvel of engineering and design, with unparalleled performance.",
];

const seats = [
  4, 2, 4,2, 2,  4, 2, 2,

  4, 2, 2, 4, 4, 2, 4, 4,

  4, 4, 2, 4, 4, 4, 2, 4,

  4, 2, 4, 2, 4, 2,
];

export { cars, brands, cart, rating, colors, images, descriptions , seats};
