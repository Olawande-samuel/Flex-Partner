import ContactCard from "@/components/dashboard/help-desk/ContactCard";
import ContactForm from "@/components/dashboard/help-desk/ContactForm";
import ContactFormWrapper from "@/components/dashboard/help-desk/ContactFormWrapper";

const HelpDesk = () => {
	return (
		<section className="space-y-11">
			<h3 className="mb-[15px] text-xl font-semibold text-blackish">
				Contact Us
			</h3>
			<section className="flex flex-col justify-between gap-6 md:gap-8 lg:flex-row">
				<article className="lg:min-w-[25rem]">
					<ContactCard />
				</article>
				<main className="grow">
					<ContactFormWrapper>
						<ContactForm />
					</ContactFormWrapper>
				</main>
			</section>
		</section>
	);
};
export default HelpDesk;
