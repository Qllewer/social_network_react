const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
	dialogs: [
		{ id: 1, name: "Dima" },
		{ id: 2, name: "Andrew" },
		{ id: 3, name: "Sveta" },
		{ id: 4, name: "Sasha" },
		{ id: 5, name: "Viktor" },
		{ id: 6, name: "Valera" },
	],
	messages: [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "Hello" },
		{ id: 3, message: "Yes" },
		{ id: 4, message: "No" },
		{ id: 5, message: "Yes" },
	],
};
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, { id: 1, message: body }],
			};
		default:
			return state;
	}
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
