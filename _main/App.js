import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';

import Home from '../_home/Home';
import Admin from '../_admin/Admin';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <div>
                <Route path='/home' component = {Home} />
                <Route path='/admin' component = {Admin} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;