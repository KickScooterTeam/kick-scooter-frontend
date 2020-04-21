import React from 'react';
import SignUp from "./components/SignUp";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from "./components/SignIn";
import Greeting from "./components/Greeting";
import ToolBar from "./components/ToolBar";
import MapComponent from "./components/MapComponent";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={['/', '/sign-in']} component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/greeting" component={Greeting}/>
                <Route path="/navigation">
                    <ToolBar/>
                    <MapComponent/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
