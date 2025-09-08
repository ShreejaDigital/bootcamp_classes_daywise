import { Link } from "react-router";
import { AiOutlineShoppingCart, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">Shopify</h3>
            <p className="footer-description">
              Your one-stop destination for the best notebook collection. 
              Quality products with exclusive offers and fast delivery.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">Products</Link>
              </li>
              <li>
                <Link to="/cart" className="footer-link">Cart</Link>
              </li>
              <li>
                <a href="#" className="footer-link">About Us</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4 className="footer-title">Customer Service</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">Contact Us</a>
              </li>
              <li>
                <a href="#" className="footer-link">Shipping Info</a>
              </li>
              <li>
                <a href="#" className="footer-link">Returns & Refunds</a>
              </li>
              <li>
                <a href="#" className="footer-link">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <AiOutlineMail className="footer-contact-icon" />
                <span>support@shopify.com</span>
              </div>
              <div className="footer-contact-item">
                <AiOutlinePhone className="footer-contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Shopify. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}