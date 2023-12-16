/* eslint-disable react/react-in-jsx-scope */
import { Carousel } from "flowbite-react";
import pic1 from "../assets/pics/pic-1.webp";
import pic2 from "../assets/pics/pic-2.webp";
import pic3 from "../assets/pics/pic-3.webp";
import pic4 from "../assets/pics/pic-4.webp";
import pic5 from "../assets/pics/pic-5.webp";
import pic6 from "../assets/pics/pic-6.webp";
import pic7 from "../assets/pics/pic-7.webp";
import pic8 from "../assets/pics/pic-8.webp";
import pic9 from "../assets/pics/pic-9.webp";
import pic10 from "../assets/pics/pic-10.webp";
import pic11 from "../assets/pics/pic-11.webp";
import pic12 from "../assets/pics/pic-12.webp";
import pic13 from "../assets/pics/pic-13.webp";
import pic14 from "../assets/pics/pic-14.webp";
import pic15 from "../assets/pics/pic-15.webp";

export default function Component() {
	return (
		<div className="animate-fade-down">
			<h2 className="py-5 text-2xl lg:text-3xl font-bold font-inter text-zinc-800 text-center">
				Your Journey Begins here!
			</h2>
			<div className="h-[40vh] sm:h-[40vh] xl:h-[90vh] 2xl:h-[90vh] mx-3 rounded-lg overflow-hidden shadow-lg">
				<Carousel width="100vw" height="full">
					<img loading="lazy" src={pic2} alt="..." className="rounded-lg shadow-md" />
					<img loading="lazy" src={pic4} alt="..." className="rounded-lg" />
					<img loading="lazy" src={pic6} alt="..." className="rounded-lg"/>
					<img loading="lazy" src={pic3} alt="..." className="rounded-lg"/>
					<img loading="lazy" src={pic9} alt="..." className="rounded-lg"/>
					<img loading="lazy" src={pic5} alt="..." className="rounded-lg"/>
					<img loading="lazy" src={pic7} alt="..." className="rounded-lg"/>
					<img loading="lazy" src={pic8} alt="..." className="rounded-lg"/>
					<img loading="lazy" src={pic11} alt="..." className="rounded-lg"/>
					<img loading="lazy" src={pic1} alt="..."className="rounded-lg" />
					<img loading="lazy" src={pic14} alt="..." className="rounded-lg"/>
					<img loading="lazy" src={pic10} alt="..." className="rounded-lg"/>
					<img loading="lazy" src={pic13} alt="..." className="rounded-lg"/>
					<img loading="lazy" src={pic15} alt="..." className="rounded-lg" />
					<img loading="lazy" src={pic12} alt="..." className="rounded-lg" />
				</Carousel>
			</div>
		</div>
	);
}
