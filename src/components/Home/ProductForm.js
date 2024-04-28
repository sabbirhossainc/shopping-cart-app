import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/actions";

const ProductForm = () => {
  const [productData, setProductData] = useState({});
  const dispatch = useDispatch();

  // Reset form values
  const name = useRef("");
  const imgUrl = useRef("");
  const category = useRef("");
  const price = useRef("");
  const quantity = useRef("");

  const reset = () => {
    name.current.value = "";
    imgUrl.current.value = "";
    category.current.value = "";
    price.current.value = "";
    quantity.current.value = "";
  };

  const handelChange = (e) => {
    const newProductData = { ...productData };
    newProductData[e.target.name] = e.target.value;
    setProductData(newProductData);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // dispatch(addProduct({ ...productData, id: size + 1 }));
    dispatch(addProduct(productData));
    reset();
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={handelSubmit}
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            name="name"
            onChange={(e) => handelChange(e)}
            ref={name}
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="category"
            onChange={(e) => handelChange(e)}
            ref={category}
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            name="imgUrl"
            onChange={(e) => handelChange(e)}
            ref={imgUrl}
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              name="price"
              min={0}
              onChange={(e) => handelChange(e)}
              ref={price}
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              name="quantity"
              min={0}
              onChange={(e) => handelChange(e)}
              ref={quantity}
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
