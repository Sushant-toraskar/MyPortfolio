import React,{useState} from "react";
import '../components/contact.css'
export default function Contact() {
  const [message,setMessage] = useState('');
  const submit=()=>{
    alert('Message is saved successfully. we will contact you soon!!!')
  }
  return (
    <section id="contact" className="relative">
      <div className="Contact-container">
        <div className="left-container-contact">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60271.512937733016!2d73.09512980919702!3d19.240158420308585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796f457b1b76f%3A0x35df463ca445bd26!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1643722663501!5m2!1sen!2sin"
          />
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60271.512937733016!2d73.09512980919702!3d19.240158420308585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796f457b1b76f%3A0x35df463ca445bd26!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1643722663501!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" loading="lazy"></iframe> */}
          {/* <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                97 Warren St. <br />
                New York, NY 10007
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                reedbarger@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div> */}
        </div>
        <form
          netlify
          name="contact"
          className="right-container-contact">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="input-container">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
            />
          </div>
          <div className="input-container">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
            />
          </div>
          <div className="input-container">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="input-field input-field-text-area"
                          />
          </div>
          <button
            type="submit"
            onClick={()=>submit()}
            className="submit-form-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}