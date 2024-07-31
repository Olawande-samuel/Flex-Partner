import ActiveButton from "../ActiveButton";
import logo from "@/assets/icons/home-logo.svg";
import Container from "../Container";
const Hero = () => {
	return (
		<section className="min-h-screen w-full  bg-[#0F172A] sm:h-screen">
			<Container className="h-full pb-10">
				<div className="flex h-full flex-col gap-10">
					<div className="mt-12 flex items-center justify-center">
						<img src={logo} alt="" />
					</div>
					<div className="mx-auto flex max-w-[961px] flex-1 flex-col items-center justify-center text-center">
						<h1 className="mb-5 text-5xl font-bold leading-[67.69px] text-white md:text-[3.3rem] ">
							Know a Flex Driver? Help Them Crush Their Goals &{" "}
							<span className="text-accent">
								Earn Cash Yourself! ($1,000+ Bonus!)
							</span>
						</h1>
						<p className="mx-auto mb-16 w-full text-center text-lg tracking-wide text-white sm:w-[70%]">
							Struggling Flex Driver in Your Life? FlexFlow can help them land
							better blocks and earn more!
						</p>
						<div>
							<ActiveButton
								title="Sign Up Now"
								className="rounded-none px-12 text-xl"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
export default Hero;
