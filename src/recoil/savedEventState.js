import { atom } from "recoil";

const savedEventState = atom({
	key: "savedEventState",
	default: {},
});

export default savedEventState;
