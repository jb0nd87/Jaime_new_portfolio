import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className='cards'>
			<h1>Check out my projects</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='/src/images/img-9.jpg'
							text='Project 1'
							label='Learning'
							path='/projects'
						/>
						<CardItem
							src='https://res.cloudinary.com/dv01780vo/image/upload/v1600364953/Screen_Shot_2020-09-15_at_4.04.59_PM_vr10ee_qteocd.jpg'
							text='Project 1'
							label='Learning'
							path='/projects'
						/>
						<CardItem
							src='images/img-3.jpg'
							text='Project 1'
							label='Learning'
							path='/projects'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
