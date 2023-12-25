import React, { lazy, Suspense } from "react";
// import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
const Packages = lazy(() => import("../components/PackagesCard"));
const Hotels = lazy(() => import("../components/HotelsCard"));
const About = lazy(() => import("../components/Services"));
const Home = lazy(() => import("../components/Home"));
const PackagesDetails = lazy(() => import("../components/PackageDetail"));
const HotelDetails = lazy(() => import("../components/HotelDetail"));
const Contact = lazy(() => import("../components/Contact"));
const Signin = lazy(() => import("../components/Login"));
const SuccessPayment = lazy(() => import("../components/strip/CheckOutSucces"));
const Tickets = lazy(() => import("../components/TicketsCards"));
const Tours = lazy(() => import("../components/ToursCards"));
const Visas = lazy(() => import("../components/VisasCard"));
const TicketDetail = lazy(() => import("../components/TicketDetail"));
const TourDetail = lazy(() => import("../components/TourDetail"));
const VisaDetail = lazy(() => import("../components/VisaDetail"));
//const NotFound = lazy(() => import("../components/NotFound"));

import SpinnerGif from "../assets/Spinner.gif";
import NotFound from "../components/NotFound";
export const Loading = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<img
				src={SpinnerGif}
				alt="Loading..."
				className="animate-spin w-32 h-32 blur"
			/>
		</div>
	);
};
export default function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Tours" element={<Tours />} />
				<Route path="/visas" element={<Visas />} />
				<Route path="/tickets" element={<Tickets />} />
				<Route path="/packages" element={<Packages />} />
				<Route path="/hotels" element={<Hotels />} />
				<Route path="/about" element={<About />} />
				<Route path="/packages/:slug" element={<PackagesDetails />} />
				<Route path="/hotels/:slug" element={<HotelDetails />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/admin/signin" element={<Signin />} />
				<Route path="/payment/confirm" element={<SuccessPayment />} />
				<Route path="/tickets/:slug" element={<TicketDetail />} />
				<Route path="/tours/:slug" element={<TourDetail />} />
				<Route path="/visas/:slug" element={<VisaDetail />} />
				<Route path="/*" element={<NotFound />} />
				
			</Routes>
		</Suspense>
	);
}
