import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './formContact.css'

function FormContact() {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_g6wn8sw', 'template_ggo7v6s', form.current, 'edxlJbjSaq5UlFXgS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (

    <form ref={form} onSubmit={sendEmail} className='field'>
      <label>Nombre</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Consulta</label>
      <textarea name="message" />
      <input type="submit" value="Enviar" />
    </form>

        
    );
};

export default FormContact;