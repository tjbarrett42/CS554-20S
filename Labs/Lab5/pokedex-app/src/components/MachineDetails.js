import React, {Component} from 'react';
import Axios from 'axios';


export default class MachineDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({id: id}, () => {this.showDetails()});
    }

    async showDetails(){
        const id = this.state.id;
        const res = await Axios.get(`https://pokeapi.co/api/v2/machine/${id}/`);
        this.setState({data: res.data});
        // this.setState({})
    }

    render() {
        // Have to verify that data exists every time because we are accessing a key through the array
        const itemName = this.state.data && this.state.data.item["name"];
        const moveName = this.state.data && this.state.data.move["name"];
        const versionName = this.state.data && this.state.data.version_group["name"];


        return (
            <div>
                <h1>The Machine Listing</h1>
                <h2>Machine #{this.state.data && this.state.data.id} </h2>
                <h3>Item: {itemName}</h3>
                <h3>Move: {moveName}</h3>
                <h3>Version: {versionName}</h3>

            </div>
        );
    }
}