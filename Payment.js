import React, { useState } from 'react';
import './Payment.css'; // Import CSS file for styling

const Payment= () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call or payment processing
    setTimeout(() => {
      alert('Payment successful!');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div>
       
    <div className="payment-container">
        
      <h2 className="payment-header">Secure Payment</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
        <img src='./Images/payment.gif' alt='pet'></img>
        <div className="amount-display">
          <p>Amount to be paid: ₹500</p>
        </div>
          <label className="form-label">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="form-input"
            placeholder="Enter card number"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Expiry</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="form-input"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="form-input"
            placeholder="CVV"
            required
          />
        </div>
        <button type="submit" className="pay-button" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default Payment;
