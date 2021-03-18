import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

const App = (): JSX.Element => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;