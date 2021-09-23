import React from 'react'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginScreen } from '../componentes/auth/LoginScreen';
import { CalenadarScreen } from '../componentes/calendar/CalenadarScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/" component={ CalenadarScreen } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>

    )
}
