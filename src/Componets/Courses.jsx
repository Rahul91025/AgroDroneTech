import React from 'react';
import list from "../../public/list.json";
import Cards from "./Cards";

const Courses = () => {
    return (
        <>
            <div className="bg-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                            Courses We Offer
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base leading-7 text-gray-300 sm:text-lg md:mt-5 md:max-w-3xl">
                            Discover a wide array of courses designed to empower your learning journey.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courses;
