import { Avatar, Button, Layout, Popover } from "antd";
import { useContext } from "react";
import Logo from "assets/logo.png";
import { observer } from "mobx-react-lite";
import UserStore from "stores/User.store";
import { toJS } from "mobx";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { APP_LOGIN } from "router/paths";

const Header = observer(({ className }) => {
    const history = useNavigate();
    const userStore = useContext(UserStore);
    const info = toJS(userStore._getInfo());
    const logout = () => {
        userStore.logout();
        history.replace(APP_LOGIN);
    };
    return (
        <Layout.Header className={classNames(className, "flex items-center justify-between pl-4 pr-7")}>
            <div className="h-full inline-flex items-center cursor-pointer" onClick={() => console.log(11)}>
                <img src={Logo} alt="" />
                <span className="text-white text-lg font-bold pl-2" style={{ paddingTop: 6 }}>
                    CRM
                </span>
            </div>
            <Popover
                placement="bottomRight"
                trigger="click"
                content={
                    <div>
                        <Button type="link" onClick={() => logout()}>
                            Logout
                        </Button>
                    </div>
                }
            >
                <div className="h-full inline-flex items-center cursor-pointer">
                    {info && info.avatar && <Avatar src={info.avatar} alt="" className="mr-2" />}
                    <span className="text-white">{info?.username || ""}</span>
                </div>
            </Popover>
        </Layout.Header>
    );
});

export default Header;
