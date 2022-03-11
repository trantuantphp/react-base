import { ConfigProvider } from "antd";
import Empty from "components/common/Empty";
import Loading from "components/common/Loading";
import { Suspense } from "react";
import RouterWrapper from "router";

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ConfigProvider renderEmpty={Empty}>
                <RouterWrapper />
            </ConfigProvider>
        </Suspense>
    );
};

export default App;
