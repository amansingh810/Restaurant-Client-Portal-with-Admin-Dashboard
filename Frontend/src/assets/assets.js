import food1 from './close-up-delicious-chicken-meal (1).jpg'
import food2 from './3886.jpg'
import food3 from './close-up-delicious-chicken-meal.jpg'
// import stripe_logo from './stripe_logo.png'

export const categoryItem = [
  { category_title: "All" },
  { category_title: "Spaghetti" },
  { category_title: "Pizza" },
  { category_title: "Rice" },
  { category_title: "Noodles" },
  { category_title: "Chicken" },
  { category_title: "Drinks" },
]

// export const assets = {
//   stripe_logo,
// }

export const product = [
  {
    _id: "a",
    name: "Special Fried Rice With Chicken",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: food1,
    category: "Rice",
    date: 1716634345448,
  },
  {
    _id: "ab",
    name: "Freshly Baked Pepperoni Pizza",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: food2,
    category: "Pizza",
    date: 1716621345448,
  },
  {
    _id: "ac",
    name: "Delicious Stir Fry Veggie Noodles",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    image: food3,
    category: "Noodles",
    date: 1716234545448,
  },
]
