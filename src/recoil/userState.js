import { atom } from "recoil";

const userState = atom({
	key: "userState",
	default: {
		logInStatus: false,
		id: "",
		name: "",
	},
});

export default userState;
