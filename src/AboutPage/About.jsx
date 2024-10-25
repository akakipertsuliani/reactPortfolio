import React from "react";
import { Link } from "react-router-dom";
import StarsCanvas from "@components/ui/Stars";

function About() {
    return (
        <section className="relative z-10 h-dvh w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-12 lg:px-24">
            <StarsCanvas />
            <div className="h-[96px] flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-wide">
                About Me
            </div>
            <div className="max-w-3xl text-center text-base md:text-lg lg:text-xl text-white leading-relaxed lg:leading-loose mb-8">
                I am Akaki, a <span className="text-[#FFDD00] font-semibold">Front-end Developer</span> driven by a passion for creating Seamless and Engaging user experiences. 
                Currently, I’m embracing the dynamic world of freelancing, ready to tackle new challenges and collaborate on innovative projects. Let’s connect and bring your vision to life!
            </div>
            <Link to="/contact" className="relative border border-transparent px-10 py-3.5 overflow-hidden rounded-xl group bg-[#1D2D44] text-white transition-all ease-out duration-300 md:hover:border-white">
                <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 -skew-x-12 md:group-hover:-translate-x-44 ease"></span>
                <span className="relative text-xl font-semibold">Take the Next Step!</span>
            </Link>
        </section>
    );
}

export default About;
