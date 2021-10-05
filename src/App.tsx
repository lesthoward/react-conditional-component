import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import ListClass from './components/ListClass';

function App() {
	const animalsArr = [
		{
			scientificName: 'Puma Concolor',
			name: 'Puma',
			habitat: 'Mountain, forest and jungle',
			slogan: 'Has longer back legs than front legs',
			image: 'puma',
		},
		{
			scientificName: '    Haliaeetus albicilla',
			name: 'White-Tailed Eagle',
			habitat: 'Eurasia',
			slogan: 'It is one of the biggest birds of prey',
			image: 'eagle',
		},
		{
			scientificName: 'Vulpes vulpes',
			name: 'Fox',
			habitat: "Russia's Far East",
			image: 'fox',
			slogan: 'There are 12 different species in the world',
		},
		{
			scientificName: 'Panthera pardus orientalis',
			name: 'Amur Leopard',
			habitat: 'Woodland areas and urban parks',
			image: 'leopard',
			slogan: 'The Amur leopard may be the rarest big cat on Earth',
		},
		{
			scientificName: 'Phoca vitulina',
			name: 'Harbor Seal',
			habitat:
				'Coastal waters of the Pacific and Atlantic Oceans, the Baltic Sea and the North Sea',
			image: 'seal',
			slogan: 'Harbor seals can dive as deep as 1400 feet',
		},
	];
	const [view, setView] = useState('functional');
    const [message, setMessage] = useState(false)

    const changeScreen = () => {
        if(view === 'functional') {
            setView('class')
        } else {
            setView('functional')
        }
        setMessage(true)
    }


	return (
		<Fragment>
			<div className="container">
                <button className="change__screen"
                    onClick={() => changeScreen()}
                >Change screen</button>
                
                {
                    message ? <span className="message">You have change to <strong>{`${view}`}</strong> component successfully</span> : null
                }

				{view === 'functional' ? (
					<List animalsArr={animalsArr} />
				) : (
					<ListClass animalsArr={animalsArr} />
				)}
			</div>
		</Fragment>
	);
}

export default App;
