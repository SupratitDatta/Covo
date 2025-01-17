import { Metadata } from 'next';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
    title: 'COVO',
    description: "A collaborative workspace for teams, enabling seamless communication and productivity.",
    icons: {
        icon: "/images/logo.png",
    },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <main className="relative">
            <Navbar />
            <div className="w-full h-full">{children}</div>
        </main>
    );
};

export default RootLayout;