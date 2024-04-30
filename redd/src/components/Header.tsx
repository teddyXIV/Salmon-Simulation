const Header = () => {
    return (
        <div className=" flex flex-row font-sans text-white bg-black/60 w-screen h-fit absolute inset-x-0 top-0">
            <h1 className="text-3xl p-3 w-2/3">Columbia River Salmon Passage</h1>
            <div className="flex flex-row w-1/3 text-center">
                <h3 className="text-right my-auto w-1/2">About this project</h3>
                <h3 className="text-right my-auto w-1/2 mr-10">Data</h3>
            </div>
        </div>
    )
}

export default Header;