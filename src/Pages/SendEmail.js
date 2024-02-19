import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const SendEmail = () => {
    const form = useRef();

    const SendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hn9eulu','template_pq3ydtf',form.current.form,'5tbTxztxOQAJA33aB')
        .then((result) => {
            window.alert("Email sent sucessfully");
        }, (error)=> {
            window.alert('something went wrong!')
        })
    }
}

export default SendEmail
