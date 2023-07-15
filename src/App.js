import React, { useState } from 'react';

const OrderForm = () => {
  const [tableNumber, setTableNumber] = useState('');
  const [orderId, setOrderId] = useState('');
  const [price, setPrice] = useState('');
  const [meal, setMeal] = useState('');
  const [submittedOrder, setSubmittedOrder] = useState(null);

  const handleTableNumberChange = (event) => {
    setTableNumber(event.target.value);
  };
  

  const handleOrderIdChange = (event) => {
    setOrderId(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleMealChange = (event) => {
    setMeal(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create an order object using the collected data
    const order = {
      tableNumber: tableNumber,
      orderId: orderId,
      price: price,
      meal: meal
    };

    // Set the submitted order in state
    setSubmittedOrder(order);

    // Reset the form
    setTableNumber('');
    setOrderId('');
    setPrice('');
    setMeal('');
  };

  return (
    <div>
      <h1>Restaurant Order Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="tableNumber">Table Number:</label>
          <select
            id="tableNumber"
            value={tableNumber}
            onChange={handleTableNumberChange}
          >
            <option value="">Select table number</option>
            <option value="1">Table 1</option>
            <option value="2">Table 2</option>
            <option value="3">Table 3</option>
            <option value="4">Table 4</option>
          </select>
        </div>
        <div>
          <label htmlFor="orderId">Order ID:</label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={handleOrderIdChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div>
          <label htmlFor="meal">Meal:</label>
          <input
            type="text"
            id="meal"
            value={meal}
            onChange={handleMealChange}
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>

      {submittedOrder && (
        <div>
          <h2>Submitted Order</h2>
          <p>Table Number: {submittedOrder.tableNumber}</p>
          <p>Order ID: {submittedOrder.orderId}</p>
          <p>Price: {submittedOrder.price}</p>
          <p>Meal: {submittedOrder.meal}</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
