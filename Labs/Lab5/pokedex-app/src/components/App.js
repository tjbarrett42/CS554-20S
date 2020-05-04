import React from 'react';
import '../App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Landing from './Landing';
import Pokemon from './Pokemon';
import PokemonDisplay from './PokemonDisplay';


function App() {
    return (
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <h2>All things Pokemon!</h2>
                </header>
            </div>
            <Route path='/' component={Landing} />
            <Route path='/pokemon' component={Pokemon} />

        </Router>
    );
}

export default App;