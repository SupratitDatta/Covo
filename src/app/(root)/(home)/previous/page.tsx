import CallList from "@/components/CallList";

const PreviousPage = () => {
    return (
        <section className="pt-[15vh] flex flex-col flex-wrap size-full gap-8 text-white bg-dark-4 min-h-screen px-6 py-12 md:px-12">
            <h1 className="text-3xl font-bold text-center">Previous Calls</h1>
            <CallList type="ended" />
        </section>
    );
};

export default PreviousPage;