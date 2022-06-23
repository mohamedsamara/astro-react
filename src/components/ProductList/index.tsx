import { Product } from "src/types/product";

interface ProductListProps {
  products: Product[];
}

const ProductList = (props: ProductListProps) => {
  const { products } = props;

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 list-disc list-inside py-2">
      {products.map((product) => (
        <li key={product.id} className="py-2">
          <a className="hover:underline" href={`/products/${product.id}`}>
            {product.title}
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
