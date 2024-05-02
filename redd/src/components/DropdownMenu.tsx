import { useState } from "react";
import { useDispatch } from "react-redux";
import { setVisiblity } from "../redux/modalVisibleSlice";

const DropdownMenu = () => {
    const [menu, setMenu] = useState<Boolean>(false);
    const dispatch = useDispatch()

    const toggleDropdown = () => {
        setMenu(!menu);
    }

    const openAbout = () => {
        dispatch(setVisiblity(true));
        setMenu(!menu)
    }

    return (
        <>
            <div className="relative">
                <div className="px-5 py-2">
                    <button
                        onClick={toggleDropdown}
                        type="button"
                        className="hover:text-green-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${menu ? 'block' : 'hidden'} origin-top-right absolute right-0 mt-[10px] w-40 rounded-b-md bg-black/85 z-20`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div
                        className="py-2"
                        role="none">
                        <button onClick={() => openAbout()} className="hover:text-green-500 mx-10 mb-2">
                            <h3>About</h3>
                        </button>
                        <hr className="mx-4 mb-2" />
                        <a href="https://www.cbr.washington.edu/dart/query/adult_daily" target="_blank" className="hover:text-green-500">
                            <h3 className="flex flex-row mx-10">
                                Data
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h3>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DropdownMenu;