import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemon from './components/Pokemon';
import PokemonDetails from "./components/PokemonDetails";
import Berries from './components/Berries';
import Machines from './components/Machines';
import Landing from './components/Landing';


export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/pokemon/page/0">The Pokemon Listing</Link>
                        </li>
                        <li>
                            <Link to="/berries/page/0">The Berry Listing</Link>
                        </li>
                        <li>
                            <Link to="/machines/page/0">The Machine Listing</Link>
                        </li>
                    </ul>
                </nav>



                <Switch>

                    <Route path="/pokemon/page/:page" component={Pokemon}></Route>
                    <Route path="/pokemon/:id" component={PokemonDetails}></Route>
                    <Route path="/berries/page/0" component={Berries}></Route>
                    <Route path="/machines/page/0" component={Machines}></Route>
                    <Route path="/" component={Landing}></Route>

                </Switch>
            </div>

        </Router>
    );
}

// function Home() {
//     return <h2>Home</h2>;
// }
// function PokemonList() {
//     return <h2>List of Pokemon</h2>;
// }
// function BerryList() {
//     return <h2>List of Berries</h2>;
// }
// function MachineList() {
//     return <h2>List of Machines</h2>;
// }


