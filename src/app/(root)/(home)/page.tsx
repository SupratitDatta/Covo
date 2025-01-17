import About from '@/components/HomePage/About';
import Features from '@/components/HomePage/Feature';
import Footer from '@/components/HomePage/Footer';
import Hero from '@/components/HomePage/Hero';
import Join from '@/components/HomePage/Join';

const Home = () => {
    return (
        <section className="flex size-full flex-col gap-5 text-white">
            <Hero />
            <About />
            <Features />
            <Join />
            <Footer />
        </section>
    );
};

export default Home;