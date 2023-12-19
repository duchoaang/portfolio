import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [senderName, setSenderName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const mailtoLink = `mailto:hoangbrato@gmail.com?subject=Message From ${senderName}&body=${message}`;
        window.location.href = mailtoLink;
    };

    return (
    
           <section id ="contact">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={senderName} onChange={(e) => setSenderName(e.target.value)} required />
                    </label>
                    <label>
                        Message:
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </label>
                    <button><input type="submit" value="Send me" /></button>
                </form>
           </section>

    );
};

export default Contact;