import { DashboardOutlined } from "@ant-design/icons";
import * as paths from "router/paths";

const menu = () => {
    return [
        {
            title: "Dashboard",
            icon: <DashboardOutlined />,
            path: paths.APP_DASHBOARD,
            hasPermission: true,
            hasSub: false,
        },
    ];
};

export default menu;
