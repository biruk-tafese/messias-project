import React, { useState } from 'react';
import "./DonationForm.css";
import Footer from '../component/Footer/footer';
const DonationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [frequency, setFrequency] = useState('one-time');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, such as sending data to a server or performing client-side validation
        console.log('Submitted:', {
            name,
            email,
            phone,
            address,
            amount,
            currency,
            frequency,
            cardNumber,
            expirationDate,
            cvv,
            billingAddress,
            paymentMethod,
            message
        });
        // Clear form fields after submission
        clearFormFields();
    };

    const clearFormFields = () => {
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setAmount('');
        setCurrency('USD');
        setFrequency('one-time');
        setCardNumber('');
        setExpirationDate('');
        setCVV('');
        setBillingAddress('');
        setPaymentMethod('credit-card');
        setMessage('');
    };

    return (
        <>
        <div className="donation-form-container">
            <h2 className="form-title">Make a Donation</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name" className="label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="label">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="label">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount" className="label">Donation Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="currency" className="label">Currency:</label>
                    <select
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="input"
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        {/* Add more currency options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="frequency" className="label">Frequency:</label>
                    <select
                        id="frequency"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="input"
                    >
                        <option value="one-time">One-time</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        {/* Add more frequency options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="paymentMethod" className="label">Payment Method:</label>
                    <select
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="input"
                    >
                        <option value="credit-card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        {/* Add more payment method options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="label">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input"
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Submit Donation</button>
            </form>
        </div>
        <Footer />
        </>
    );
    
};

export default DonationForm;
