import React, {useState} from "react";
import "../css/Footer.css";
import {Mail, Film, Star, Heart, Bell} from 'lucide-react';


function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };


  const footerLinks ={
    company: ['About US','Careers','Contact Us','Blog'],
    support: ['Help Center','Privacy Policy','FAQ','Terms of Service'],
    features:['Browse Movies','Add Favorites','Top Rated','Trending'],
    social: ['Facebook','Twitter','Instagram','Youtube']
  };

  return(
    <footer className="footer">
        <div className="footer-container">
            <div className="newsletter-section">
                <div className="newsletter-content">
                    <div className="newsletter-icon">
                        <Bell size={32}/>
                    </div>
                    <div className="newsletter-text">
                        <h3>Stay Updated</h3>
                        <p>Get notified about the latest movies and exclusive content</p>
                    </div>
                </div>

               {!isSubscribed ? (
                   <form className="newsletter-form" onSubmit={handleSubscribe}>
                    <div className="input-wrapper">
                        <Mail className="input-icon" size={20}/>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="newsletter-input"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={`subscribe-btn ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                        <div className="spinner"></div>
                        ) : (
                        'Subscribe'
                        )}
                    </button>
                   </form>
               ):( 
                <div className="success-message">
                    <div className="success-icon">
                        <Heart size={20}/>
                    </div>
                    <span>Thanks for subscribing! You'll receive movie updates soon.</span>
                </div>
               )}
            </div>

            <div className="footer-content">
                <div className="footer-brand">
                    <div className="brand-logo">
                        <Film size={32} />
                        <span className="brand-name">MovieFlix</span>
                    </div>
                    <p className="brand-tagline">Discover, explore, and enjoy the best movies from around the world</p>
                    <div className="rating-display">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="#ffd700" color="#ffd700" />
                            ))}
                        </div>
                        <span className="rating-text">Rated 4.8/5 by movie lovers</span>

                    </div>

            </div>

            <div className="footer-links">
                <div className="link-column">
                    <h4>Company</h4>
                    <ul>
                        {footerLinks.company.map((link, index) => (
                            <li key={index}><a href="#" className="footer-link">{link}</a></li>

                        ))}
                    </ul>
                </div>

                <div className="link-column">
                    <h4>Support</h4>
                    <ul>
                        {footerLinks.support.map((link, index) => (
                            <li key={index}><a href="#" className="footer-link">{link}</a></li>

                        ))}
                    </ul>
                </div>

                <div className="link-column">
                    <h4>Features</h4>
                    <ul>
                        {footerLinks.features.map((link, index) => (
                            <li key={index}><a href="#" className="footer-link">{link}</a></li>

                        ))}
                    </ul>
                </div>

                <div className="link-column">
                    <h4>Follow Us</h4>
                    <ul>
                        {footerLinks.social.map((link, index) => (
                            <li key={index}><a href="#" className="footer-link">{link}</a></li>

                        ))}
                    </ul>
                </div>
            </div>

        </div>

            
    

        
        <div className="footer-bottom">
            <div className="footer-bottom-content">
                <p className="copyright">© 2025 MovieHub. All rights reserved. | Powered by The Movie Database (TMDb)</p>
                <div className="footer-bottom-links">
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <span className="divider">•</span>
                    <a href="#" className="footer-link">Cookie Policy</a>
                    <span className="divider">•</span>
                    <a href="#" className="footer-link">Accessibility</a>
                    
                </div>
            </div>
        </div>
    </div>

    <div className="footer-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
    </div>


    </footer>

  );
};

export default Footer;