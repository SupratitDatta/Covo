import React from "react";
import Image from 'next/image';

const featuresData = [
    {
        title: "High-Quality Video Calls",
        subheading: "Crystal Clear Communication",
        description:
            "Experience HD video and audio with low latency, designed to ensure uninterrupted meetings.",
        image: "/images/f1.png",
    },
    {
        title: "Interactive Presentations",
        subheading: "Engage with Ease",
        description:
            "Share your screen, collaborate on documents, and use annotation tools for impactful presentations.",
        image: "/images/f2.png",
    },
    {
        title: "Video Recording",
        subheading: "Capture Every Moment",
        description:
            "Record meetings with a single click and access them anytime for review, sharing, or documentation.",
        image: "/images/f3.png",
    },
];

const Feature: React.FC = () => {
    return (
        <section className="bg-dark-1 text-white min-h-screen flex items-center justify-center py-8 px-4 md:px-12">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Effortless Collaboration Made Simple
                    </h1>
                    <p className="mt-4 text-xl">Enhance your video communication experience with the best tools designed to revolutionize how you connect and collaborate</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-40 object-cover rounded-t-lg mb-4"
                                width={400} height={200}
                            />
                            <h2 className="text-xl font-bold">{feature.title}</h2>
                            <p className="text-sm text-gray-500 mt-2">{feature.subheading}</p>
                            <p className="text-base mt-4">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;