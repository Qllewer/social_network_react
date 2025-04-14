import React, { Component } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import { connect } from 'react-redux';
import { compose } from "redux";
import withRouters from "./hoc/WithRouter";
import { initializeApp } from "./redux/app_reducer";
import Loader from "./components/Common/Loader/Loader";
import { Suspense } from "react";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized){
			return (
				<div>
					<Loader/>
				</div>
			)
		}
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route
							path="/dialogs"
							element={<Suspense fallback={<Loader />}>
								<DialogsContainer />
							</Suspense>}
						/>
						<Route path="/profile/:userId" element={<Suspense fallback={<Loader />}>
								<ProfileContainer />
							</Suspense>}
						/>
						<Route path="/profile/*" element={<Suspense fallback={<Loader />}>
								<ProfileContainer />
							</Suspense>}
						/>
						<Route path="/users" element={<Suspense fallback={<Loader />}>
								<UsersContainer />
							</Suspense>}
						/>
						<Route path="/login" element={<LoginPage />} />
					</Routes>
				</div>
			</div>
		)
	};
};

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

const mapDispatchToProps = {
	initializeApp
}

export default compose(
	withRouters,
	connect(mapStateToProps, mapDispatchToProps)
)(App);
