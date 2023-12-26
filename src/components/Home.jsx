import React, { useEffect ,useState, Suspense } from "react";
import ScrollToTop from "./ScrollToTop";
import SearchBar from "./SearchBar";
import CountrySelectionModal from './Modal'; 
import { Box, Button, Typography } from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

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
	const [region,setRegion] = useState(null)

	useEffect(() => {
        // Check if the country is already selected and stored in localStorage
        const country = localStorage.getItem("country");
        if (!country) {
            setShowModal(true); 
        }
		else{
			setRegion(country)
		}
		
    }, [showModal]);

    const handleCountrySelect = (country) => {
			localStorage.setItem("country", country);
			setRegion(country)
        	setShowModal(false); 
    };
	return (
		<div>
			<CountrySelectionModal open={showModal} onSelect={handleCountrySelect} />
			
			<Suspense fallback={<div>Loading...</div>}>
			<Box 
				sx={{
					display:'flex',
					flexDirection : 'row',
					justifyContent:'flex-end'
				}}
			>
				<Typography variant="body1" sx={{mt:1,textAlign:'end',p:1}}><PlaceOutlinedIcon /> Region : {region}</Typography>
				<Button 
					sx={{
						mt:1,
						textDecoration:'underline'
					}}
					onClick= {	
						() => setShowModal(true) 
					}
				>
					Change Region
				</Button>
			</Box>
				<Hero />
				{!showModal &&
					(<>
						
						<SearchBar setSearchTerm={setSearchTerm} />
						<Tours searchTerm={searchTerm} />
						<Tickets searchTerm={searchTerm} />
						<PackagesCard searchTerm={searchTerm} />
						<Visas searchTerm={searchTerm} />
						<Hotels searchTerm={searchTerm} />
						<Services searchTerm={searchTerm} />
					</>)
				}
			</Suspense>
			<ScrollToTop />
		</div>
	
		
	);
}