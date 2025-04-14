import { createSelector } from "reselect";

export const getUser = (state) => {
	return state.usersPage.users;
}

export const getPageSize = (state) => {
	return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => { 
	return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
	return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
}

export const getUserSelector = (state) => {
	return getUser(state);
}

export const getUserSuperSelector = createSelector(getUser, (users) => {
	return users.filter(u => true);
})