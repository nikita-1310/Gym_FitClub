import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_h7lqcpa', 'template_e5cpx85', form.current, 'y1BKKlrE0xY16fdz9')
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result)=>{
            console.log(result.text);
        },
        (error)=>{
            console.log(error.text);
        }
        );
    };

  return (
    <div className="join" id="join-us">
        <div className="left-j">
        <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US</span>
            </div>
        </div>

        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email address' />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
