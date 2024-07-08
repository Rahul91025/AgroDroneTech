import React from 'react';

const Card = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 flex flex-col h-full hover:scale-105">
            <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-4 flex-grow">{item.description}</p>
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                        {item.price === 0 ? (
                            <span className="text-lg font-semibold text-green-600 hover:bg-yellow-400">Free</span>
                        ) : (
                            <span className="text-lg font-semibold text-green-600 border border-green-600 rounded px-2 hover:bg-black">
                                {item.price}
                            </span>
                        )}
                        {item.price !== 0 && <span className="text-sm ml-1 text-gray-600"> / course</span>}
                    </div>
                    <div className="text-sm text-gray-600">{item.duration}</div>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
                    {item.price === 0 ? "Enroll Now" : "Buy Now"}
                </button>
            </div>
        </div>
    );
}

export default Card;
