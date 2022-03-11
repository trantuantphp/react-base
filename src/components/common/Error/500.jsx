const { Result } = require("antd");

const Error500 = () => <Result status="500" title="500" subTitle="Sorry, something went wrong." />;

export default Error500;
