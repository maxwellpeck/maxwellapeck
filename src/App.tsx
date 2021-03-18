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
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/vegometer">Vegometer</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/index.html" component={Home} />
                    <Route path="/vegometer" component={Vegometer} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;