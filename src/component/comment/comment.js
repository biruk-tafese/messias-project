// Comment.js
import React, { useState } from 'react';
import './comment.css';

const Comment = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can submit the comment data to your backend or perform any other action
        // For demonstration, we'll just show a confirmation pop-up
        const confirmation = window.confirm(`${name} ${surname} comment has been submitted!`);
        if (confirmation) {
            // Clear form fields after submission
            setName('');
            setEmail('');
            setComment('');
            setSurname('');
        }
    };
    return (
        <div className="comment-section">
            <h1 className="comment-reply-title">Write your comment!</h1>
            <form id="commentform" className="comment-form" action="#" method="get" onSubmit={handleSubmit}>
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
                    <label htmlFor="name">FirstName</label>
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
                    <label htmlFor="surname" >LastName</label>
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
                    <label htmlFor="email" >Email</label>
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
                <div className="form-submit">
                    <input name="submit" type="submit" id="submit" className="submit" value="Send Comment" />
                </div>
            </form>
        </div>
    );
};

export default Comment;
