import CartItem from "./CartItem";
import Billing from "./Billing";
import { useSelector } from "react-redux";

function Cart() {
  const carts  = useSelector((state) => state.carts);
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          {/* Cart Item */}
          {carts.length > 0 ? (
          <div className="space-y-6">
            {carts.map((product) => (
            <CartItem product={product} key={product.id}  />
            
          ))}
          </div>
        ) : (
          <div>No Product Found In Your Cart!</div>
        )}
          {/* Bill Details */}
          <div>
            <Billing />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
