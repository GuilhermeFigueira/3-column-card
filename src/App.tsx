function App() {
	return (
		<div className="w-screen flex bg-light_gray lg:h-screen flex-col">
			<main className="py-24 px-6 lg:grid lg:grid-cols-3 max-w-screen-xl lg:m-auto ">
				<article className="bg-orange rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
					<img src="/icon-sedans.svg" alt="Sedan car icon" />
					<h1>Sedans</h1>
					<p>
						Choose a sedan for its affordability and excellent fuel
						economy. Ideal for cruising in the city or on your next
						road trip.
					</p>
					<button className="text-orange">Learn More</button>
				</article>
				<article className="bg-cyan-dark">
					<img src="/icon-suvs.svg" alt="SUV car icon" />
					<h1>SUVs</h1>
					<p>
						Take an SUV for its spacious interior, power, and
						versatility. Perfect for your next family vacation and
						off-road adventures.
					</p>
					<button className="text-cyan-dark">Learn More</button>
				</article>
				<article className="bg-cyan-very_dark rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
					<img src="/icon-luxury.svg" alt="Luxury car icon" />
					<h1>Luxury</h1>
					<p>
						Cruise in the best car brands without the bloated
						prices. Enjoy the enhanced comfort of a luxury rental
						and arrive in style.
					</p>
					<button className="text-cyan-very_dark">Learn More</button>
				</article>
			</main>
			<div className="text-center pt-4 justify-self-end">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://github.com/guilhermefigueira"
					target="_blank"
					className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
				>
					Guilherme Figueira
				</a>
				.
			</div>
		</div>
	);
}

export default App;
