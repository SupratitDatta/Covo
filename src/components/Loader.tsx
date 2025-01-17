import Image from 'next/image';

const Loader = () => {
    return (
        <div className="flex-center h-screen w-full bg-dark-4">
            <Image
                src="/icons/loading-circle.svg"
                alt="Loading..."
                width={100}
                height={100}
            />
        </div>
    );
};

export default Loader;