import { Button, Table } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateQuantity } from "../Redux/Reducer/cartReducer";

const Cart = () => {
  const arrCart = useSelector((state) => state.cartReducer.cart);
  console.log("arrCart: ", arrCart);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id, quantity) => {
    const payload = { id: id, quantity: quantity };
    dispatch(updateQuantity(payload));
  };

  const renderTrCart = () => {
    return arrCart.map((item) => {
      return (
        <Table.Row
          key={item.id}
          className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center"
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.id}
          </Table.Cell>
          <Table.Cell>
            <img src={item.image} alt="" width={100} />
          </Table.Cell>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell className="flex gap-5 items-center justify-center my-8">
            <Button
              color="blue"
              onClick={() => {
                console.log("giam sl");
                handleUpdateQuantity(item.id, -1);
              }}
            >
              -
            </Button>
            {item.orderQuantity}
            <Button
              color="blue"
              onClick={() => {
                console.log("tang sl");
                handleUpdateQuantity(item.id, 1);
              }}
            >
              +
            </Button>
          </Table.Cell>
          <Table.Cell>{item.price.toLocaleString()}</Table.Cell>
          <Table.Cell>
            {(item.orderQuantity * item.price).toLocaleString()}
          </Table.Cell>
          <Table.Cell className="flex items-center justify-center">
            <Button
              color="failure"
              onClick={() => {
                dispatch(deleteProduct(item.id));
              }}
            >
              Delete
            </Button>
          </Table.Cell>
        </Table.Row>
      );
    });
  };
  return (
    <>
      <h1 className="title text-indigo-400 text-4xl text-center font-semibold py-10">
        Cart
      </h1>
      <div className="overflow-x-auto container">
        <Table>
          <Table.Head className="text-center capitalize text-black/60 text-sm">
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Subtotal</Table.HeadCell>
            <Table.HeadCell>{/* <span>Edit</span> */}</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">{renderTrCart()}</Table.Body>
        </Table>
      </div>
    </>
  );
};

export default Cart;
