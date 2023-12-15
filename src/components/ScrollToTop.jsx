import React, { useState, useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function ScrollToTop() {
	const [scrollState, setScrollState] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup function to remove the event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

	return (
		<>
			<div className="flex">
				<FloatingWhatsApp
					phoneNumber="+971522760013"
					chatMessage=""
					messageDelay="1"
					accountName="Azeem Tourism"
				/>
			</div>
		</>
	);
}