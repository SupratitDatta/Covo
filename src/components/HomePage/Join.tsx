"use client";

import React from "react";
import Image from 'next/image';
import Link from "next/link";

const features = [
    { label: 'Collaboration', icon: 'fas fa-user-friends' },
    { label: 'Scheduling', icon: 'fas fa-clock' },
    { label: 'Recordings', icon: 'fas fa-play-circle' },
    { label: 'Video Calls', icon: 'fas fa-video' },
];

const Join: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-20 h-screen pt-[4vh] md:pt-[20vh] lg:pt-[20vh]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                <div className="flex-1 items-center justify-center flex flex-col text-center md:text-left mb-12 md:mr-8 mr-0 md:mb-0 mt-8">
                    <p className="text-lg text-blue-500 font-medium">
                        Connect with Confidence
                    </p>
                    <h1 className="text-6xl font-bold text-gray-800 leading-tight">
                        Cutting-
                        <span className="text-blue-500">Edge</span>
                    </h1>
                    <p className="mt-6 text-gray-600 text-xl leading-relaxed text-justify">
                        Elevate your virtual communication with our state-of-the-art video
                        conferencing platform. Enjoy a seamless, secure, and feature-rich
                        experience that empowers your team to stay connected effortlessly.
                    </p>
                    <Link href="/personal-room" >
                        <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-600 transition-all">
                            Create Your Room
                        </button>
                    </Link>
                    <div className="flex flex-wrap justify-start md:gap-10 gap-3 mx-auto mt-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="bg-blue-800 text-white rounded-full p-4 flex justify-center items-center">
                                    <i className={`${feature.icon} text-2xl`} aria-hidden="true"></i>
                                </div>
                                <p className="mt-2 text-sm font-medium text-gray-800">{feature.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center mt-6">
                        <Image
                            src="/images/screen.png"
                            alt="Personalized Virtual Spaces"
                            className="w-[90%]"
                            width={600} height={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Join;