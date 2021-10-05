import React, {Fragment} from 'react'
interface animalObj {
    scientificName: string,
    name: string,
    habitat: string,
    slogan: string,
    image: string,
}


const Box: React.FC<any> = ({animal}) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={`images/${animal.image}.jpg`} className="card__img" />
            </div>

            <div className="card__content">
                <p className="card__name"><p className="card__title">Name:</p> {animal.name}</p>
                <p className="card__name"><p className="card__title">Habitat:</p> {animal.habitat}</p>
                <p className="card__name"><p className="card__title">Description:</p> {animal.slogan}</p>
            </div>
        </div>
    )
}

export default Box