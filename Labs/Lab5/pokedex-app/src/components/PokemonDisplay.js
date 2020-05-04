import React, {Component} from 'react';

export default class PokemonDisplay extends Component {
    state ={
        name: '',
        id: ''
    }

    componentDidMount() {
        const {name, url} = this.props;
        const id = url.split('/')[url.split('/').length - 2]; // Grab the pokemon index from url
        this.setState({name: name, id: id});

    }

    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <h5>{this.state.id}: {this.state.name}</h5>

                </div>
            </div>
        );
    }
}