import React from 'react';
import Hero from '../../component/about/Hero';
import OurStorySection from '../../component/about/OurStorySection';
import ValueSection from '../../component/about/ValueSection';
import TeamSection from '../../component/about/TeamSection';
import FacilitiesSection from '../../component/about/FacilitiesSection';
import Testimonial from '../../component/about/Testimonial';
import CTA from '../../component/about/CTA';

const About = () => {
    return (
        <>
            <Hero />
            <OurStorySection />
            <ValueSection />
            <TeamSection />
            <FacilitiesSection />
            <Testimonial />
            <CTA />
        </>
    );
};

export default About;