import { atom } from "recoil";

const userState = atom({
	key: "userState",
	default: {
		logIn: false,
		id: "",
		name: "",
	},
});

export default userState;
