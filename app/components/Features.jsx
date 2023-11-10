import { cardData } from "../constants/data"


const Features = () => {
    return (
        <div className="pt-32 w-full">
            <p className='text-textColor text-center'>Multiple Features At One Place</p>
            <div className="flex justify-center items-center ">
                <h1 className="text-white text-h2 text-center font-bold w-3/4 sm:w-full md:text-center sm:text-center sm:text-h3 xs:text-h4">Powerful features to help you manage all your leads</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5  pt-8">
                {cardData.map((data, i) => (
                    <div className="flex flex-col items-center justify-center bg-cardBg p-6 rounded-2xl" key={i}>
                        <img src={data.icon} alt={data.title} className="" />
                        <h2 className="text-white text-h4 text-center font-bold">{data.title}</h2>
                        <p className="text-cardP text-p1 text-center">{data.description}</p>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Features
