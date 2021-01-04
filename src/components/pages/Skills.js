import React from 'react';
import '../../App.css';

export default function Skills() {
	return (
		<div>
			<h1 className='skills'>SKILLS</h1>
			<div className='skill-icons'>
				<ul>
					<li>
						<i className='fab fa-html5'></i> HTML
					</li>
					<li>
						<i className='fab fa-react'></i> REACT
					</li>
					<li>
						<i className='fas fa-gem'></i> RUBY ON RAILS
					</li>
					<li>
						<i className='fab fa-js'></i> JAVASCRIPT
					</li>
					<li>
						<i className='fab fa-css3'></i> CSS
					</li>
					<li>
						<i className='fab fa-sass'></i> SCSS
					</li>
					<li>
						<i className='fas fa-robot'></i> AUTODESK MAYA
					</li>
					<li>
						<i className='fab fa-unity'></i> UNITY
					</li>
				</ul>
			</div>
		</div>
	);
}
