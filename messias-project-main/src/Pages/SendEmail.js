import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const SendEmail = () => {
    const form = useRef();

    const SendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r9nwrki','template_r6r6kye',form.current.form,'suxeMKNbDGm9j1K9JAAgX')
        .then((result) => {
            window.alert("Email sent sucessfully");
        }, (error)=> {
            window.alert('something went wrong!')
        })
    }
}

export default SendEmail
