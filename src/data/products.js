import { images } from "../images.js";

export const products = [
  {
    id: 1,
    name: "Caffe Mocha",
    subtitle: "Deep Foam",
    category: "Latte",
    price: 4.53,
    rating: 4.8,
    reviews: 230,
    image: images.caffeMocha,
    description:
      "A smooth espresso blended with silky steamed milk and rich chocolate, finished with creamy foam.",
  },
  {
    id: 2,
    name: "Flat White",
    subtitle: "Espresso",
    category: "Latte",
    price: 3.53,
    rating: 4.8,
    reviews: 184,
    image: images.flatWhite,
    description:
      "A balanced double espresso with velvety microfoam for a beautifully smooth coffee.",
  },
  {
    id: 3,
    name: "Cappuccino",
    subtitle: "Classic Foam",
    category: "Cappuccino",
    price: 4.15,
    rating: 4.9,
    reviews: 156,
    image: images.cappuccino,
    description:
      "Bold espresso, steamed milk and airy foam in a timeless coffeehouse classic.",
  },
  {
    id: 4,
    name: "Americano",
    subtitle: "Bold & Smooth",
    category: "Americano",
    price: 2.85,
    rating: 4.7,
    reviews: 122,
    image: images.americano,
    description:
      "Rich espresso softened with hot water for a clean, aromatic finish.",
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    subtitle: "Caramel Drizzle",
    category: "Macchiato",
    price: 4.85,
    rating: 4.9,
    reviews: 201,
    image: images.flatWhite,
    description:
      "Espresso and steamed milk layered with sweet caramel.",
  },
  {
    id: 6,
    name: "Iced Latte",
    subtitle: "Cold & Creamy",
    category: "Latte",
    price: 3.95,
    rating: 4.8,
    reviews: 98,
    image: images.flatWhite,
    description:
      "Chilled milk poured over espresso and ice. Refreshing and mellow.",
  },
];

export const categories = [
  "All Coffee",
  "Macchiato",
  "Latte",
  "Americano",
  "Cappuccino",
];

export const money = (amount) =>
  `$ ${Number(amount).toFixed(2)}`;