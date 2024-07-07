import Modal from "../../utils/Modal";
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PropTypes from "prop-types";

function Auth() {
    const [createUser, setCreateUser] = useState(false);
    const [signReq, setSignReq] = useState("");
    const [modal, setModal] = useState(true);

    const hidden = modal ? "visible opacity-100" : "invisible opacity-0";


    return (
        <Modal modal={modal} setModal={setModal} hidden={hidden}>
            <section
                className={`popUb ${hidden} transition-all duration-500`}
            >
                <button
                    className="absolute top-8 right-8 text-2xl hover:opacity-50"
                    onClick={() => setModal(false)}
                >
                    <FaTimes />
                </button>
                <div className="flexCenter flex-col gap-[3rem]">
                    {signReq === "" ? (
                        <>
                            <h2 className="text-2xl pt-[5rem]">
                                {createUser ? "Join Our Community" : "Welcome Again"}
                            </h2>
                            <div className="flex flex-col gap-2 w-fit mx-auto">
                                <Button
                                    icon={<FcGoogle className="text-xl" />}
                                    text={`${createUser ? "Sign Up" : "Sign In"} With Google`}
                                />
                                <Button
                                    icon={<MdFacebook className="text-xl text-blue-600" />}
                                    text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`}
                                />
                                <Button
                                    click={() =>
                                        setSignReq(createUser ? "sign-up" : "sign-in")
                                    }
                                    icon={<AiOutlineMail className="text-xl text-green-600" />}
                                    text={`${createUser ? "Sign Up" : "Sign In"} With Email`}
                                />
                            </div>
                            <p>
                                {createUser ? "Already have an account?" : "No Account?"}
                                <button
                                    onClick={() => setCreateUser(!createUser)}
                                    className="text-gray-800 hover:text-gray-950 font-bold ml-1"
                                >
                                    {createUser ? "Sign In" : "Create One"}
                                </button>
                            </p>
                        </>
                    ) : signReq === "sign-in" ? (
                        <SignIn setSignReq={setSignReq} />
                    ) : signReq === "sign-up" ? (
                        <SignUp />
                    ) : null}
                    <p className="md:w-[30rem] mx-auto text-center text-sm mb-[3rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                        nobis corrupti magnam pariatur laborum molestiae dicta eaque! Ipsum,
                        veritatis dolor?
                    </p>
                </div>
            </section>
        </Modal>
    );
}

export default Auth;

const Button = ({ icon, text, click }) => {
    return (
        <button
            onClick={click}
            className="flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full"
        >
            {icon} {text}
        </button>
    );
};

Button.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    click: PropTypes.func,
};

Button.defaultProps = {
    click: () => { },
};
