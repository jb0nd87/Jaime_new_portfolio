import React from 'react';
import '../../App.css';

export default function AboutMe() {
	return (
		<div className='about'>
			<h1 className='about-me'>ABOUT ME</h1>
			<div className='pic'>
				<img src='https://res.cloudinary.com/dv01780vo/image/upload/v1604070046/received_2893661924081693_2_ysiho9.jpg' />
			</div>
			<div>
				<p>
					As a Software Developer and 3D artist, I focus on the user experience
					to dive deep into the details in order to help them achieve their
					dreams for the applications I build to ensure a dynamic experience
					full of clean code.
				</p>
			</div>
		</div>
	);
}
