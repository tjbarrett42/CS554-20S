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
        this.setState({id: id}, () => {this.showDetails()});
        // const name = res.data.name;
        // const type = [];
        // this.setState({name: name, id: id });
        // res.data.types.map(type => {
        //     return <li key={type.slot}>{type.type.name}</li>
        // });
        // this.setState({type: type.type.name});
    }

    async showDetails(){
        const id = this.state.id;
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        this.setState({data: res.data});
    }

    render() {
        // Stats
        const statList = this.state.data && this.state.data['stats'].map(stats => {
            return <li key={stats.stat.name}> {}: {stats.base_stat} </li>
        });

        // Types
        const typeList = this.state.data && this.state.data['types'].map(types => {
            return <li key={types.type.name}>{types.type.name} </li>
        });

        // Moves
        const moveList = this.state.data && this.state.data['moves'].map(moves => {
            return <li key={moves.move.name}> {moves.move.name} </li>
        });

        // Abilities
        const abilityList = this.state.data && this.state.data['abilities'].map(abilities => {
            return <li key={abilities.ability.name}> {abilities.ability.name} </li>
        });

        // Other
        const height = this.state.data.height;
        const weight = this.state.data.weight;
        const baseExperience = this.state.data.base_experience;


        return (
            <div>
                {/* Ensure this.state.data exists*/}
                <h2>{this.state.data && this.state.data.id}: {this.state.data.name}</h2>
                <h3>Types:</h3>
                <ul>
                    {typeList}
                </ul>
                <h3>Stats:</h3>
                <ul>
                    {statList}
                </ul>
                <h3>Abilities:</h3>
                <ul>
                    {abilityList}
                </ul>
                <h3>Other:</h3>
                <ul>
                    <li>height: {height}</li>
                    <li>weight: {weight}</li>
                    <li>base experience: {baseExperience}</li>
                </ul>
                <h3>Moves:</h3>
                <ul>
                    {moveList}
                </ul>

            </div>
        );
    }
}

