import React from "react";
import "../App.css";
import AngularIcon from "@assets/Skill/Angular.svg";
import ReactIcon from "@assets/Skill/React.svg";
import WixIcon from "@assets/Skill/Wix.svg";
import FigmaIcon from "@assets/Skill/Figma.svg";
import IllustratorIcon from "@assets/Skill/Illustrator.svg";

function SkillText() {
	return (
        <>
            <div className="absolute top-1/2 left-20 box-border px-10 -translate-y-1/2 h-[90%] w-[90%] hidden flex-col justify-between">
                <div className="h-[195px] w-full bg-slate-800 rounded-lg box-border py-2 px-4">
                    <h1 className="text-2xl font-bold text-white">UX/UI Design</h1>
                    <p className="text-lg text-gray-300">
                        My process begins with creating UX/UI mockups, drawing
                        inspiration, and designing visual graphics to bring ideas to
                        life.
                    </p>
                </div>
                <div className="relative top-4 h-[195px] w-full bg-slate-800 rounded-lg box-border py-2 px-4">
                    <h1 className="text-2xl font-bold text-white">Programming</h1>
                    <p className="text-lg text-gray-300">
                        Angular and React are my go-to tools for crafting dynamic
                        and responsive websites. It’s a time-consuming process, but
                        the results are always worth it.
                    </p>
                </div>
                <div className="h-[100px] w-full bg-slate-800 rounded-lg box-border py-2 px-4">
                    <h1 className="text-2xl font-bold text-white">WIX Solutions</h1>
                    <p className="text-lg text-gray-300">
                        For clients needing a quick and brand-focused solution, I
                        offer beautiful websites built with WIX.
                    </p>
                </div>
            </div>

            <div className="px-3 h-[100%] w-[100%] flex gap-1 flex-col justify-evenly items-center">
                <div className="w-full h-full flex flex-col justify-between bg-slate-800 rounded-lg box-border py-2 px-4">
                    <div>
                        <h1 className="lg:text-2xl font-bold text-white">UX/UI Design</h1>
                        <p className="lg:text-lg text-base text-gray-300">
                            My process begins with creating UX/UI mockups, drawing
                            inspiration, and designing visual graphics to bring ideas to
                            life.
                        </p>
                    </div>
                    <div className="flex gap-4 w-full justify-end m-1">
                        <img src={FigmaIcon} alt="figma" className="w-8 lg:w-16 aspect-square" />
                        <img src={IllustratorIcon} alt="Illustrator" className="w-8 lg:w-16 aspect-square" />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-between bg-slate-800 rounded-lg box-border py-2 px-4">
                    <div>
                        <h1 className="lg:text-2xl font-bold text-white">Programming</h1>
                        <p className="lg:text-lg text-base text-gray-300">
                            Angular and React are my go-to tools for crafting dynamic
                            and responsive websites. It’s a time-consuming process, but
                            the results are always worth it.
                        </p>
                    </div>
                    <div className="flex gap-4 w-full self-end justify-end m-1">
                        <img src={AngularIcon} alt="Angular" className="w-8 lg:w-16 aspect-square" />
                        <img src={ReactIcon} alt="React" className="w-8 lg:w-16 aspect-square" />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-between bg-slate-800 rounded-lg box-border py-2 px-4">
                    <div>
                        <h1 className="lg:text-2xl font-bold text-white">WIX Solutions</h1>
                        <p className="lg:text-lg text-base text-gray-300">
                            For clients needing a quick and brand-focused solution, I
                            offer beautiful websites built with WIX.
                        </p>
                    </div>
                    <div className="flex gap-4 w-full justify-end">
                        <img src={WixIcon} alt="Wix" className="w-16 aspect-square" />
                    </div>
                </div>
            </div>
        </>
	);
}

export default SkillText;
