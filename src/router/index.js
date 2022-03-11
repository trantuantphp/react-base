import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteContainer from "./routes";

const RouterWrapper = () => (
    <Fragment>
        <Router>
            <RouteContainer />
        </Router>
    </Fragment>
);

export default RouterWrapper;
