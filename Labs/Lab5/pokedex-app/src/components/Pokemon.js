import React, {Component} from 'react';
import Axios from 'axios';
import { Redirect, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import PokemonDisplay from './PokemonDisplay';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            page: '0'
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    async listPokemon() {
        // Bug: While in list, clicking on respective list link doesn't return to page 0
        // Strangely enough, both next/prev and typing in page number manually work
        let page = Number(this.state.page);
        let offset = (page * 20).toString();
        let res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`);
        this.setState({data: res.data});
    }

    componentDidMount() {
        const { page } = this.props.match.params;
        this.setState({page: page}, () => {this.listPokemon()});
    }

    next(){
        let nextPage = Number(this.state.page) + 1;
        this.setState({page: nextPage}, () => {this.listPokemon()});

    }

    prev(){
        let prevPage = Number(this.state.page) - 1;
        this.setState({page: prevPage}, () => {this.listPokemon()});
    }

    render() {

        // Render 404 Error if page is negative or run out of pokemon to list
        if ((this.state.page < 0) || ((this.state.page) > (this.state.data['count'] / 20))) {
            return <Redirect to="/404" />;
        }
        return (
            // Links used to update URL - spotty solution, there has to be another way to do this

            // Keep HTML valid with fragments, since we are returning multiple values
            <React.Fragment>
                <div>
                    <h1>The Pokemon Listing</h1>
                </div>

                <div>
                    {Number(this.state.page) > 0 &&
                        <Link to={'/pokemon/page/' + (Number(this.state.page) - 1).toString()}><Button variant="primary" size="sm" onClick={this.prev}>Previous Page</Button></Link>
                    }
                    <Link to={'/pokemon/page/' + (Number(this.state.page) + 1).toString()}><Button variant="primary" size="sm" onClick={this.next}>Next Page</Button></Link>
                </div>

                <div className="row">
                {this.state.data && this.state.data['results'].map(display => (
                    <PokemonDisplay key={display.name} name={display.name} url={display.url}
                    />
                ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Pokemon;