import React from 'react';
import { House } from './House';


export class HouseList extends React.Component {
    state = {
        houses : []
    };
    componentDidMount() {
        this.fetchHouses();
    }
    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };
    updateHouse = async (updateHouse) => {
        await housesApi.put(updateHouse);
        this.fetchHouses();
    };

    render() {
        return (
            <div className='house-list'>
              {this.state.houses.map((house) => (
                <House
                house={house} 
                key={house._id}
                updateHouse={this.updateHouse}
                />
              ))}
            </div>
        )
    }
}