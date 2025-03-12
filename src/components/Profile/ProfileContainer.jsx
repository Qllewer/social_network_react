import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile_reducer";
import { useParams } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) {
			userId = 31928;
		};
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}
	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
			</div>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
});

// const TakeParams = (props) => {
//     return <ProfileContainer {...props} param={useParams()} />
// }
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}

export default
	compose(
		connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
		withAuthRedirect,
		withRouter,
	)(ProfileContainer);