// 2020 Timothy Barrett
// CS554 Web Programming II
// I pledge my honor that I have abided by the Stevens Honor System.
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Pokemon from './components/Pokemon';
import PokemonDetails from "./components/PokemonDetails";
import Berries from './components/Berries';
import BerryDetails from "./components/BerryDetails";
import Machines from './components/Machines';
import MachineDetails from './components/MachineDetails';
import ErrorPage from "./components/ErrorPage";
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
                    <Route path="/berries/page/:page" component={Berries}></Route>
                    <Route path="/berries/:id" component={BerryDetails}></Route>
                    <Route path="/machines/page/:page" component={Machines}></Route>
                    <Route path="/machines/:id" component={MachineDetails}></Route>
                    <Route path="/404" component={ErrorPage}></Route>
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


