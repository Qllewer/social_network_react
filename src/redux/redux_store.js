import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReduce from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import { thunk } from "redux-thunk";
import { reducer as formReducer} from "redux-form";

let reducers = combineReducers({
	profilePage: profileReduce,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk)
);

export default store;
