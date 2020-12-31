import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
	return (
		<div className='hero-container'>
			{/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
			<h1>FIND YOUR CODE</h1>
			<p>What are you waiting for?</p>
			<div className='hero-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'>
					ABOUT ME
				</Button>
				{/* <Button
					className='btns'
					buttonStyle='btn--primary'
					buttonSize='btn--large'>
					WATCH TRAILER <i className='far fa-play-circle' />
				</Button> */}
			</div>
		</div>
	);
}

export default HeroSection;
