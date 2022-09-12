import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact-container">
        <div className="contact">
            <h1 className="contact-info">Tell us, how can we help you?</h1>
            <input className="email-written" type="mail" placeholder="Email" />
            <input className="email-context" type="text" placeholder="Subject" />
            <textarea className="written-message" placeholder="Message" />
            <button className="btn-contact">Send</button>
        </div>
    </div>


  )
}

