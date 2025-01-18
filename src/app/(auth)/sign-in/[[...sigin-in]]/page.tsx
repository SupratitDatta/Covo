import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-dark-4">
            <SignIn />
        </main>
    );
}