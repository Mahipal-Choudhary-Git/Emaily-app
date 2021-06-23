import "materialize-css/dist/css/materialize.min.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

import Header from "./Header";
import Landing from "./Landing";
import SurveyNew from "./SurveyNew";
const App = () => {
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
