
const Integrations = () => {
    return (
        <div>
            <div className="pt-32 w-full">
                <p className='text-textColor text-center'>Multiple Integrations At One Place</p>
                <div className="flex justify-center items-center ">
                    <h1 className="text-white text-h2 text-center font-bold w-3/4 sm:w-full md:text-center sm:text-center sm:text-h3 xs:text-h4">Integrations and Extensions</h1>
                </div>

                <div className='flex justify-center items-center sm:mt-8 xs:mt-10'>
                    <img src='/integrations.png' alt='integrations' className='w-full' />
                </div>

                <div className="flex justify-center items-center mt-6">
                    <button
                        className="hover:bg-hoverColor text-white py-2 px-6 rounded-3xl border"
                    >
                        Be First to Join Beta
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Integrations
