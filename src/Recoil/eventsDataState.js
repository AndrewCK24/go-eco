import { atom } from "recoil";

const eventsDataState = atom({
	key: "eventsDataState",
	default: {
		recycle: [],
		cleanUp: [],
	},
});

export default eventsDataState;
