import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MeetingTypeList from '../MeetingTypeList';

const About: React.FC = () => {

    return (
        <section id="about" className="pt-[4vh] md:pt-[20vh] lg:pt-[20vh] min-h-[100vh] flex flex-col-reverse md:flex-row items-center justify-center bg-gray-50 md:py-16 lg:py-16 px-6">
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 animate-slide-in-left">
                <img
                    src="/images/hero3.jpg"
                    alt="Video Conferencing Illustration"
                    className="rounded-lg w-[80%] shadow-lg shadow-blue-300 mt-4 md:mt-0 lg:mt-0"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 animate-slide-in-right">
                <h2 className="text-lg font-medium text-gray-600 mb-2 mx-auto">Intuitive and Efficient</h2>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 mx-auto">Elevate Your Meetings</h1>
                <p className="text-gray-600 max-w-xl mb-10 text-justify text-lg">
                    Our video conferencing platform is designed to streamline your virtual
                    communication needs. From scheduling meetings to managing recordings,
                    we’ve got you covered.
                </p>
                <MeetingTypeList />
            </div>
        </section>
    );
};

export default About;