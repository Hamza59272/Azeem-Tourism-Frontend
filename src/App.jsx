import React, { lazy, Suspense, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routers from "./routers/Routers";
import NotFound from "./components/NotFound";

const ManageOrders = lazy(() => import("./components/Order"));
const AddPackages = lazy(() => import("./components/AddPackages"));
const ManageInactivePackages = lazy(() => import("./components/ManageInactivePackages"));
const EditPackageDetails = lazy(() => import("./components/EditPackageDetails"));
const ManagePackages = lazy(() => import("./components/ManagePackages"));
const ManageInactiveTickets = lazy(() => import("./components/ManageInactiveTickets"));
const AddTickets = lazy(() => import("./components/AddTickets"));
const ManageTickets = lazy(() => import("./components/ManageTickets"));
const EditTicketDetails = lazy(() => import("./components/EditTicketDetails"));
const AddTours = lazy(() => import("./components/AddTours"));
const ManageTours = lazy(() => import("./components/ManageTours"));
const EditTourDetails = lazy(() => import("./components/EditTourDetails"));
const ManageInactiveTours = lazy(() => import("./components/ManageInactiveTours"));

function App() {
	if (!localStorage.getItem("accessToken")) {
		return (
			<Suspense fallback={<div>Loading...</div>}>
				<Fragment>
					<Navbar />
						<Routers />
					<Footer />
				</Fragment>
			</Suspense>
		);
	} else {
		return (
			<Suspense fallback={<div>Loading...</div>}>
				<Fragment>
					<Routes>
						<Route path="/" element={<ManagePackages />} />
						<Route path="/admin/managepackages" element={<ManagePackages />} />
						<Route path="/admin/manageOrders" element={<ManageOrders />} />
						<Route path="/admin/addpackages" element={<AddPackages />} />
						<Route
							path="/admin/manageinactivepackages"
							element={<ManageInactivePackages />}
						/>
						<Route
							path="/admin/editPackageDetails"
							element={<EditPackageDetails />}
						/>
						<Route path="/admin/addtickets" element={<AddTickets />} />
						<Route path="/admin/managetickets" element={<ManageTickets />} />
						<Route
							path="/admin/editTicketDetails"
							element={<EditTicketDetails />}
						/>
						<Route
							path="/admin/manageinactivetickets"
							element={<ManageInactiveTickets />}
						/>

						<Route path="/admin/addtours" element={<AddTours />} />
						<Route path="/admin/managetours" element={<ManageTours />} />
						<Route path="/admin/editTourDetails" element={<EditTourDetails />} />
						<Route
							path="/admin/manageinactivetours"
							element={<ManageInactiveTours />}
						/>
						<Route
							path="/*"
							element={<NotFound />}
						/>
					</Routes>
				</Fragment>
			</Suspense>

		);
	}
}

export default App;
