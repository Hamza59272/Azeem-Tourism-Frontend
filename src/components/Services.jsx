import React from "react";
import { useInView } from "react-intersection-observer";
import atmCard from "../assets/atmCard.png";
import beach from "../assets/beach.png";
import travelGuide from "../assets/travelGuide.png";
import flight from "../assets/flight.png";
import { Card } from "flowbite-react";

const ServiceCard = ({ service }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
	    	border:1,
		    borderRadius:20,
		    padding:'2%',
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"
      }}
      className="bg-light-seafoam transform hover:bg-hover shadow-xl rounded-lg lg:w-96 border-2 h-auto"
    >
      <div className="icon flex justify-center">
        <img src={service.icon} alt="" width={120} height={100} />
      </div>
      <h5 className="text-center font-semibold">{service.title}</h5>
      <p className="text-center font-normal text-zinc-700">
        {service.subTitle}
      </p>
    </div>
  );
};

export default function Services() {
  const data = [
    {
      key: "1",
      icon: beach,
      title: "Exclusive Tours",
      subTitle:
        "Embark on extraordinary journeys, unlock exclusive experiences, and save big with our in-app payments. Your adventure begins with a click.",
    },
    {
      key: "2",
      icon: flight,
      title: "Holiday Packages",
      subTitle:
        "Indulge in worry-free getaways with our meticulously curated hotels, ensuring a COVID-safe haven. Your dream holiday is just a reservation away.",
    },
    {
      key: "3",
      icon: atmCard,
      title: "Flexible Payments",
      subTitle:
        "Seamless travel planning with flexible payment options in your preferred currency. Your convenience, your way.",
    },
    {
      key: "4",
      icon: travelGuide,
      title: "Best City Guide",
      subTitle:
        "Navigate your city effortlessly! Discover top-rated hotels and must-visit spots with a single click. Your personalized city guide awaits.",
    },
  ];

  const beforeStyles = {
    content: '""',
    left: '7%',
    bottom: '16px',
    width: '190px',
    height: '14px',
    transform: 'skew(-12deg) translateX(-50%)',
    background: '#6BC4A6',
    zIndex: -1,
	marginLeft:'auto',
	marginRight:'auto'
  };
  const wrapperStyles = {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  };


  return (
    <div className="animate-fade-down">
      	<div style={wrapperStyles}>
			<h2 className="py-2 text-3xl lg:pt-8 lg:text-4xl font-roboto font-bold uppercase text-zinc-800">
				Our Services
			</h2>
			<div style={beforeStyles}>

			</div>
		</div>
      <div className="flex lg:justify-center flex-col lg:flex-wrap lg:flex-row gap-5 lg:gap-10 p-10 rounded-lg">
        {data.map((service, key) => (
          <ServiceCard key={key} service={service} />
        ))}
      </div>
    </div>
  );
}
