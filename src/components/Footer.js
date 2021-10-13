import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter  } from "react-icons/fa";

const Footer = () => {
   return (
      <>
         <div className="footer-top">
             <div className="footer-top-left">
                <div>
                   <span><h1>Logo</h1></span>
                   <span>We are a team of creatives who are thrilled to create, ignite and succeed your business with all things digital</span>
                </div>
                <label>Email Us</label>
                <p>sameersingh7458@gmail.com</p>
                <label>Contact</label>
                <p>+91 7458855350</p>
             </div>
             <div className="footer-top-right">
                <label>Quick Links</label>
                <ul>
                   <li>About</li>
                   <li>Careers</li>
                   <li>Make Payment</li>
                   <li>Reach Us</li>
                </ul>
             </div>
         </div>
         <div className="footer-bottom">
            <div className="footer-info">
              <p>copyright 2021, Icon Media House. Made with in Toronto.</p>
            </div>
            <div className="footer-icon">
             <label> Follow us on:</label>
              <span><FaFacebook /></span>
              <span><FaInstagram /></span>
              <span><FaLinkedinIn /></span>
              <span><FaTwitter /></span>
            </div>
         </div>
      </>
   )
}

export default Footer
