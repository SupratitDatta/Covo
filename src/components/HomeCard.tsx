'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HomeCardProps {
    className?: string;
    img: string;
    title: string;
    description: string;
    handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
    return (
        <section
            className={cn(
                'bg-[#e33f9b] p-4 sm:p-6 md:p-2 lg:p-4 xl:p-6 text-center flex flex-col justify-between items-center w-full',
                'min-h-[130px] min-w-[300px] md:min-h-[100px] md:min-w-[50px] lg:min-h-[80px] lg:min-w-[50px] xl:min-h-[150px] xl:min-w-[100px]',
                'rounded-[14px] cursor-pointer',
                className
            )}

            onClick={handleClick}
        >
            <div className="flex justify-center items-center glassmorphism size-10 rounded-[10px]">
                <Image src={img} alt="meeting" width={20} height={20} />
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold">{title}</h1>
                <p className="text-md font-normal opacity-1 md:hidden lg:hidden">{description}</p>
            </div>
        </section>
    );
};

export default HomeCard;