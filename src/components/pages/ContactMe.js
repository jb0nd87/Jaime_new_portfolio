import React from 'react';
import '../../App.css';
import '../MyForm.css'
import MyForm from '../MyForm';

export default function ContactMe() {
	return (
		<div className='contact-info'>
			<h1 className='contact-me'>CONTACT ME</h1>
			<div>
				<h1 className='contact'>
					Contact Info
				</h1>
				<p>
					Email: jbondoc87@gmail.com<br></br>Phone: (510) 672-5306
				</p>
			</div>
			<MyForm />
		</div>
	);
}
