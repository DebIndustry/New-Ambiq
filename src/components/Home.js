import React, { useEffect } from "react";
import About from "./About";
import Faq from "./Faq";
import faqData from "../Data/faqData";
import Slider1 from "./slider1";
import BookingSection1 from "./BookingSection1";
import Counter from "./CounterItem";
import Footer from "./Footer";
import WaveSection from "./Header";
import { Ouresteemed } from "./Ouresteemed";



function Home() {

    useEffect(() => {
        setTimeout(() => {
            document.body.classList.remove('no-scroll');
        }, 5100);
    }, []);


    return (
        <>
            <Slider1 />
            <BookingSection1 />
            <About />
            <Counter/>
            <Faq faqs={faqData} />
            <Ouresteemed/>
            <Footer/>
        </>

    );
}

export default Home;