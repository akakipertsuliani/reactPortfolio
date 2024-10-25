import React from "react";
import "../App.css";
import SkillText from "../SecondSectionComponents/SkillText";

function SecondSection() {
	return (
		<section id="section-2" className="relative flex items-center h-screen w-screen box-border pt-20 sm:pt-20 pb-1 lg:pb-5 px-5 sm:px-14 md:px-20 lg:px-28">
			<div className="hidden lg:block 3d-block bg-slate-300 w-1/4 h-full rounded-s-lg"></div>
			<div className="relative box-border py-2 bg-slate-900 w-full lg:h-full lg:w-3/4 rounded-e-lg flex items-center">
				<SkillText />
			</div>
		</section>
	);
}

export default SecondSection;
