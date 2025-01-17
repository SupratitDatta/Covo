import CallList from '@/components/CallList';

const UpcomingPage = () => {
    return (
        <section className="pt-[15vh] flex flex-col size-full gap-8 text-white bg-dark-4 min-h-screen px-6 py-12 md:px-12">
            <h1 className="text-3xl font-bold text-center">Upcoming Meeting</h1>
            <CallList type="upcoming" />
        </section>
    );
};

export default UpcomingPage;