function App() {
	return (
		<div className="w-screen flex bg-light_gray">
			<main className="py-24 px-6 rounded-lg">
				<article className="bg-orange rounded-t-lg">
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
				<article className="bg-cyan-very_dark rounded-b-lg">
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
		</div>
	);
}

export default App;
