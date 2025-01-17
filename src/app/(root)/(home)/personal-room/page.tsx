"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useGetCallById } from "@/hooks/useGetCallById";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Table = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 p-4 bg-dark-3 rounded-lg shadow-md w-full">
            <h2 className="text-sm font-medium text-sky-1 md:text-base lg:text-lg min-w-[120px] md:min-w-[150px]">
                {title}:
            </h2>
            <p className="truncate text-xs font-bold text-white md:text-sm lg:text-base">
                {description}
            </p>
        </div>
    );
};

const PersonalRoom = () => {
    const router = useRouter();
    const { user } = useUser();
    const client = useStreamVideoClient();
    const { toast } = useToast();
    const [isCopied, setIsCopied] = useState(false);

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

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(meetingLink);
        setIsCopied(true);
        toast({
            title: "Copied!",
            description: "Invitation link copied to clipboard.",
        });
        setTimeout(() => setIsCopied(false), 3000);
    };

    return (
        <section className="pt-[15vh] flex flex-col items-center gap-10 px-4 sm:px-8 md:px-12 lg:px-16 py-12 min-h-screen bg-dark-4 text-white">
            <h1 className="text-xl font-bold text-center md:text-2xl lg:text-4xl">
                Personal Meeting Room
            </h1>
            <div className="w-full max-w-5xl flex flex-col gap-6">
                <Table title="Topic" description={`${user?.username}'s Meeting Room`} />
                <Table title="Meeting ID" description={meetingId!} />
                <Table title="Invite Link" description={meetingLink} />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4 w-full sm:w-auto">
                <Button
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-1 rounded-lg text-sm sm:text-lg"
                    onClick={startRoom}
                >
                    Start Meeting
                </Button>
                <Button
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 rounded-lg text-sm sm:text-lg flex items-center gap-2"
                    onClick={handleCopyToClipboard}
                >
                    <i className="fas fa-copy text-lg"></i>
                    {isCopied ? "Copied!" : "Copy Invitation"}
                </Button>
            </div>
        </section>
    );
};

export default PersonalRoom;