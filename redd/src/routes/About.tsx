import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('..');
    }

    return (
        <>
            <div>
                <dialog open onClick={handleClose} className="fized top-0 left-0 h-screen bg-black bg-opacity-60 z-50">
                    <div className="border-none rounded-lg shadow-md p-0 overflow-hidden z-50">
                        <p>
                            A blurb about the project
                        </p>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default About;