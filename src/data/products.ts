import { faker } from "@faker-js/faker";

const createRandomProduct = () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
  };
};

export const generateProducts = async () => {
  return Array.from({ length: 10 }).map(() => {
    return createRandomProduct();
  });
};

export const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
};
