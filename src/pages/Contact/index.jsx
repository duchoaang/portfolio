import React, { useState } from 'react';
import './Contact.css';
import styled from 'styled-components';
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
             <SAboutMe>Contact Me</SAboutMe>

<div id="line"></div>
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
const SAboutMe = styled.h2`
  display: flex;
  margin-top: 8%;
  font-size: 35px;
  font-weight: bold;
  justify-content: center;
`;
export default Contact;