import Image from 'next/image';
import { Button } from './ui/button';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

const Loader = () => {
    const { isSignedIn, isLoaded } = useAuth();

    return (
        <div className="flex justify-center items-center h-screen w-full bg-dark-4">
            {!isLoaded ? (
                <Image
                    src="/icons/loading-circle.svg"
                    alt="Loading..."
                    width={100}
                    height={100}
                />
            ) : isSignedIn ? (
                <Image
                    src="/icons/loading-circle.svg"
                    alt="Loading..."
                    width={100}
                    height={100}
                />
            ) : (
                <div className="text-center animate-fadeIn">
                    <p className="text-white text-6xl mb-20">Hello there</p>
                    <Button className="relative group">
                        <Link href="/sign-in"
                            className="min-w-40 w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-800 transform group-hover:scale-105 active:scale-95 hover:bg-gradient-to-r">
                            Sign In/Sign Up to Continue
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Loader;