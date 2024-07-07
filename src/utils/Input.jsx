import PropTypes from "prop-types";

function Input({ type, title }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm capitalize">{title}</label>
            <input
                className="text-center border-b border-black outline-none"
                type={type}
                name={title}
            />
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Input;
