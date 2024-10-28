export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  createAt: string;
  imageUrl: string;
};

export type ProductProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  createAt: string;
  onSubmit: (id: number) => void;
};

export const ProductData = [
  {
    id: 1,
    title: "Head Phone",
    description: "This is a sample product.",
    price: 4999,
    createAt: "1st Jan 2023",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp",
  },
  {
    id: 2,
    title: "Steel Bottle",
    description: "This is a sample product.",
    price: 299,
    createAt: "1st Jan 2024",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp",
  },
  {
    id: 3,
    title: "Chair",
    description: "This is a sample product.",
    price: 9999,
    createAt: "31st Dec 2024",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp",
  },
  {
    id: 4,
    title: "Wooden Table",
    description: "This is a sample product.",
    price: 5000.0,
    createAt: "23rd Apr 2024",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp",
  },
  {
    id: 5,
    title: "Flower Vase",
    description: "This is a sample product.",
    price: 799,
    createAt: "1st Aug 2024",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp",
  },
  {
    id: 6,
    title: "Watch",
    description: "This is a beautiful watch.",
    price: 7999,
    createAt: "1st May 2024",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/1.webp",
  },
  {
    id: 7,
    title: "Head Phone",
    description: "This is a sample product.",
    price: 4999,
    createAt: "1st Jan 2023",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp",
  },
  {
    id: 8,
    title: "Steel Bottle",
    description: "This is a sample product.",
    price: 299,
    createAt: "1st Jan 2024",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp",
  },
  {
    id: 9,
    title: "Chair",
    description: "This is a sample product.",
    price: 9999,
    createAt: "31st Dec 2024",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp",
  },
  {
    id: 10,
    title: "Wooden Table",
    description: "This is a sample product.",
    price: 5000.0,
    createAt: "23rd Apr 2024",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp",
  },
  {
    id: 11,
    title: "Flower Vase",
    description: "This is a sample product.",
    price: 799,
    createAt: "1st Aug 2024",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp",
  },
  {
    id: 12,
    title: "Watch",
    description: "This is a beautiful watch.",
    price: 7999,
    createAt: "1st May 2024",
    imageUrl:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/1.webp",
  },
];
