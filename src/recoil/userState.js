import { atom } from "recoil";

const userState = atom({
	key: "userState",
	default: {
		login: false,
		id: "",
		name: "",
	},
});

export default userState;
