import React from "react";
import { useSelector } from "react-redux";

const Billing = () => {
  const carts = useSelector((state) => state.carts);
  const discount = 0;
  const vat = 0;
  const subtotal = carts.reduce(
    (subtotal, product) => subtotal + product.price * product.quantity,
    0
  );
  const total = discount+vat+subtotal;

  return (
    <div className="billDetailsCard">
      <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
      <div className="space-y-4">
        {/* <!-- sub total --> */}
        <div className="flex items-center justify-between">
          <p>Sub Total</p>
          <p>
            BDT <span className="lws-subtotal">{subtotal}</span>
          </p>
        </div>
        {/* <!-- Discount --> */}
        <div className="flex items-center justify-between">
          <p>Discount</p>
          <p>
            BDT <span className="lws-discount">{discount}</span>
          </p>
        </div>
        {/* <!-- VAT --> */}
        <div className="flex items-center justify-between">
          <p>VAT</p>
          <p>
            BDT <span className="vat">{vat}</span>
          </p>
        </div>
        {/* <!-- Total --> */}
        <div className="flex items-center justify-between pb-4">
          <p className="font-bold">TOTAL</p>
          <p className="font-bold">
            BDT <span className="lws-total">{total}</span>
          </p>
        </div>
        <button className="placeOrderbtn">place order</button>
      </div>
    </div>
  );
};

export default Billing;
