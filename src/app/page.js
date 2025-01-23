export default function Home() {
	return (
		<main className="min-h-screen">
			<nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<h1 className="text-2xl font-bold gradient-text">
						Carbon Security
					</h1>
					<div className="space-x-6">
						<a
							href="#home"
							className="nav-link hover:gradient-text transition-colors duration-300"
						>
							Home
						</a>
						<a
							href="#projects"
							className="nav-link hover:gradient-text transition-colors duration-300"
						>
							Projects
						</a>
						<a
							href="#about"
							className="nav-link hover:gradient-text transition-colors duration-300"
						>
							About
						</a>
						<a
							href="#contact"
							className="nav-link hover:gradient-text transition-colors duration-300"
						>
							Contact
						</a>
					</div>
				</div>
			</nav>

			<section
				id="home"
				className="h-screen flex items-center justify-center"
			>
				<div className="text-center">
					<h2 className="text-5xl font-bold mb-4 gradient-text">
						Carbon Security
					</h2>
					<p className="text-xl mb-8">Your Security, Our Priority</p>
				</div>
			</section>

			<section
				id="projects"
				className="min-h-screen flex items-center justify-center py-20"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-12 gradient-text text-center">
						Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="p-8 rounded-lg gradient-border"
							>
								<h3 className="text-2xl font-semibold mb-4 gradient-text">
									Project {i}
								</h3>
								<p className="mb-6">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<div className="p-1">
				<div className="flex justify-center items-center">
					<section
						id="about"
						className="min-h-screen flex items-center justify-center w-[calc(98%)] animated-gradient py-20 rounded-3xl"
					>
						<div className="container mx-auto px-4">
							<h2 className="text-4xl font-bold mb-12 gradient-text text-center">
								About Us
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
								<div>
									<p className="text-lg mb-6 text-gray-800">
    									Lorem ipsum dolor sit amet, consectetur
    									adipiscing elit. Sed do eiusmod tempor
    									incididunt ut labore et dolore magna aliqua. 
    									Lorem ipsum dolor sit amet, consectetur
    									adipiscing elit. Sed do eiusmod tempor
    									incididunt ut labore et dolore magna aliqua.
									</p>
									<p className="text-lg mb-6 text-gray-800">
    									Lorem ipsum dolor sit amet, consectetur
    									adipiscing elit. Sed do eiusmod tempor
    									incididunt ut labore et dolore magna aliqua.
									</p>
									<button className="px-6 py-2 rounded-full text-lg font-semibold gradient-bg text-white">
										Learn More
									</button>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<section
				id="contact"
				className="min-h-screen flex items-center justify-center py-20"
			>
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-8 gradient-text">
						Get in Touch
					</h2>
					
					<h3 className="text-2xl font-bold mb-8">
					idfk what to put here, links to our personal websites and github profiles maybe?
					</h3>
					
					<button
						type="submit"
						className="px-8 py-3 rounded-full text-lg font-semibold gradient-bg text-white"
					>
						Send Message
					</button>
				</div>
			</section>

			<footer className="bg-gray-900 py-2">
				<div className="container mx-auto px-5 text-center">
					<p>&copy; 2025 Carbon Security. All rights reserved.<br />Easy game easy life</p>
				</div>
			</footer>
		</main>
	);
}
