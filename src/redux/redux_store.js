import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import profileReduce from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import { thunk } from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import appReducer from "../redux/app_reducer";

let reducers = combineReducers({
	profilePage: profileReduce,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
	applyMiddleware(thunk)
	));

export default store;
