import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "@/assets/images/partner.png";
import { CircleCheck } from "lucide-react";

const Becoming = () => {
	return (
		<section className="py-24">
			<Container className="h-full">
				<div className="flex flex-col gap-24 px-2 sm:px-4 md:px-14 lg:flex-row">
					<div className="basis-1/2 rounded-3xl">
						<img
							src={Image}
							height={450}
							width={524}
							alt="afro-man-using-his-digital-tablet-with-earphones.png"
							className="w-full"
						/>
					</div>
					<div className="basis-1/2">
						<h3 className="mb-3 max-w-[60%] text-4xl font-semibold">
							Become a FlexFlow Partner
						</h3>
						<p className="mb-8">
							Start Referring Now and Watch Your Earnings Grow!
						</p>
						<ul className="mb-10 space-y-4">
							<li className="flex gap-4">
								<CircleCheck size={28} color="white" fill="#FF6600" />
								No Flexing Required! Help Flex drivers from the comfort of your
								couch.
							</li>
							<li className="flex gap-4">
								<CircleCheck size={28} color="white" fill="#FF6600" />
								Be a Part of Something Big: Join a program that's making a
								difference for Flexers!
							</li>
							<li className="flex gap-4">
								<CircleCheck size={28} color="white" fill="#FF6600" />
								Exclusive Benefits: Unlock resources and tools to maximize your
								earnings.
							</li>
						</ul>
						<Link
							to="/sign-up"
							className="rounded-sm bg-accent px-6 py-4 text-white"
						>
							Get Started
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
};
export default Becoming;
