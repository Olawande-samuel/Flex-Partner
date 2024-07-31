import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

interface SignUpUser {
	email: string;
	password: string;
	phone: string;
	_id: string;
}
const useSignUpUser = () => {
	const [user, setuser] = useState<SignUpUser | null>(null);
	const { getItem } = useLocalStorage();
	const userdata: SignUpUser | null = getItem("new-user");

	useEffect(() => {
		if (userdata?.email) {
			setuser(userdata);
		}
	}, [userdata?.email]);

	return user;
};
export default useSignUpUser;
