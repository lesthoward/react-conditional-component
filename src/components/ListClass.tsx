import React, {Fragment} from 'react'
import Box from './Box'

interface propsInterface {
	animalsArr: object[];
}

class ListClass extends React.Component<propsInterface> {
    render () {

        return (
            <div className="list">
                <h1 className="list__title">Species list from class</h1>
                {this.props.animalsArr.map((animal) => (
                    <Box
                        key={Math.random()} 
                        animal={animal} 
                    />
                ))}
            </div>
        )
    }
} 
export default ListClass