import DynamicHeader from "./dynamic";
import propTypes from "prop-types";

export const Head = (props) => {
    return <DynamicHeader {...props} />;
}


Head.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    image: propTypes.string,
    keywords: propTypes.string,
}