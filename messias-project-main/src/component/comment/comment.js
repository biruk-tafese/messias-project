import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './comment.css';

const Comment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [surname, setSurname] = useState('');
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can submit the comment data to your backend or perform any other action
        // For demonstration, we'll just show a confirmation pop-up
        try {
            const serviceId = 'service_bl4j00r'; 
            const templateId = 'template_gdnnvrb';
            const userId = 'QJrefnFA0TIxch3bj'; 
           
            const confirmation = window.confirm(`Submit the comment?`);
            if (confirmation) {

             emailjs.sendForm(serviceId, templateId, form.current, userId)
            .then((result) => {
                window.alert('Email sent successfully');
                // Clear form fields after submission
                setName('');
                setSurname('');
                setEmail('');
                setComment('');
            })
                .then((result) => {
                    window.alert('Email sent successfully');
                    // Clear form fields after submission
                    setName('');
                    setEmail('');
                    setComment('');
                    setSurname('');
                })
                .catch((error) => {
                    window.alert('Something went wrong! please try later.');
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
      
  }
    return (
        <div className="comment-section">
            <h1 className="comment-reply-title">Write your comment!</h1>
            <form ref={form} id="commentform" className="comment-form" action="#" method="get" onSubmit={handleSubmit}>
                <div className="comment-form-name">
                    <input
                        id="name"
                        placeholder="Name *"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="name">First Name</label>
                </div>
                <div className="comment-form-surname">
                    <input
                        id="surname"
                        placeholder="Surname *"
                        name="surname"
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    <label htmlFor="surname">Last Name</label>
                </div>
                <div className="comment-form-email">
                    <input
                        id="email"
                        placeholder="Email *"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="comment-form-comment">
                    <textarea
                        placeholder="Comment *"
                        id="comment"
                        name="comment"
                        cols="45"
                        rows="8"
                        maxLength="65525"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                    <label htmlFor="comment">Comment</label>
                </div>
                <div className="form-submit" ref={form}>
                    <input name="submit" type="submit" id="submit" className="submit" value="Send Comment" />
                </div>
            </form>
        </div>
    );
};

export default Comment;
