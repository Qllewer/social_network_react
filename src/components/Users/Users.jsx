import React from "react";
import styles from './Users.module.css'
let Users = (props) => {
    return(
        <div>
            {
                props.users.map(users => <div key={users.id}>
                    <span>
                        <div>
                            <img src={users.photoUrl} className={styles.userPhoto}></img>
                        </div>
                        <div>
                            {users.followed 
                            ? <button onClick={() => {props.followed(users.id)}}>Unfollow</button> : <button>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{users.fullName}</div>
                            <div>{users.status}</div>
                        </span>
                        <span>
                             <div>{users.country}</div>
                            <div>{users.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
)} 

export default Users;