import React, {Component} from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';

import PokemonDisplay from './PokemonDisplay';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            page: 0

        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }


    async componentDidMount() {
        const { page } = this.props.match.params;
        this.setState({page: page}, () => {this.listPokemon()});

    }

    async listPokemon() {
        // Separate from componentDidMount() so we can re-call this for next() and previous()
        // Data had next/prev urls with different offsets by 20 pokemon, change manually for each call
        const page = this.state.page;
        let offset = page * 20;
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`);
        this.setState({data: res.data});
    }

    next(){
        let nextPage = Number(this.state.page + 1);
        this.setState({page: nextPage}, () => {this.listPokemon()});
    }

    prev(){
        let prevPage = Number(this.state.page - 1);
        this.setState({page: prevPage}, () => {this.listPokemon()});
    }

    render() {
        return (
            // Keep HTML valid with fragments, since we are returning multiple values
            <React.Fragment>
                <div>
                    <Button variant="primary" size="sm" onClick={this.prev}>Prev</Button>
                    <Button variant="primary" size="sm" onClick={this.next}>Next</Button>
                </div>

                <div className="row">
                {this.state.data && this.state.data['results'].map(pokemon => (
                    <PokemonDisplay
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                ))}
                </div>

            </React.Fragment>
        );
    }
}

export default Pokemon;