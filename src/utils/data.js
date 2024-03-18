const cars = [
  {
    id: "1",
    name: "Bugatti Chiron",
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
    name: "Ferrari F8 Tributo",
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
    colors: ["red", "yellow", "black"],
    mileagePerGas: "4KM/1-lt",
  },
  {
    id: "3",
    name: "Lamborghini Aventador",
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
    name: "Porsche 911 Turbo S",
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
    name: "McLaren 720S",
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
    name: "Aston Martin DBS Superleggera",
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

export  { cars, brands, cart };
