import { Product } from "src/types/product";

interface ProductProps {
  product: Product;
}

const Product = (props: ProductProps) => {
  const { product } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-md p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[420px] mx-auto"
        />
      </div>
      <div className="bg-white rounded-md p-6">
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <p className="text-base text-gray-600 my-6">{product.description}</p>
        <span className="block text-2xl font-semibold">${product.price}</span>
      </div>
    </div>
  );
};

export default Product;
