import { atom } from "recoil";

const userState = atom({
	key: "userState",
	default: {
		login: false,
		_id: "",
		socialId: "",
		email: "",
		name: {
			given: "",
			family: "",
		},
		picture: "",
		avatar: 0,
		gender: "",
		birthday: "",
		phone: "",
		nationalId: "",
		events: {
			registered: [],
			following: [],
		},
	},
});

export default userState;
