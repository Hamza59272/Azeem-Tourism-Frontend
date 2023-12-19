import React, { useState, Suspense } from "react";
import ScrollToTop from "./ScrollToTop";
import SearchBar from "./SearchBar";

const Hero = React.lazy(() => import("./Hero"));
const PackagesCard = React.lazy(() => import("./PackagesCard"));
const Services = React.lazy(() => import("./Services"));
const Tickets = React.lazy(() => import("./TicketsCards"));
const Tours = React.lazy(() => import("./ToursCards"));
import bgImage from "../assets/fullbg.jpg";

export default function App() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div
		>
			<Suspense fallback={<div>Loading...</div>}>
				<Hero />
				<SearchBar setSearchTerm={setSearchTerm} />
				<Tours searchTerm={searchTerm} />
				<Tickets searchTerm={searchTerm} />
				<PackagesCard searchTerm={searchTerm} />
				<Services searchTerm={searchTerm} />
			</Suspense>
			<ScrollToTop />
		</div>
	);
}