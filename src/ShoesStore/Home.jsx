import axios from "axios";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { showProductDetails } from "../Redux/Reducer/productReducer";
import cartReducer, { addProduct } from "../Redux/Reducer/cartReducer";

const Home = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const dispatch = useDispatch();
  const arrProductStore = useSelector((state) => state.cartReducer.cart);
  console.log("arrProductStore: ", arrProductStore);

  const getAllProduct = () => {
    axios({
      url: "https://apistore.cybersoft.edu.vn/api/Product",
      method: "GET",
    })
      .then((response) => {
        // console.log("response: ", response.data.content);
        setArrProduct(response.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const renderProduct = () => {
    const shortProdArr = arrProduct.slice(0, 18); // loại data rác
    return shortProdArr?.map((item) => {
      return (
        <div key={item.id} className="bg-orange-100/50 p-4 rounded-md">
          <img src={item.image} alt={item.name} />
          <h3 className="title2 capitalize font-semibold text-xl">
            {item.name}
          </h3>
          <p>
            Price: <span className="text-green-500 text-lg">${item.price}</span>
          </p>
          <div className="my-4 focus:outline-none flex justify-center">
            <Button
              color="gray"
              onClick={() => {
                handleSeeDetails(item);
              }}
            >
              See Details
            </Button>
            <Button
              className="ml-4"
              color="blue"
              onClick={() => {
                handleAddProduct(item);
              }}
            >
              <HiShoppingCart className="mr-2 h-5 w-5" /> Buy Now
            </Button>
          </div>
        </div>
      );
    });
  };

  const handleSeeDetails = (product) => {
    const action = showProductDetails(product);
    dispatch(action);
  };

  const handleAddProduct = (product) => {
    const action = addProduct(product);
    dispatch(action);
  };

  return (
    <>
      <h1 className="title text-center text-5xl text-indigo-400 py-10">
        Shoe Shop Redux
      </h1>
      {/* Button Cart */}
      <div className="flex justify-end text-3xl fixed top-10 right-12 z-20">
        <NavLink to={"/cart"}>
          <Button gradientDuoTone="tealToLime">
            <HiShoppingCart className=" h-6 w-6 text-indigo-500" />
            <span className="text-sm italic text-red-500 absolute bottom-0 left-1/2 ml-2">
              {arrProductStore.reduce(
                (total, item) => total + item.orderQuantity,
                0
              )}
            </span>
          </Button>
        </NavLink>
      </div>
      {/* Product List */}
      <div className="grid grid-cols-2 md:grid-cols-3  gap-6 mt-12 max-w-5xl container">
        {renderProduct()}
      </div>
    </>
  );
};

export default Home;
