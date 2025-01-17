"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useGetCallById } from "@/hooks/useGetCallById";

const Hero: React.FC = () => {
    const router = useRouter();
    const { user } = useUser();
    const client = useStreamVideoClient();

    const meetingId = user?.id;
    const { call } = useGetCallById(meetingId!);

    const startRoom = async () => {
        if (!client || !user) return;

        const newCall = client.call("default", meetingId!);

        if (!call) {
            await newCall.getOrCreate({
                data: {
                    starts_at: new Date().toISOString(),
                },
            });
        }

        router.push(`/meeting/${meetingId}?personal=true`);
    };

    return (
        <div className="relative lg:h-[100vh] md:h-[100vh]  flex flex-col md:flex-row items-center justify-between bg-dark-1 text-white p-10 md:p-20">

            <div className="w-full md:w-1/2 text-center md:text-left space-y-10 pt-[10vh]">
                <h1 className="text-4xl w-[100%] md:text-6xl font-bold leading-tight">
                    Welcome to COVO
                </h1>
                <p className="text-lg md:text-xl w-[90%]">
                    Discover the power of seamless video communication with our
                    cutting-edge video conferencing solution.
                </p>
                <div className="flex justify-center items-center md:justify-start gap-4 mt-5">
                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-[40px] shadow hover:bg-gray-200 active:bg-gray-300" onClick={startRoom}>
                        Start New Meeting
                    </button>
                    <button className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-[40px] shadow hover:bg-blue-700 active:bg-blue-600">
                        <a href="#about" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                        }}>More Options</a>
                    </button>

                </div>
            </div>

            <div className="relative w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <img
                    src="/images/hero.png"
                    alt="Video Call"
                    className="w-4/5 md:w-full rounded-lg object-cover"
                />
                <img
                    src="/images/hero2.jpeg"
                    alt="Video Call"
                    className="absolute w-1/2 top-64 rounded-md h-36 object-cover border-2 border-white opacity-0 md:opacity-1 lg:opacity-1 "
                />
            </div>
        </div>
    );
};

export default Hero;