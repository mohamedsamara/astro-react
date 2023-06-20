import { Product } from "src/types/product";

interface ProductListProps {
  products: Product[];
}

const ProductList = (props: ProductListProps) => {
  const { products } = props;

  return (
    <ul className="grid grid-cols-1 gap-4 py-2 list-disc list-inside md:grid-cols-3">
      {products.map((product) => (
        <li key={product.id} className="list-none bg-white rounded-md">
          <a
            className="flex flex-col h-full p-2 text-sm"
            href={`/products/${product.id}`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="min-h-[220px] max-h-[220px] mx-auto"
            />
            <p className="py-3 truncate hover:underline">{product.title}</p>
            <span className="block py-2 text-2xl font-semibold">
              ${product.price}
            </span>
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
