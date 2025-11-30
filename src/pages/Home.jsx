import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Equipment from '../components/Equipment';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });

        // Handle hash scrolling when navigating back to home
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Process />
            <Testimonials />
            <Blog />
            <Equipment />
            <FAQ />
            <Pricing />
            <Contact />
        </>
    );
};

export default Home;
