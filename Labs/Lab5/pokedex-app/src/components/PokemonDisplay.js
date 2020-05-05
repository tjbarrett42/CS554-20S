import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class PokemonDisplay extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            id: ''
        };
    }


    componentDidMount() {
        // Get name an url passed from original pokemon 'results
        const {name, url} = this.props;
        // Use url ending to extract ID
        const id = url.split('/')[url.split('/').length - 2];
        this.setState({name: name, id: id});

    }

    render() {
        const detailLink = '/pokemon/' + this.state.id;
        return (
            <div>
                <Link to={detailLink}><h3>{this.state.id}: {this.state.name}</h3></Link>
            </div>
        );
    }
}