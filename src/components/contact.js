import "../styles/contact.scss";
import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import form from '@emailjs/browser';
import current from '@emailjs/browser';

export function ContactOne(){

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('x', 'x', form.current, 'x')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };




    return(
        <section className="contact_form">

            <p className="info_about_mail_contact">Contact - send email now!</p>
            <form className="contact_form_JS"
                  id="contact_form"
                  method="post"
                  ref={form} onSubmit={sendEmail}>

                <label form="name">Name</label>
                <input  className="input_name" type="text" name="user_name" id="name" pattern=".{3,}" required/>
                <label form="email">Your email</label>
                <input className="input_email" type="email" name="user_email" id="email" required/>
                <label form="message">Message</label>
                <textarea className="text_message" name="message" id="message" required/>
                <input className="input_send" type="submit" value="Send message!" />

            </form>
        </section>


    )

}