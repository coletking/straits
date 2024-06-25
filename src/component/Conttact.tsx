import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/contact.css'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getRandomString } from "../Services/Utility";
import { database } from "../firebase";
import { toast } from "react-toastify";

function Conttact() {
  const [name, setName] =  useState("")
  const[email, setemail] =  useState("")
  const [subject, setSubject] =  useState("")
  const [message, setMessage] =  useState("")
  const [phone, setphone] =  useState("")
  const [loading, setloading] = useState(false)
  const handeleSend = async()=>{
    if(!name || !phone || !message || !subject ){
      toast.error("Enter all required fill")
      return
    }
    setloading(true)
    const data = {
      id: getRandomString(35, "qwertyuiopasdfhjklzxcvbnmQWERTYUIOPASDFHJKLZXCVBNM234567890"),
      name,
      phone,
      subject,
      email,
      message,
      isRead:false,
      createdAt: serverTimestamp(),
    };
    await setDoc(doc(database, "contact", data.id), data);
    toast.success("Message Sent Successfully");
    setloading(false)
  }
  return (
    <div>
        <Navbar/>
      <section className="contact-page-sec bg-gray-800">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-center item-center">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>address</h2>
                    <span> 539 E 56th Ave</span>
                    <span>Denver, CO 80216
</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail</h2>
                    <span>info@stringspro.store</span>
                    <span>contact@strinspro.store</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between item-center">
            <div className="col-md-8 w-full">
              <div className="contact-page-form">
                <h2 className="text-white pl-3">Get in Touch</h2>
                <div  onSubmit={handeleSend}>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          onChange={(event) =>setName(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          required
                          onChange={(event) =>setemail(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phone"
                          onChange={(event) =>setphone(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          onChange={(event) =>setSubject(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea
                          placeholder="Write Your Message"
                          name="message"
                          onChange={(event) =>setMessage(event.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <button disabled={loading} onClick={handeleSend}>
                      {loading ? "Please wait ... " : "Send Now" }
                      </button>
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="md:w-1/3 w-full "> {/* Tailwind class to set column width */}
      {/* <div className="contact-page-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355"
          width="100%" // set width to 100% of the parent element
          height="450" // height of the iframe
          frameBorder="0" // no border
          style={{ border: 0 }} // inline styling to set border to 0
          allowFullScreen // allow fullscreen mode
          aria-label="Google Maps location of Chandigarh" 
          title="enter address"// add accessibility
        />
      </div> */}
    

            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Conttact;
