import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class MachineDisplay extends Component {
    constructor(props){
        super(props);
        this.state ={
            id: ''
        };
    }

    componentDidMount() {
        // Get name an url passed from original pokemon 'results
        const {url} = this.props;
        // Use url ending to extract ID
        const id = url.split('/')[url.split('/').length - 2];
        this.setState({id: id});
    }

    render() {
        const detailLink = '/machines/' + this.state.id;
        return (
            <div>
                <Link to={detailLink}><h2>Machine #{this.state.id}</h2></Link>
            </div>
        );
    }
}