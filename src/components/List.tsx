import React, { Fragment } from 'react';
import Box from './Box';

interface propsInterface {
	animalsArr: object[];
}

const List: React.FC<propsInterface> = ({ animalsArr }) => {
	return (
		<div className="list">
			<h1 className="list__title">Species list from functional</h1>
			{animalsArr.map((animal) => (
				<Box
                    key={Math.random()} 
                    animal={animal} 
                />
			))}
		</div>
	);
};

export default List;
