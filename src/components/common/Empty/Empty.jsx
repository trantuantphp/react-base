import { Empty } from "antd";
import ImageEmpty from "./empty.png";

const CustomEmpty = () => (
    <Empty
        image={<img src={ImageEmpty} width="90px" />}
        imageStyle={{ height: 60, display: "flex", justifyContent: "center" }}
        description={<span>#nothing_in_here.</span>}
        className="text-center"
    />
);

export default CustomEmpty;
