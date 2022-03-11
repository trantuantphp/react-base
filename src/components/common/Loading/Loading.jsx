import { Fragment } from "react";
import { Spin } from "antd";
import "./Loading.scss";

const Loading = () => (
    <Fragment>
        <div className="my--loading">
            <Spin tip="Loading..." />
        </div>
    </Fragment>
);

export default Loading;
