import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";
import { Button } from "../ui/button";
import linkedIn from "@/assets/icons/linkedin.svg";
import facebook from "@/assets/icons/facebook.svg";
import twitter from "@/assets/icons/twitter.svg";
import whatsapp from "@/assets/icons/whatsapp.svg";
import gmail from "@/assets/icons/gmail.svg";
import { useState } from "react";

const LinkShare = () => {
	// const user = useUserData();
	const [url, setUrl] = useState(() => window.location.origin);

	// useEffect(() => {
	// 	if (user?.token) {
	// 		setUrl(
	// 			window.location.origin + `/sign-up?ref=${user.user?.referral_code}`,
	// 		);
	// 	}
	// }, [user]);
	function handleEmailClick() {
		const mailtoLink = `mailto:?body=${encodeURIComponent(url)}`;
		window.open(mailtoLink, "_blank");
	}
	return (
		<div>
			<div className="mt-6 flex justify-center gap-5">
				<FacebookShareButton url={url}>
					<img src={facebook} width={32} height={32} />
				</FacebookShareButton>
				<TwitterShareButton url={url}>
					<img src={twitter} width={32} height={32} />
				</TwitterShareButton>
				<LinkedinShareButton url={url}>
					<img src={linkedIn} width={32} height={32} />
				</LinkedinShareButton>
				<WhatsappShareButton url={url}>
					<img src={whatsapp} width={32} height={32} />
				</WhatsappShareButton>
				<Button
					className="w-fit cursor-pointer border-none bg-white hover:bg-white p-0"
					onClick={handleEmailClick}
				>
					<img src={gmail} width={38} height={32} />
				</Button>
			</div>
		</div>
	);
};
export default LinkShare;
