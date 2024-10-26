import React, { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<nav className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px]">
				<ul className="relative rounded-3xl w-full bg-[#F2F2F20D] backdrop-blur-md flex justify-between items-center p-4">
					<Link className={`element ${location.pathname === "/reactPotrfolio" ? "active" : ""}`} to="/reactPotrfolio">
						Work
					</Link>
					<Link className={`element ${location.pathname === "/about" ? "active" : ""}`} to="/about">
						About
					</Link>
					<Link className={`element ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">
						Contact
					</Link>
					<span className="link-box start-animate rounded-3xl"></span>
				</ul>
			</nav>

			<nav className={`block lg:hidden absolute top-0 right-0 z-[51] h-dvh w-screen bg-[#F2F2F20D] backdrop-blur-md transition-transform ${ menuOpen ? "transform-none" : "translate-x-full" }`}>
				<ul className="absolute top-36 right-10 flex flex-col items-end justify-between h-1/3">	
					<Link className="text-white text-3xl" onClick={toggleMenu} to="/reactPotrfolio">Work</Link>
					<Link className="text-white text-3xl" onClick={toggleMenu} to="/about">About</Link>
					<Link className="text-white text-3xl" onClick={toggleMenu} to="/contact">Contact</Link>
				</ul>
				<Link
					to="https://drive.google.com/file/d/1yIT_NOgxcpsZROUVdfF0TTFxmAMcV3Lh/view?usp=drive_link"
					target="_blank"
					onClick={toggleMenu}
					className="z-[51] absolute top-3/4 right-10 px-8 py-2 text-3xl text-white"
				>
					Resume
					<FontAwesomeIcon icon={faArrowRightLong} className="transform -rotate-45 ml-1" />
				</Link>
			</nav>

			<Link
				to="https://drive.google.com/file/d/1yIT_NOgxcpsZROUVdfF0TTFxmAMcV3Lh/view?usp=drive_link"
				target="_blank"
				className="hidden lg:block relative px-8 py-2 text-lg text-white rounded-xl transition duration-300 md:hover:bg-[#1D2D44]"
			>
				Resume
				<FontAwesomeIcon icon={faArrowRightLong} className="transform -rotate-45 ml-1" />
			</Link>

			<button onClick={toggleMenu} className="lg:hidden z-[51]">
				{menuOpen ? (
					<FontAwesomeIcon icon={faXmark} className="text-3xl text-white" /> 
				) : (
					<FontAwesomeIcon icon={faBars} className="text-3xl text-white" />
				)}
			</button>
		</>
	);
}

export default Nav;
