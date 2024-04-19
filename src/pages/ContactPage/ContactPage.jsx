import React from "react";
import style from "./ContactPage.module.css";
import phone from "../../assets/phone2.png";
import email from "../../assets/mail2.png";
import location from "../../assets/location2.png";
import fb from "../../assets/facebook.png";
import twiter from "../../assets/twiter.png";
import insta from "../../assets/insta.png";
import Form from "../../components/Form/Form";
import car from "../../assets/contactCar.svg";
import { useTheme } from "../../contexts/ThemeProvider";


const ContactPage = () => {
  const { theme } = useTheme();
  const className = theme==='dark'? style.container: ""

  return (
    <div className={className}>
      <div className={style.info}>
        <h2>Get In Touch</h2>

        <div className={style.grid}>
          <div className={style.location}>
            <img src={phone} alt="" />
            <h5>Contact</h5>
            <h6>Phone Number</h6>
            <p>+96323456</p>
            <h6>Open hours</h6>
            <p>9:00-5:00 on weekdays</p>
            <p>10:00-3:00 Sunday</p>
          </div>
          <div className={style.location}>
            <img src={location} alt="" />
            <h5>Address</h5>
            <h6>647P+4G5,Seif Al-Doleh, Aleppo, Syria</h6>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d40857.83052623337!2d36.12057049879927!3d33.205153711317024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s8G5R647P%2B4G5!5e0!3m2!1sen!2s!4v1713424558655!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div>
            <img src={email} alt="" />
            <h5>Socials</h5>
            <div className={style.social}>
              <img src={insta} alt="" />
              <img src={fb} alt="" />
              <img src={twiter} alt="" />
            </div>
            <br />
            <h6>Our Email</h6>
            <p>tagred@gmail.com</p>
          </div>
        </div>
      </div>

      <div className={style.contact}>
        <div style={{ padding: "10px"}}>
         <div  style={{ display: "flex" , justifyContent: "left" }}>
          <img
            src={car}
            alt=""
            width="120px"
            style={{ display: "inline" }}
          />
          <h2 style={{ textAlign: "left", display: "inline" }}>
            Let's Chat!
          </h2>
         </div>
          <p >
            Need to get in touch with us? Either fill out this form with your
            inquiry or find us through our email. We will try to get back to you
            as soon as possible.
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ContactPage;
