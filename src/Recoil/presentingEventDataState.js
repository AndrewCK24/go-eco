import { atom } from "recoil";

const presentingEventsDataState = atom({
	key: "presentingEventsDataState",
	default: {
		recycle: [],
		cleanUp: [],
	},
});

export default presentingEventsDataState;
