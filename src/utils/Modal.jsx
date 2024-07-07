import PropTypes from "prop-types";

function Modal({ children, modal, setModal, hidden }) {
    return (
        <>
            <div
                onClick={() => setModal(false)}
                className={`bg-white/50 fixed inset-0 z-10
                ${hidden}
                transition-all duration-500
                `}
            />
            {children}
        </>
    );
}

Modal.propTypes = {
    children: PropTypes.string.isRequired,
    modal: PropTypes.string.isRequired,
    setModal: PropTypes.string.isRequired,
    hidden: PropTypes.string.isRequired,
};

export default Modal;
