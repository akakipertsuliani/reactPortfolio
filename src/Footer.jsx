import { faCheck, faEnvelope, faMessage, faPaperPlane, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import gsap from "gsap";
import StarsCanvas from "@components/ui/Stars";

function Footer() {
	const sendButtonTextRef = useRef();
	const sendButtonIconRef = useRef();
	const sendButtonSuccessRef = useRef();
	const sendButtonFailedRef = useRef();
	const sendButtonCircleSuccessRef = useRef();
	const sendButtonCircleFailedRef = useRef();
	const form = useRef();
	const inputNameRef = useRef();
	const inputEmailRef = useRef();
	const inputMessageRef = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		startSendAnimation();
	
		setTimeout(() => {
			emailjs.sendForm('service_mr0f1tx', 'template_sl5pgbh', form.current, {
				publicKey: 'BfXNKCL26H6obdUp9',
			}).then(() => {
				gsap.to(sendButtonCircleSuccessRef.current, {
					width: "500px",
					height: "500px",
					duration: 0.5,
					ease: 'power2.inOut',
					onComplete: () => {
						gsap.to(sendButtonSuccessRef.current, {
							y: "150%",
							duration: 0.3,
							ease: 'power2.inOut',
							onComplete: () => {
								setTimeout(resetButtonAnimation, 1500);
								inputNameRef.current.value = '';
								inputEmailRef.current.value = '';
								inputMessageRef.current.value = '';
							}
						});
					}
				});
			}, (error) => {
				gsap.to(sendButtonCircleFailedRef.current, {
					width: "500px",
					height: "500px",
					duration: 0.5,
					ease: 'power2.inOut',
					onComplete: () => {
						gsap.to(sendButtonFailedRef.current, {
							y: "150%",
							duration: 0.3,
							ease: 'power2.inOut',
							onComplete: () => {
								setTimeout(resetButtonAnimation, 1500);
							}
						});
					}
				});
			});
		}, 1600);
	};
	
	const startSendAnimation = () => {
		gsap.to(sendButtonTextRef.current, {
			y: "110%",
			duration: 0.5,
			ease: 'power2.inOut',
			onComplete: () => {
				gsap.to(sendButtonIconRef.current, {
					rotationZ: "45deg",
					duration: 0.3,
					ease: 'power2.inOut',
					onComplete: () => {
						gsap.to(sendButtonIconRef.current, {
							x: "300px",
							duration: 0.8,
							ease: 'power2.inOut',
						});
					}
				});
			}
		});
	};
	
	const resetButtonAnimation = () => {
		gsap.to(sendButtonTextRef.current, {
			y: "0%",
			duration: 0.5,
			ease: 'power2.inOut',
		});
		gsap.to(sendButtonIconRef.current, {
			rotationZ: "0deg",
			x: "0px",
			duration: 0.5,
			ease: 'power2.inOut',
		});
		gsap.to(sendButtonSuccessRef.current, {
			y: "0%",
			duration: 0.3,
			ease: 'power2.inOut',
		});
		gsap.to(sendButtonFailedRef.current, {
			y: "0%",
			duration: 0.3,
			ease: 'power2.inOut',
		});
		gsap.to(sendButtonCircleSuccessRef.current, {
			width: "0px",
			height: "0px",
			duration: 0.5,
			ease: 'power2.inOut',
		});
		gsap.to(sendButtonCircleFailedRef.current, {
			width: "0px",
			height: "0px",
			duration: 0.5,
			ease: 'power2.inOut',
		});
	};	
	
	return (
		<footer className="h-svh w-svw overflow-hidden box-border px-2 md:px-0 py-16 flex flex-col justify-center items-center space-y-10 text-white">
			<div className="relative z-[1] text-center space-y-2">
				<h2 className="text-4xl font-bold text-white">Get in Touch</h2>
				<p className="text-lg text-gray-400 max-w-md mx-auto">
					We would love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
				</p>
			</div>

			<form ref={form} onSubmit={sendEmail} className="relative z-[1] w-full max-w-lg p-8 bg-[#021b2d] rounded-xl shadow-lg border border-gray-600">
				<div className="flex flex-col space-y-6">
					<div className="relative">
						<FontAwesomeIcon
							icon={faUser}
							className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
						/>
						<input 
							ref={inputNameRef}
							type="text"
							placeholder="Your Name"
							name="from_name"
							className="inputs w-full pl-12 px-4 py-3 bg-[#011222] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
							/>
					</div>

					<div className="relative">
						<FontAwesomeIcon
							icon={faEnvelope}
							className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
							/>
						<input 
							ref={inputEmailRef}
							type="email"
							placeholder="Your Email"
							name="from_email"
							className="inputs w-full pl-12 px-4 py-3 bg-[#011222] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
							/>
					</div>

					<div className="relative">
						<FontAwesomeIcon
							icon={faMessage}
							className="absolute left-4 top-4 text-gray-400"
							/>
						<textarea
							ref={inputMessageRef}
							placeholder="Your Message"
							className="inputs resize-none w-full pl-12 px-4 py-3 bg-[#011222] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							name="message"
							rows={5}
							required
						></textarea>
					</div>
				</div>

				<button
					type="submit"
					className="relative overflow-hidden w-full h-11 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg mt-6 shadow-lg md:hover:shadow-xl flex items-center justify-center space-x-2 text-lg font-semibold transition duration-300 transform active:scale-[.97]"
				>
					<span ref={sendButtonCircleSuccessRef} className="absolute top-1/2 left-1/2 transition-all duration-300 size-[0] bg-[#28A745] rounded-full transform -translate-x-1/2 -translate-y-1/2"></span>
					<span ref={sendButtonCircleFailedRef} className="absolute top-1/2 left-1/2 transition-all duration-300 size-[0] bg-[#DC3545] rounded-full transform -translate-x-1/2 -translate-y-1/2"></span>
					<div ref={sendButtonFailedRef} className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center">
						<FontAwesomeIcon icon={faXmark} />
						<span>Something Wrong</span>
					</div>
					<div ref={sendButtonSuccessRef} className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center">
						<FontAwesomeIcon icon={faCheck} />
						<span>Sent</span>
					</div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center">
						<FontAwesomeIcon className="relative" ref={sendButtonIconRef} icon={faPaperPlane} />
						<span className="relative" ref={sendButtonTextRef}>Send Message</span>
					</div>
				</button>
			</form>
			<StarsCanvas />
		</footer>
	);
}

export default Footer;
