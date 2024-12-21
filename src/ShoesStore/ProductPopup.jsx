import { Button, Modal } from "flowbite-react";
import React from "react";
import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideProductDetails } from "../Redux/Reducer/productReducer";

const ProductPopup = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer);
  const { selectedProduct, isPopupVisible } = product;
  console.log("selectedProduct: ", selectedProduct);
  const onCloseFunction = () => {
    dispatch(hideProductDetails());
  };
  return (
    <Modal
      show={isPopupVisible}
      onClose={() => {
        onCloseFunction();
      }}
    >
      <Modal.Header>Product Details</Modal.Header>
      <Modal.Body>
        <div>
          <img src={selectedProduct?.image} alt="image of product" />
          <h2 className="text-3xl font-bold capitalize -mt-16">
            {selectedProduct?.name}
          </h2>
          <p className="py-5">{selectedProduct?.description}</p>
          <p>
            Price:
            <span className="text-green-500 text-xl ml-2">
              ${selectedProduct?.price}
            </span>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          color="failure"
          onClick={() => {
            onCloseFunction();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductPopup;
