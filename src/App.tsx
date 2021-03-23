import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Vegometer } from './components/Vegometer/Vegometer';
import './App.css';

const App = (): JSX.Element => {
    return (
        <div className="App">

            <BrowserRouter>
                <nav>
                    <Link className="navLink" to="/"><h2>Home</h2></Link>
                    <Link className="navLink" to="/vegometer"><h2>Vegometer</h2></Link>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/vegometer" component={Vegometer} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;