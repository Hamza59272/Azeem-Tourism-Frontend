import axios from "axios";
import React from "react";
const PayButton = () => {
	const handleCheckout = () => {
		axios
			.post("/payments/intent", {
				packageCharges: 100,
			})
			.then((response) => {
				if (response.data) {
					window.location.href = response.data;
				}
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<>
			<button onClick={() => handleCheckout()}>Check out</button>
		</>
	);
};

export default PayButton;
