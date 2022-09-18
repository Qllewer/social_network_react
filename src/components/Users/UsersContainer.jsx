import { connect } from "react-redux";
import { followAC, setUsersAC } from "../../redux/users_reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow : (userId) => {
            dispatch(followAC(userId))
        },
        setUsers : (users) => {
            dispatch(setUsersAC(users))
        },
    }
}



export default connect (mapStateToProps, mapDispatchToProps)(Users);