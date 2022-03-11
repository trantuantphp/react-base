import LayoutMain from "components/layout/Layout";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import UserStore from "stores/User.store";
import { destroyM, errorM, loadingM } from "utils/message";
import { APP_LOGIN } from "./paths";

const PrivateRoute = observer(({ children }) => {
    const userStore = useContext(UserStore);
    const [loading, setLoading] = useState(true);

    const loadAuth = async () => {
        try {
            const result = await userStore.loadToken();
            if (!result) {
                errorM();
            } else {
                if (result?.errorCode !== 0) {
                    errorM(result?.message);
                } else {
                    destroyM();
                }
            }
        } catch (error) {
            errorM(error.toString());
        } finally {
            setLoading(false);
        }
    };

    useEffect(async () => {
        await loadAuth();
    }, []);

    if (loading) return loadingM("Authenticating ...", 0);
    if (userStore.is_authenticated) return <LayoutMain>{children}</LayoutMain>;
    else return <Navigate to={{ pathname: APP_LOGIN }} />;
});

export default PrivateRoute;
