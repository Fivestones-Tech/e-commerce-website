import DefaultLayout from "../../layouts/DefaultLayouts/DefaultLayout";
import './Contact.css';
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useContext } from "react";

const ContactPage = () => {
    // ref
    const formRef = useRef(null);
    const EmailRef = useRef(null);
    const context = useContext(ThemeContext);

    // States
    const [message, setMessage] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(true);

    // sending message with valid email function
    const validEMail = () => {
        const Email_Ref = EmailRef.current;
        const emailPattern = /^[^\s@]{6,}@[^\s@]+\.[^\s@]+$/;
        let theEmail = Email_Ref.value;
        let validEmail = emailPattern.test(theEmail);
        setIsEmailValid(validEmail);
    }

    const sendmail  = async(e) => {
        e.preventDefault();
        setLoading(true);
        const form = formRef.current;

        // sending the mail
        try{
           if (isEmailValid) {
            await emailjs.sendForm('srvice_fxvcxyj', 'template_vggxabq', form, 'CC6qrRtlQzRCdePxS');
            setLoading(false);
            setSuccessful(true);
            setMessage("Message sent Successfully.");
            e.target.reset();
           }
           else{
            throw new Error("Your Email is Invalid try using normal Email");
           }
        //    catching the error
        } catch (error){
            setLoading(false);
            setSuccessful(false);
            if(!isEmailValid){
                setMessage(error.message);
            }
            else if(isEmailValid){
                setMessage("Theirs is an error sending your mail check your connection");
            }
        }
    }


    const Loading = () => {
        return (
            <div className="loadingio-spinner-rolling-vc8zers97pd"><div className="ldio-zlxdtiiq8cb">
            <div></div>
            </div></div>
        )
    }


    return ( 
            <DefaultLayout>
                <div className="contact-container" style={{color: context.theme === 'light' ? null : '#FFF'}}>
                    <h1>Contact Us</h1>
                    <h2>Get in Touch</h2>

                <form ref={formRef} action="" className={context.theme === 'light' ? "contact-form" : "contact-form darkmode-contact-form"} onSubmit={sendmail}>

                    <input type="text" name="name" id="" placeholder="Your Name" required/>

                    <input ref={EmailRef} type="email" onBlur={validEMail} name="email" id="" placeholder="Your Email" required/>
                    {!isEmailValid && <p style={{color:"red"}}>Please enter a valid email address</p>}

                    <input type="text" name="subject" id="subject" placeholder="Subject" required/>

                    <textarea name="message" id="" cols={30} rows={10} placeholder="Message" required></textarea>

                    {
                        loading ? <Loading /> : <p style={{color: successful ?  "rgb(100, 195, 100)" : "red"}} className="message">{message}</p>
                    }

                    <button className={`btn ${context.theme === 'light' ? "btn-outline-dark" : "btn-outline-light"}`} type="submit">Send Message</button>
                </form>

                    <div className="contact-information" style={{color: context.theme === 'light' ? null : '#FFF'}}>
                        <h2>Contact Informations</h2>
                    <ol>
                        <li> <span>Phone: </span>+2349083387814</li>
                        <li> <span>Email: </span>Folaweogunnaike@gmail.com</li>
                    </ol>
                    </div>
                </div>
            </DefaultLayout>
     );
}
 
export default ContactPage;