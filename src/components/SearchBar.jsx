/* eslint-disable react/prop-types */
import React from "react";

export default function SearchBar({ setSearchTerm }) {
	return (
		<div className="animate-fade-down">
			<div className="">
				<h2 className="text-3xl py-1  lg:text-4xl font-bold font-inter text-zinc-800 text-center py-5">
          Search
				</h2>
			</div>
			<div className="flex flex-row justify-center items-center px-5 py-0 md:py-5">
				<input
					id="search"
					type="text"
					className="rounded w-full sm:w-[60vh] py-2.5 px-3 text-zinc-800 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Search tours, tickets, holiday packages..."
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
		</div>
	);
}
