import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import classNames from "classnames";
import menu from "./menu";

const { SubMenu, Item } = Menu;

const SideBar = ({ className }) => {
    const _menu = menu();
    const location = useLocation();
    const { pathname } = location;
    const _key = `/${pathname.split("/")[1]}`;
    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState([_key]);
    const [selectedKeys, setSelectedKeys] = useState([_key]);

    const renderMenu = (menu) =>
        menu.map(({ title, hasSub, icon, subMenu, path, hasPermission }) => {
            return (
                hasPermission &&
                (hasSub && subMenu ? (
                    <SubMenu key={path} icon={icon} title={title}>
                        {renderMenu(subMenu)}
                    </SubMenu>
                ) : (
                    <Item key={path} icon={icon} onClick={() => useNavigate(path)}>
                        {title}
                    </Item>
                ))
            );
        });

    useEffect(() => {
        const _key = `/${pathname.split("/")[1]}`;
        setOpenKeys([_key]);
        setSelectedKeys([_key]);
    }, [pathname]);

    return (
        <Layout.Sider collapsible collapsed={collapsed} onCollapse={(col) => setCollapsed(col)} width={208} className={classNames(className)}>
            <Menu mode="inline" defaultOpenKeys={openKeys} defaultSelectedKeys={selectedKeys}>
                {renderMenu(_menu)}
            </Menu>
        </Layout.Sider>
    );
};

SideBar.propTypes = {
    className: PropTypes.string,
};

export default SideBar;
