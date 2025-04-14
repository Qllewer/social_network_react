import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { follow, unFollow, setCurrentPage, getUsers } from "../../redux/users_reducer";
import Users from "../Users/Users";
import Loader from "../Common/Loader/Loader";
import { compose } from "redux";
import { getUser, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users.selectors";

class UsersContainer extends PureComponent {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanger = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
		this.props.setCurrentPage(pageNumber);
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Loader /> : null}
				<Users totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanger={this.onPageChanger}
					users={this.props.users}
					unFollow={this.props.unFollow}
					follow={this.props.follow}
					followingInProgress={this.props.followingInProgress} />
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUser(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}

export default compose(
	connect(mapStateToProps,
		{ follow, unFollow, setCurrentPage, getUsers })
)(UsersContainer);