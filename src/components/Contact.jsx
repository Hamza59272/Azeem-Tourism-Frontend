import React, { useRef ,useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Alert, Snackbar } from "@mui/material";
import { Button } from "flowbite-react";
import { BsLinkedin, BsFacebook, BsTiktok, BsInstagram } from "react-icons/bs";
import { TbBrandThreads } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import bgImage from "../assets/contactNew.jpg";

const Contact = () => {
	const [open, setOpen] = React.useState(false);
	const [message, setMessage] = React.useState("");
	const form = useRef();


	useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_1k2n7nm",
				"template_7irigj4",
				form.current,
				"x22LetCmQE_F-xPPn",
			)
			.then(
				(result) => {
					console.log(result.text);
					form.current.reset();
					setMessage("Email sent successfully");
					setOpen(true);
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	return (
		<section className="relative bg-white dark:bg-gray-900 animate-fade-down">
		
		<div className="border-2 py-8 lg:py-10 px-4 mx-auto max-w-screen-md mt-4"
		  style={{
			position: 'relative',
			backgroundImage: `url(${bgImage})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			display: 'flex',
			flexDirection: 'column',
			border: 1,
			borderRadius: 10,
			boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
		  }}
		>
				
				<h2 className="text-3xl lg:text-4xl font-bold text-center font-inter text-zinc-800 dark:text-white-100 mb-4">
          Contact Us
				</h2>
				<p className="mb-8 lg:mb-16 font-normal text-center text-zinc-800 dark:text-white sm:text-xl">
          Questions? Need assistance? Ready for your next adventure? 🌍 Contact
          Azeem Tourism using the form below! Our dedicated team is here to help
          make your travel dreams a reality. ✈️🌟 #AzeemTourism #ExploreWithUs
				</p>
				<div className="w-full md:w-1/2 flex flex-col ">
					<div className="flex space-x-4">
						<ul className="social__links flex space-x-10 lg:space-x-20 justify-center py-4 pl-20 text-2xl">
							<li>
								<a
									href="https://www.facebook.com/profile.php?id=61552420340278"
									target="_blank"
									rel="noreferrer"
									className="text-zinc-800"
								>
									<BsFacebook />
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/azeem-tourism-60b4b5295/"
									target="_blank"
									rel="noreferrer"
									className="text-zinc-800"
								>
									<BsLinkedin />
								</a>
							</li>
							<li>
								<a
									href="https://www.tiktok.com/@azeem.tourism?_t=8gKyynJGcvH&_r=1"
									target="_blank"
									rel="noreferrer"
									className="text-zinc-800"
								>
									<BsTiktok />
								</a>
							</li>
							<li>
								<a
									href="https://www.threads.net/@azeemtourism"
									target="_blank"
									rel="noreferrer"
									className="text-zinc-800"
								>
									<TbBrandThreads />
								</a>
							</li>
							<li>
								<a
									href="https://instagram.com/azeemtourism?igshid=NGVhN2U2NjQ0Yg=="
									target="_blank"
									rel="noreferrer"
									className="text-zinc-800"
								>
									<BsInstagram />
								</a>
							</li>
							<li>
								<a
									href="mailto:azeemtourism@gmail.com"
									target="_blank"
									rel="noreferrer"
									className="text-zinc-800"
								>
									<HiOutlineMail />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<form
					ref={form}
					onSubmit={(e) => {
						sendEmail(e);
					}}
					className="space-y-8 flex flex-col"
				>
					<div>
						<label
							htmlFor="email"
							className="font-bold block mb-2 text-sm font-medium text-white dark:text-gray-300"
						>
              Your email
						</label>
						<input
							type="email"
							id="email"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="your email here"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="subject"
							className="font-bold block mb-2 text-sm font-medium text-white dark:text-gray-300"
						>
              Subject
						</label>
						<input
							type="text"
							id="subject"
							className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="Let us know how we can help you"
							required
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="font-bold block mb-2 text-sm font-medium text-white dark:text-gray-400"
						>
              				Your message
						</label>
						<textarea
							id="message"
							rows="6"
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Leave a comment..."
						></textarea>
					</div>
					<div className="w-full md:w-56 self-center">
						<Button
							color="gray"
							onClick={(e) => {
								sendEmail(e);
							}}
							className="font-bold shadow-sm bg-zinc-100 text-white hover:bg-zinc-800 hover:text-white transition-colors duration-100 text-sm font-medium text-center rounded-lg bg-primary-700 w-full"
						>
              Send message
						</Button>
					</div>
				</form>
				<Snackbar
					open={open}
					autoHideDuration={2000}
					onClose={() => setOpen(false)}
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				>
					<Alert
						onClose={() => setOpen(false)}
						severity="success"
						sx={{ width: "100%" }}
					>
						{message}
					</Alert>
				</Snackbar>
			</div>
		</section>
	);
};

export default Contact;
