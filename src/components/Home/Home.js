import { useSelector } from "react-redux";

import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <main className="py-16">
      <div className="productWrapper">
        {/*products container*/}
        {products.length > 0 ? (
          <div className="productContainer" id="lws-productContainer">
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div>No product found! But you can add.</div>
        )}
        {/*Product Input Form*/}
        <div>
          <ProductForm />
        </div>
      </div>
    </main>
  );
};
export default Home;
