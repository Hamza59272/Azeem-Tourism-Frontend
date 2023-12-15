/* eslint-disable react/jsx-key */
import React from "react";
import atmCard from "../assets/atmCard.png";
import beach from "../assets/beach.png";
import travelGuide from "../assets/travelGuide.png";
import flight from "../assets/flight.png";
import { Card } from "flowbite-react";

export default function Services() {
	const data = [
		{
			key:"1",
			icon: beach,
			title: "Exclusive Tours",
			subTitle:
        "Embark on extraordinary journeys, unlock exclusive experiences, and save big with our in-app payments. Your adventure begins with a click.",
		},
		{
			key:"2",
      icon: flight,
			title: "Holiday Packages",
			subTitle:
        "Indulge in worry-free getaways with our meticulously curated hotels, ensuring a COVID-safe haven. Your dream holiday is just a reservation away.",
		},
		{
			key:"3",
      icon: atmCard,
			title: "Flexible Payments",
			subTitle:
        "Seamless travel planning with flexible payment options in your preferred currency. Your convenience, your way.",
		},
		{
			key:"4",
      icon: travelGuide,
			title: "Best City Guide",
			subTitle:
        "Navigate your city effortlessly! Discover top-rated hotels and must-visit spots with a single click. Your personalized city guide awaits.",
		},
	];

	return (
		<div className="animate-fade-down">
			<div className="title">
				<h2 className="py-5 text-3xl lg:py-10 lg:text-4xl font-bold font-inter text-zinc-800 text-center">
          Our Services
				</h2>
			</div>
			<div className=" flex lg:justify-center flex-col lg:flex-wrap  lg:flex-row gap-5  lg:gap-10 p-10 rounded-lg">
				{data.map((service, key) => {
					return (
						<Card key={key} className="transform hover:scale-110 shadow-lg rounded-lg lg:w-96 border-2  h-auto">
							<div className="icon flex justify-center">
								<img src={service.icon} alt="" width={100} height={100} />
							</div>
							<h5 className=" text-center font-semibold">{service.title}</h5>
							<p className="text-center font-normal text-zinc-700">
								{service.subTitle}
							</p>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
