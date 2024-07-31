import Container from "../Container";
import { Card, CardContent } from "../ui/card";

const Testimonials = () => {
	return (
		<section className="min-h-[600px] bg-[#111111]">
			<Container className="py-12">
				<div>
					<h4 className="mb-10 text-center text-[2rem] font-semibold text-white">
						What Our Partner Says
					</h4>
					<div className="flex flex-col gap-9 sm:flex-row">
						<Card className="rounded-[20px] border-none bg-[#222629]">
							<CardContent className="p-10">
								<p className="mb-8 text-lg font-light tracking-wide text-white">
									FlexFlow has been a game-changer for my friend who drives for
									Flex. They're earning so much more now, and it's been a huge
									relief for them. I signed up to be a referral partner and I'm
									already making money for helping them out. It's a win-win!"
								</p>
								<p className="text-2xl text-accent">Sarah B.</p>
							</CardContent>
						</Card>
						<Card className="rounded-[20px] border-none bg-[#222629]">
							<CardContent className="p-10">
								<p className="mb-8 text-lg font-light tracking-wide text-white">
									I never thought I could make money without being a Flex driver
									myself, but the FlexFlow referral program has been amazing.
									It's so easy to share my link, and I'm helping out friends
									while earning some extra cash. It's a great program!
								</p>
								<p className="text-2xl text-accent">David A.</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</Container>
		</section>
	);
};
export default Testimonials;
