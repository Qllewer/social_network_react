import React from "react";
import userPhoto from "../../assets/images/stub-users.png"
import styles from "./Users.module.css"
import { NavLink } from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages =[];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => { props.onPageChanger(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile`+ u.id}>
                            <img src={u.photos.small != null ? u.photos.small: userPhoto} className={styles.userPhoto}></img>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                // Из-за слабого сервера может некорректно отрабатывать
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                // Для подписки/отписки нужно авторизоваться на сервере: https://social-network.samuraijs.com
                                onClick={() => {props.unFollow(u.id)}}
                            >Отписаться</button>
                            : <button
                                // Из-за слабого сервера может некорректно отрабатывать
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                // Для подписки/отписки нужно авторизоваться на сервере: https://social-network.samuraijs.com
                                onClick={() => {props.follow(u.id)}}
                            >Подписаться</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    {/* <span>
                        <div>{u.country}</div>
                        <div>{u.location.city}</div>
                     </span> */}
                </span>
            </div>)
        }
    </div>
}

export default Users;