import { flowData } from "../constants/data"


const FlowBuilder = () => {
    return (
        <div>
            <div className="pt-32 w-full">
                <p className='text-textColor text-center'>Boost productivity with Flow</p>
                <div className="flex justify-center items-center ">
                    <h1 className="text-white text-h2 text-center font-bold w-3/4 sm:w-full md:text-center sm:text-center sm:text-h3 xs:text-h4">Easy to use Flow Builder</h1>
                </div>

                <div className="flex gap-4 justify-center items-center mt-6">
                    <button className="hover:text-hoverColor text-pColor  py-2 w-52 rounded-3xl border  hover:border-hoverColor transition-colors">
                        Sample 1
                    </button>
                    <button className="hover:text-hoverColor text-pColor  py-2 w-52  rounded-3xl border  hover:border-hoverColor transition-colors">
                    Sample 2
                    </button>
                    <button className="hover:text-hoverColor  text-pColor   py-2 w-52  rounded-3xl border  hover:border-hoverColor transition-colors">
                    Sample 3
                    </button>
                </div>

                <div className='flex justify-center items-center sm:mt-8 xs:mt-10'>
                    <img src='/flow.png' alt='integrations' className='w-fit' />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5  pt-8">
                {flowData.map((data, i) => (
                    <div className="flex flex-col items-center justify-center bg-cardBg p-6 rounded-2xl" key={i}>
                        <h2 className="text-white text-h4 text-center font-semibold">{data.title}</h2>
                        <p className="text-cardP text-p1 text-center">{data.description}</p>
                    </div>
                ))}
            </div>



            </div>
        </div>
    )
}

export default FlowBuilder
