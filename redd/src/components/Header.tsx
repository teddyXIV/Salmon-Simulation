const Header = () => {
    return (
        <div className="flex flex-row font-sans text-white bg-black/60 w-screen h-fit absolute inset-x-0 top-0">
            <h1 className="text-3xl p-3 w-screen lg:w-2/3">Columbia River Salmon Passage</h1>
            <div id="right" className="hidden lg:flex flex-row w-1/3 justify-end">
                {/* <div className="w-1/4" /> */}
                <button className="place-content-end my-auto w-1/4 mr-10 hover:text-green-500">
                    <h3>About</h3>
                </button>
                <a href="https://www.cbr.washington.edu/dart/query/adult_daily" target="_blank" className="text-right my-auto w-1/4 mr-10 hover:text-green-500 flex flex-row">
                    <h3>Data</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            </div>
        </div >
    )
}

export default Header;