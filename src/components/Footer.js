import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Namangan-city.uz</h2>
            <Link to='/'>Home</Link>
            <Link to='/hotels'>Hotels</Link>
            <Link to='/destinations'>Destinations</Link>
            <Link to='/restourants'>Restourants</Link>
            <Link to='/aboutcity'>Aboutcity</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Namangan</Link>
            <Link to='/'>Kosonsoy</Link>
            <Link to='/'>(+998)93-673-35-70</Link>
            <Link to='/'>misteranvarkhuja@gmail.com</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h2>Social Media</h2>
           <a href="https://www.instagram.com/i_m_anvarkhuja/">Instagram</a>
           <a href="https://www.facebook.com/profile.php?id=100078881551952&mibextid=LQQJ4d">Facebook</a>
           <a href="https://t.me/Anvarkhuja_Bahodirkhujaev">Telegram</a>
           
           
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'> 
              NAM-T
              <i className='fab fa-typo3' />UR
            </Link>
          </div>
          {/* <h  className='website-rights'>Mister_Anvarkhuja © 2023</h> */}
          <a href="https://t.me/Anvarkhuja_Bahodirkhujaev">Mister_Anvarkhuja © 2023</a>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
