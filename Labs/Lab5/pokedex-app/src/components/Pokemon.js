import React, {Component} from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';

import PokemonDisplay from './PokemonDisplay';
import ReactPaginate from 'react-paginate';



class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0

        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }


    async componentDidMount() {
        //

        const { page } = this.props.match.params;
        this.setState({page: page}, () => {this.listPokemon()});

    }

    async listPokemon() {
        // Separate from componentDidMount() so we can re-call this for next() and previous()
        // Data had next/prev urls with different offsets by 20 pokemon, change manually for each call
        const page = this.state.page;
        let offset = page * 20;
        const pokemonUrl = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`);
        this.setState({pokemon: pokemonUrl.data['results']});
    }

    next(){
        let nextPage = Number(this.state.page + 1);
        this.setState({page: nextPage}); //breaks render!?
        this.listPokemon();
    }

    prev(){
        let prevPage = Number(this.state.page - 1);
        this.setState({page: prevPage}); //breaks render!?
        this.listPokemon();
    }

    render() {


        return (
            <React.Fragment>
                <div>
                    <Button variant="primary" size="sm" onClick={this.prev}>Prev</Button>
                    <Button variant="primary" size="sm" onClick={this.next}>Next</Button>
                </div>

                {this.state.pokemon ? (
                    <div className="row">
                    {this.state.pokemon.map(pokemon => (
                        <PokemonDisplay
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    ))}
                    </div>
                ) : (
                    <h1>Loading pokemon</h1>
                )}
            </React.Fragment>
        );
    }
}

export default Pokemon;