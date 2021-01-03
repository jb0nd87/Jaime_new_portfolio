// import { Button } from './Button';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FooterForm from './FooterForm'

function Footer() {
	return (
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className='footer-subscription-heading'>
					Need some help getting your ideas off the ground?
				</p>
				<p className='footer-subscription-text'>
					Feel free to contact me at anytime!
				</p>
                <FooterForm />
				{/* <div className='input-areas'>
					<form>
						<input
							type='email'
							name='email'
							placeholder='Your Email'
							className='footer-input'
						/>
						<Button buttonStyle='btn--outline'>SUBMIT</Button>
					</form>
				</div> */}
			</section>
			<div class='footer-links'>
				<div className='footer-link-wrapper'>
					<div class='footer-link-items'>
						<h2>About Me</h2>
						<Link to='/about-me'>Click to learn more</Link>
					</div>
					<div class='footer-link-items'>
						<h2>Contact Me</h2>
						<Link to='/contact-me'>Contact Info</Link>
					</div>
				</div>
			</div>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<Link to='/' className='social-logo'>
							JB CODING <i className='fas fa-atom'></i>
						</Link>
					</div>
					<small className='website-rights'>
						JB CODING <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />{' '}
						2020
					</small>
					<div className='social-icons'>
						<Link
							className='social-icon-link github'
							onClick={() =>
								window.open(
									'https://github.com/jb0nd87?tab=repositories',
									'_blank'
								)
							}>
							<i class='fab fa-github-alt'></i>
						</Link>
						<Link
							className='social-icon-link linkedin'
							onClick={() =>
								window.open(
									'https://www.linkedin.com/in/jaimebondocjr/',
									'_blank'
								)
							}>
							<i class='fab fa-linkedin'></i>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
