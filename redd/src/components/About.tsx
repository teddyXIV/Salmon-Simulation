import { useDispatch } from 'react-redux'
import { setVisiblity } from '../redux/modalVisibleSlice';

const About = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <dialog open onClick={() => dispatch(setVisiblity(false))} className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-75 z-50">
                    <div className="border-none bg-black bg-opacity-75 w-full h-1/2 sm:w-5/6 sm:h-1/4 rounded-lg shadow-md p-0 overflow-hidden z-50 m-auto mt-32">
                        <p className="text-white text-center p-10 sm:p-20 sm:text-xl">
                            This project aims to visualize the annual Chinook salmon migration in the Columbia River. The data used for this project comes from the Columbia River DART program.<br />
                            <br />
                            Submit a date to view a simulated dispersal of salmon between the Bonneville Dam and Wells Dam for the specified date.
                        </p>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default About;

// interface ModalControl {
//     closeHandler: () => void
// }