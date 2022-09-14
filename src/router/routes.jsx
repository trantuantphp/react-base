import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import * as routePath from "./paths";
import Home from "pages/Home";
import Login from "pages/Login";
import PrivateRoute from "./PrivateRoute";
import Cron from "pages/Cron";

const RouteContainer = () => (
    <Fragment>
        <Routes>
            <Route path={routePath.APP_LOGIN} element={<Login />} />
            <Route path={routePath.APP_HOME} element={<PrivateRoute children={<Home />} />} />
            <Route path={routePath.APP_CRON} element={<Cron />} />
        </Routes>
    </Fragment>
);

export default RouteContainer;
