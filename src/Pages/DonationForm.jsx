import React, { useState } from 'react';
import "./DonationForm.css";

const DonationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, such as sending data to a server or performing client-side validation
        console.log('Submitted:', { name, email, amount, message });
        // Clear form fields after submission
        setName('');
        setEmail('');
        setAmount('');
        setMessage('');
    };

    return (
        <div className="donation-form-container">
            <h2 className="form-title">Donation Registration</h2>
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
                        placeholder='Christain mark'
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
                        placeholder='example@gmail.com'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount" className="label">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="input"
                        placeholder='$10'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="label">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input"
                        placeholder='God Bless you'
                    />
                </div>
                <button type="submit" className="submit-button">Submit Donation</button>
            </form>
        </div>
    );
};

export default DonationForm;
