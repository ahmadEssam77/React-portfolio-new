import { useRef } from 'react';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './index.scss';

const Contact = () => {


    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    
    useEffect( () => {
        setTimeout(() => {
           setLetterClass('text-animate-hover')
       }, 3000);
   }, [])

   const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kz3k0j8', 'template_55mk9hp', refForm.current, 'HG8Uup7yWXHhY_ZKT')
        .then(() => {
            alert('Message successfully sent!!');
            window.location.reload(false);
        }, () => {
            alert('Failed to send the message, pls try again');
        });
   };


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArry={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                        idx={15} 
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or large projects.
                        However, if you have other request or question. Don't hesitate to contact me using the below form.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" placeholder='subject' name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Ahmad Essam, 
                    <br />
                    Egypt
                    <br />
                    Pyramids Gardens, gate one
                    <br />
                    <span>ahmad77essam@gmail.com</span>
                </div>
                <div className='map-wrap'>
                <MapContainer center={[44.96366, 19.61045]} zoom={13} >
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[44.96366, 19.61045]}>
                        <Popup>
                            Essam lives here, come over for a cup of coffee :).
                        </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
        
    );
}

export default Contact;