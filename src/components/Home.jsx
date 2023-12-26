import React, { useEffect ,useState, Suspense } from "react";
import ScrollToTop from "./ScrollToTop";
import SearchBar from "./SearchBar";
import CountrySelectionModal from './Modal'; 

const Hero = React.lazy(() => import("./Hero"));
const PackagesCard = React.lazy(() => import("./PackagesCard"));
const Services = React.lazy(() => import("./Services"));
const Tickets = React.lazy(() => import("./TicketsCards"));
const Tours = React.lazy(() => import("./ToursCards"));
const Visas = React.lazy(() => import("./VisasCard"));
const Hotels = React.lazy(() => import("./HotelsCard"));


export default function App() {
	const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);

	useEffect(() => {
        // Check if the country is already selected and stored in localStorage
        const country = localStorage.getItem("country");
        if (!country) {
            setShowModal(true); 
        }
    }, [showModal]);

    const handleCountrySelect = (country) => {
			localStorage.setItem("country", country);
        	setShowModal(false); 
    };
	return (
		<div>
			<CountrySelectionModal open={showModal} onSelect={handleCountrySelect} />
			<Suspense fallback={<div>Loading...</div>}>
				<Hero />
				<SearchBar setSearchTerm={setSearchTerm} />
				<Tours searchTerm={searchTerm} />
				<Tickets searchTerm={searchTerm} />
				<PackagesCard searchTerm={searchTerm} />
				<Visas searchTerm={searchTerm} />
				<Hotels searchTerm={searchTerm} />
				<Services searchTerm={searchTerm} />
			</Suspense>
			<ScrollToTop />
		</div>
	
		
	);
}