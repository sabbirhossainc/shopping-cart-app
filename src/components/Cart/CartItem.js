import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cart/actions";
import { removeQuantity, addQuantity } from "../../redux/products/actions";
import { useState } from "react";

const CartItem = ({ product }) => {
  const { id, name, imgUrl, category, price, quantity, productId } = product;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [disable,setDisable] = useState(false);

  // find product id
  const findProduct = (products) => {
    return products.find((item) => item.id === productId);
  };

  // stop increasing while reaches max Quantity
  const stopIncrease = () => {
    const foundProduct = findProduct(products);
      foundProduct.quantity === 1 ? setDisable(true) : setDisable(false);
  };
  
  // console.log(total);
  const handelIncreaseQuantity = () => {
    dispatch(increaseQuantity(productId));
    dispatch(removeQuantity(id));
    stopIncrease();
  };

  const handelDecreaseQuantity = () => {
    dispatch(decreaseQuantity(productId));
    dispatch(addQuantity(productId, 1));
  };

  const handelRemoveFromCart = () => {
    dispatch(removeFromCart(id));
    dispatch(addQuantity(productId, quantity));
  };

  if (quantity === 0) {
    handelRemoveFromCart();
  }
  
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={`${imgUrl}`} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={handelIncreaseQuantity}
            disabled={disable}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={handelDecreaseQuantity}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart" onClick={handelRemoveFromCart}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
