import React from 'react';
import './Orders.css'; // Import CSS file for styling
import Navbar from './Navbar';
const Orders = () => {
  // Sample data for orders
  <Navbar />
  const orders = [
    {
      orderId: 'ORD001',
      date: '2024-04-22',
      amount: '₹1500',
      items: ['Dog Food', 'Cat Food'],
    },
    {
      orderId: 'ORD002',
      date: '2024-04-23',
      amount: '₹800',
      items: ['Cat Food', 'Turtle Food'],
    },
    {
      orderId: 'ORD003',
      date: '2024-04-24',
      amount: '₹2000',
      items: ['Bird Cage', 'Hamster Wheel'],
    },
    {
      orderId: 'ORD004',
      date: '2024-04-25',
      amount: '₹950',
      items: ['Cat Food', 'Dog Leash'],
    },
  ];

  return (
    <div className="orders-container">
      <h2 className="orders-header">Your Orders</h2>
      <ul className="orders-list">
        {orders.map((order) => (
          <li key={order.orderId} className="order-item">
            <div className="order-header">
              <span className="order-id">Order ID: {order.orderId}</span>
              <span className="order-date">Date: {order.date}</span>
            </div>
            <div className="order-body">
              <div className="order-amount">Amount: {order.amount}</div>
              <div className="order-items">
                Items:
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index} className="order-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
