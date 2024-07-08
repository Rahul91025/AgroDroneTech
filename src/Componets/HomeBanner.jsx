import banner from '../../public/drone4.png';
import svgImage from '../../public/drone3.jpg';

export default function HomeBanner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 mb-10 bg-white" >
                <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold text-gray-700">
                            Welcome to <span className="text-green-500">AgroDrones !!!</span><br />
                            Revolutionize Farming Today.
                        </h1>

                        <p className="text-xl text-gray-500">
                            Enhance your farming with AgroDrones! Our innovative technology boosts crop yield, reduces costs, and transforms agricultural practices. Join the future of farming today!
                            <br />
                            With AgroDrones, you can monitor crop health in real-time, optimize irrigation schedules, and detect pest infestations early.
                        </p>

                        <label className="input flex items-center gap-2 border border-gray-300 rounded-md bg-white hover:shadow-md transition-shadow duration-300 p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow font-bold bg-transparent focus:outline-none"
                                placeholder="Email"
                            />
                        </label>

                        <button className="btn mt-[50px] w-32 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md w-[100px] h-[43px]">Send</button>

                    </div>
                </div>
                <div className="order-1 w-full md:w-1/2">
                    <img src={banner} className="w-full h-auto ml-20 mt-9" alt="AgroDrones Banner" />
                </div>
            </div>

            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 relative top-[-100px] bg-white">
                <h2 className="text-3xl font-bold text-gray-700 mb-[100px] text-center">
                    <span className="text-gray-500 border-b-4 border-green-500 pb-1 rounded">AgroDrones Features</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-19 md:space-x-8">
                    <div className="md:w-1/3 text-center">
                        <div className="rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 p-4 transition duration-300">
                            <img src={svgImage} className="w-40 h-40 mx-auto mb-4 rounded-full transform hover:scale-110 hover:shadow-lg transition duration-300" alt="AgroFarming Icon" />
                            <h3 className="text-xl font-bold text-gray-700 mb-2">Optimize Crop Health</h3>
                            <p className="text-gray-600">
                                Monitor crop health in real-time and make data-driven decisions to ensure optimal growth conditions.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/3 text-center">
                        <div className="rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 p-4 transition duration-300">
                            <img src={svgImage} className="w-40 h-40 mx-auto mb-4 rounded-full transform hover:scale-110 hover:shadow-lg transition duration-300" alt="AgroFarming Icon" />
                            <h3 className="text-xl font-bold text-gray-700 mb-2">Efficient Irrigation</h3>
                            <p className="text-gray-600">
                                Improve water management with precise irrigation schedules tailored to your crop's needs, reducing water wastage.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/3 text-center">
                        <div className="rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 p-4 transition duration-300">
                            <img src={svgImage} className="w-40 h-40 mx-auto mb-4 rounded-full transform hover:scale-110 hover:shadow-lg transition duration-300" alt="AgroFarming Icon" />
                            <h3 className="text-xl font-bold text-gray-700 mb-2">Early Pest Detection</h3>
                            <p className="text-gray-600">
                                Detect pest infestations early to prevent damage and optimize pest control strategies for healthier crops.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
