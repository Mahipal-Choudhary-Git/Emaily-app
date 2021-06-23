import "materialize-css/dist/css/materialize.min.css";
import { useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dashboard from "./Dashboard";

import Header from "./Header";
import Landing from "./Landing";
import SurveyNew from "./SurveyNew";
import { fetchUser } from "../actions";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/surveys/new" exact component={SurveyNew} />
                    <Route path="/surveys" exact component={Dashboard} />
                    <Route path="/" exact component={Landing} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
