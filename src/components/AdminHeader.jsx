import React from "react";

const AdminHeader = ({ title }) => {
	return (
		<div className="">
			{/* <p className="text-gray-400">{category}</p> */}
			<p className="text-xl font-bold tracking-tight text-slate-700 mt-4 pl-12 Inter">
				{title}
			</p>
		</div>
	);
};

export default AdminHeader;
