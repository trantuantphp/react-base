import { Layout } from "antd";
import PropTypes from "prop-types";
import ContentMain from "./Content";
import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./Layout.module.scss";
import classNames from "classnames";

const LayoutMain = ({ children }) => {
    return (
        <Layout className={classNames(styles["layout"])}>
            <Header className={classNames(styles["layout-header"])} />
            <Layout className={classNames(styles["layout-main"])}>
                <SideBar className={classNames(styles["layout-sidebar"], "bg-white custom-scroll overflow-y-auto h-full")} />
                <ContentMain children={children} className={classNames(styles["layout-content"], "custom-scroll overflow-y-auto h-full")} />
            </Layout>
        </Layout>
    );
};

LayoutMain.propTypes = {
    children: PropTypes.element.isRequired,
};

export default LayoutMain;
