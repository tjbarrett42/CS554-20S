import React, {Component} from 'react';
import Axios from 'axios';


export default class PokemonDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };

        // Storing all in data is much easier - dan
        // state = {
        //     id: '',
        //     name: ''
        // };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

        this.setState({data: res.data});


        // const name = res.data.name;
        // const type = [];

        // this.setState({name: name, id: id });

        // res.data.types.map(type => {
        //     return <li key={type.slot}>{type.type.name}</li>
        // });

        // this.setState({type: type.type.name});

    }
    render() {
        const type = this.state.data.types.map(types => { return <li> key={types.type.name}>{types.type.name} </li> });
        return (
            <div>
                {/* Ensure this.state.data exists*/}
                <h2>{this.state.data && this.state.data.id}: {this.state.data.name}</h2>
                <h3>Types:</h3>
                <ul>
                    {type}
                </ul>

            </div>
        );
    }
}

