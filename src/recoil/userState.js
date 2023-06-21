import { atom } from "recoil";

const userState = atom({
	key: "userState",
	default: {
		login: false,
		_id: "",
		googleId: "",
		name: {
			given: "",
			family: "",
		},
		email: "",
		picture: "",
		avatar: 0,
		gender: "",
		birthday: "",
		phone: "",
		nationalId: "",
	},
});

export default userState;
