import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "screens/Main";
import CountryData from "screens/CountryData";

import "assets/global.css";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Main />} />
            <Route path='/country/:name' render={() => <CountryData />} />
            <Route path='/country/:weather' render={() => <div>yo</div>} />
        </Switch>
    );
};

export default App;
