import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import contactMap from "../../../../asset/images/contact_sectino_map.png";

const Contact = () => {
  return (
    <div class="max-w-screen-lg px-4 mb-20" id="contact">
      <div class="flex flex-col-reverse md:flex-row-reverse gap-10">
        <div className="flex-1 flex justify-center overflow-hidden">
          <img src={contactMap} class="max-w-sm w-full rounded-lg" alt="" />
        </div>
        <div className="flex-1 flex-col justify-center px-4">
          <h1 class="text-5xl font-bold">Contact Us</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <div className="flex gap-4 mb-4">
            <FontAwesomeIcon icon={faLocation} className="text-[20px] mt-2" />
            <span>
              <h3>Address</h3>
              <address>350 Flatbush ave New York, NY 10018 USA.</address>
            </span>
          </div>

          <div className="flex gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-[20px] mt-2" />
            <span>
              <h3>Phone</h3>
              <p>123-456-789, 234-432-456</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
