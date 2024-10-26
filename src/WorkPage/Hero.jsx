import "../App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Cover } from "@components/ui/cover.jsx";
import { BackgroundLines } from "@components/ui/background-lines";

function Hero() {
	const controlPosition = () => {
		const windowWidth = window.innerWidth;
		if (windowWidth < 1024 && windowWidth > 768) {
			return [10, 6, 2];
		} else if (windowWidth < 768) {
			return [5, 5, 2];
		}
		
		return [19, 6, 2];
	}

    return (
        <BackgroundLines className="h-dvh w-full overflow-hidden">
            <section className="main-section h-full flex justify-center items-center box-border px-2 lg:px-14">
                <h1 className="welcome-text relative z-[2] text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-16 font-mainFont flex flex-col items-center gap-2">
                    <div className="hi-text-container relative">
                        <span
                            className="hi-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-16 font-mainFont"
                        >
                            Hi, I’m Akaki
                        </span>
                    </div>

                    <Cover className="cursor-pointer hidden lg:block">
                        Front-End Developer
                    </Cover>
                    <span className="block lg:hidden font-bold text-blue-700">
                        Front-End Developer
                    </span>
                </h1>
        
                <Canvas
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        height: "100dvh",
                        width: "100vw",
                    }}
                >
                    <ambientLight intensity={2} />
                </Canvas>

                <div className="scroll-down-arrow absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 flex justify-center items-center">
                    <a href="#section-2">
                        <img
                            src="src/assets/CircleArrowDown.svg"
                            alt="Scroll Down"
                            className="w-9 aspect-square"
                        />
                    </a>
                </div>
            </section>
        </BackgroundLines>
    );
}

export default Hero;
