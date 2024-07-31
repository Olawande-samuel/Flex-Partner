import CardCirles from "@/assets/images/card-circles.png";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../ui/card";

const ContactCard = () => {
	return (
		<Card className="relative rounded-xl bg-[#011C2B] text-white">
			<CardHeader className="space-y-9">
				<div className="flex items-center gap-6">
					<i>
						<Mail color="#000" fill="#FFF" />
					</i>
					<a href="mailto:info@flexflow.tech">info@flexflow.tech</a>
				</div>
			</CardHeader>
			<CardContent className="mt-11">
				<ul className="flex gap-5">
					<li>
						<a href="" className="block rounded-full bg-accent p-2">
							<Facebook size={18} />
						</a>
					</li>
					<li>
						<a href="" className="block rounded-full bg-accent p-2">
							<Instagram size={18} />
						</a>
					</li>
					<li>
						<a href="" className="block rounded-full bg-accent p-2">
							<Twitter fill="#FFF" size={18} />
						</a>
					</li>
				</ul>
			</CardContent>
			<img
				src={CardCirles}
				alt="decorative"
				className="absolute bottom-0 right-0"
			/>
		</Card>
	);
};
export default ContactCard;
