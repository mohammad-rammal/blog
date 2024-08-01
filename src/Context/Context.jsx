import { useContext, useState, createContext } from "react";
import PropTypes from "prop-types";

const BlogContext = createContext();

function Context({ children }) {
    const [currentUser, setCurrentUser] = useState(false);

    return (
        <BlogContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </BlogContext.Provider>
    );
}

Context.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Context;

export const Blog = () => useContext(BlogContext);
