import { Layout } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";

const ContentMain = ({ children, className }) => {
    return (
        <Layout className={classNames(className)}>
            <Layout.Content className="">{children}</Layout.Content>
        </Layout>
    );
};

ContentMain.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default ContentMain;
