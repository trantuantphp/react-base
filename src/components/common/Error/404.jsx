const { Result } = require("antd");

const Error404 = () => <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />;

export default Error404;
