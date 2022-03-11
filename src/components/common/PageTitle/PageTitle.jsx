import { ArrowLeftOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PageTitle = ({ title = null, showBack = false }) => {
    if (!title) return null;
    const { goBack } = useNavigate();
    const onBack = () => goBack();
    return (
        <div className="px-6 pb-4 bg-white flex items-center">
            {showBack && <ArrowLeftOutlined className="mr-4 cursor-pointer" onClick={onBack} />}
            <span className="capitalize text-xl font-medium">{title}</span>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string,
    showBack: PropTypes.bool,
};

PageTitle.defaultProps = {
    title: null,
    showBack: false,
};

export default PageTitle;
