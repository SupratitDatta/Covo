'use client';
import { useEffect, useState } from 'react';
import { DeviceSettings, VideoPreview, useCall, useCallStateHooks, } from '@stream-io/video-react-sdk';
import Alert from './Alert';
import { Button } from './ui/button';

const MeetingSetup = ({
    setIsSetupComplete,
}: {
    setIsSetupComplete: (value: boolean) => void;
}) => {
    const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
    const callStartsAt = useCallStartsAt();
    const callEndedAt = useCallEndedAt();
    const callTimeNotArrived =
        callStartsAt && new Date(callStartsAt) > new Date();
    const callHasEnded = !!callEndedAt;

    const call = useCall();

    if (!call) {
        throw new Error('useStreamCall must be used within a StreamCall component.',);
    }

    const [isMicCamToggled, setIsMicCamToggled] = useState(false);

    useEffect(() => {
        if (isMicCamToggled) {
            call.camera.disable();
            call.microphone.disable();
        }
        else {
            call.camera.enable();
            call.microphone.enable();
        }
    }, [isMicCamToggled, call.camera, call.microphone]);

    if (callTimeNotArrived)
        return (
            <Alert title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`} />
        );

    if (callHasEnded)
        return (
            <Alert
                title="The call has been ended by the host"
                iconUrl="/icons/call-ended.svg"
            />
        );

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-8 lg:px-12 bg-dark-4 text-white">
            <h1 className="text-center text-2xl font-bold sm:text-4xl lg:text-3xl">
                Setup
            </h1>
            <VideoPreview className=" w-full md:w-[50%] lg:w-[50%] aspect-video rounded-md border border-gray-700" />
            <div className="flex h-16 items-center justify-center gap-3">
                <label className="flex items-center justify-center gap-2 font-medium">
                    <input
                        type="checkbox"
                        checked={isMicCamToggled}
                        onChange={(e) => setIsMicCamToggled(e.target.checked)}
                    />
                    Join with mic and camera off
                </label>
                <DeviceSettings />
            </div>
            <Button
                className="rounded-md bg-green-500 px-4 py-2.5 mb-4"
                onClick={() => {
                    call.join();

                    setIsSetupComplete(true);
                }}
            >
                Join meeting
            </Button>
        </div>
    );
};

export default MeetingSetup;