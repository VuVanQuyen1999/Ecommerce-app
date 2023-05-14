import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

function Contact() {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title={"Contact Us"} />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.1763408742813!2d105.7168985768553!3d20.945432390632295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452693bb06fe9%3A0xbf8150ee9c1f30f3!2zODYgxJDGsOG7nW5nIEjDsmEgQsOsbmgsIFnDqm4gTmdoxKlhLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1684030802572!5m2!1svi!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between align-items-center">
                <div className="">
                  <h3 className="contact-title">Contact Us</h3>
                </div>
                <div className="">
                  <h3 className="contact-title">Get in touch with us</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
