import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import contactMap from "../../../../asset/images/contact_sectino_map.png";

const Contact = () => {
  return (
    <div className="max-w-screen-lg px-4 mb-20" id="contact">
      <div className="flex flex-col-reverse md:flex-row-reverse gap-10">
        <div className="flex-1 flex justify-center overflow-hidden">
          <img src={contactMap} className="max-w-sm w-full rounded-lg" alt="" />
        </div>
        <div className="flex-1 flex-col justify-center px-4">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="py-6">
            Our customer is out most priority. If you need any help our customer service provider are hear 24/7.
          </p>

          <div className="flex gap-4 mb-4">
            <FontAwesomeIcon icon={faLocation} className="text-[20px] mt-2" />
            <span>
              <h3>Address</h3>
              <address>Rasulbag, Mohkhali, Dhaka.</address>
            </span>
          </div>

          <div className="flex gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-[20px] mt-2" />
            <span>
              <h3>Phone</h3>
              <p>01717-070253, 095888813</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
