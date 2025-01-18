import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
    return (
        <main className="flex min-h-screen py-8 w-full items-center justify-center bg-dark-4">
            <SignUp />
        </main>
    );
}