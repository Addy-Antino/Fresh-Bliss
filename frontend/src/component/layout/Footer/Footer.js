import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import yt from "../../../images/yt.png"
import fb from "../../../images/fb.jpg"
import insta from "../../../images/insta.png"
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>FRESH BLISS</h1>
        <p>𝒔𝒖𝒏𝒔𝒉𝒊𝒏𝒆 𝒊𝒏 𝒂 𝒗𝒂𝒔𝒆</p>

        <p>Copyrights 2022 &copy; Adityarup Datta</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/"><img src = { insta } height="20" width="20" alt="Instagram"/> Instagram</a>
        
        <a href="http://youtube.com/"> <img src = { yt } height="20" width="20" alt="Youtube"/> Youtube</a>
        
        <a href="http://facebook.com/"><img src = { fb } height="20" width="20" alt="Facebook"/> Facebook</a>
      </div>
 
    </footer>
  );
};

export default Footer;
