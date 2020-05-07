import React, {Component} from 'react';
import Axios from 'axios';


export default class BerryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({id: id}, () => {this.showDetails()});
    }

    async showDetails(){
        const id = this.state.id;
        const res = await Axios.get(`https://pokeapi.co/api/v2/berry/${id}/`);
        this.setState({data: res.data});
    }

    render() {

        // Flavors
        const flavorList = this.state.data && this.state.data['flavors'].map(flavors => {
            return <li key={flavors.flavor.name}> {flavors.flavor.name}: {flavors.potency} </li>
        });

        const firmness = this.state.data && this.state.data.flavors["firmness"];
        const max_harvest = this.state.data.max_harvest;
        const size = this.state.data.size;
        const smoothness = this.state.data.smoothness;
        const growth_time = this.state.data.growth_time;

        return (
            <div>

                <h1>The Berry Listing</h1>

                <h2>#{this.state.data && this.state.data.id} {this.state.data.name}</h2>

                <h3>Flavors:</h3>
                <ul>
                    {flavorList}
                </ul>

                <h3>Stats:</h3>
                <ul>
                    <li>firmness: {firmness}</li>
                    <li>max_harvest: {max_harvest}</li>
                    <li>size: {size}</li>
                    <li>smoothness: {smoothness}</li>
                    <li>growth_time: {growth_time}</li>

                </ul>


            </div>
        );
    }
}

