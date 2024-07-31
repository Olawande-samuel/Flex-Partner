import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

const ContactFormWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<Card className="rounded-xl text-[#0F172A] py-6">
			<CardHeader className="mb-8 px-8">
				<CardTitle className="mb-3">Get in touch</CardTitle>
				<p className="text-grayish">
					Feel free contact with us with any queries
				</p>
			</CardHeader>
			<CardContent className="px-8">{children}</CardContent>
		</Card>
	);
};
export default ContactFormWrapper;
