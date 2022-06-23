import { Product } from "src/types/product";

interface ProductListProps {
  products: Product[];
}

const ProductList = (props: ProductListProps) => {
  const { products } = props;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-disc list-inside py-2">
      {products.map((product) => (
        <li key={product.id} className="list-none bg-white rounded-md">
          <a
            className="flex flex-col justify-center items-center h-full p-2 text-sm hover:underline"
            href={`/products/${product.id}`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="min-h-[200px] max-h-[220px] mx-auto"
            />
            <p className="py-3">{product.title}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
