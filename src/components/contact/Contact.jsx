import './Contact.css'
import Title from "../../constants/titles/Title"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {



    emailjs.sendForm(
      'service_2ia13ci', 
    'template_l58bn6b',
     form.current, 
     'o4_frJGWhJNKy7QSr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='Contact__Container'id='Contact'>
     
<div className='Contact__Container-bg'>
<div className='Contact__Container-title'> <Title Title={"CONTACT"}/>
<p className='Contact__Container-p'>Feel free to Contact me by submitting the form below and I will get back to
 you as soon as possible</p></div>

 <div className='Contact__Container__form-container'>
    <form className='Contact__Container__form success' onSubmit={sendEmail} ref={form}>
        <div className='Contact__Container__form-feild'>
            <label className='Contact__Container__form-label' htmlFor="name">Name</label>
            <input required
             placeholder="Enter Your Name"
              type="text" 
              className="Contact__Container__form-input"
               name="name"
                id="name" />
        </div>
        <div className='Contact__Container__form-feild'>
        <label className='Contact__Container__form-label' htmlFor="email">Email</label>
            <input required
             placeholder="Enter Your Email"
              type="email" 
              className="Contact__Container__form-input"
               name="email"
                id="email" />
        </div>
        <div className='Contact__Container__form-feild'>
        <label className='Contact__Container__form-label' htmlFor="Message">Message</label>
        <textarea required
         cols="30"
          rows="10" 
          className="Contact__Container__form-input" 
          placeholder="Enter Your Message" 
          name="message" 
          id="message"></textarea>
        </div>
        <input type="submit" value="Send" className="submit" />

    </form>
 </div>
</div>
    </div>
  )
}
