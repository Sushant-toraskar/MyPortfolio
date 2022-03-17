import React from "react";
import { testimonial } from "./data";
import '../components/testimonials.css'

export default function Testimonials() {

  return (
    <section id="testimonials">
      <div className="test-container">
      <i class="uil uil-users-alt"></i>
        <h1 className="text Main-title">
          Client Testimonials
        </h1>
        <div className="test-content-container">
          {testimonial.map((testimonial) => (
            <div className="responce-container">
                <i class="uil uil-arrow"></i>
                <p>{testimonial.quote}</p>
                <div className="lower-container-test">
                  <div className="inner-lower-container">
                  <div className="lower-image-out">
                  <div className="lower-image">
                    
                    </div>
                    </div>
                   <div className="lower-text">
                       <div>
                     <span className="text client-name">
                       {testimonial.name}
                     </span>
                     </div>
                     <div>
                     <span className="text company-name">
                        ({testimonial.company})
                     </span>
                     </div>
                   </div>
                 </div>
                 </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}