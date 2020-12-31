import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className='cards'>
			<h1>HERE ARE SOME OF MY LATEST PROJECTS</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='https://res.cloudinary.com/dv01780vo/image/upload/v1609354521/Tunr_App_gbavm7.png'
							text='A simple music app where you can track some of your favorite songs'
							label='Tunr'
							href='https://tunr-on-rye.netlify.app/'
							onClick={() =>
								window.open('https://tunr-on-rye.netlify.app/', '_blank')
							}
						/>
						<CardItem
							src='https://res.cloudinary.com/dv01780vo/image/upload/v1609355151/ClimbTimeApp_tztb7h.png'
							text='An app to find to best climbing routes in the area that you are visiting'
							label='ClimbTime!'
							href='https://climbtime.netlify.app/'
						/>
						<CardItem
							src='https://res.cloudinary.com/dv01780vo/image/upload/v1609353829/Project-3_-_Pause_bcwozt.png'
							text='A self-care app to help with those everyday stresses'
							label='pause.app'
							href='https://pause-app.netlify.app/'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
