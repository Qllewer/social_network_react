import React from "react";
import styles from './Users.module.css'
import axios from "axios";

let Users = (props) => {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items)

    })

    if (props.users.length === 0) {
    props.setUsers([
        { id: 1, photoUrl:'src/components/Users/images/zaglushka.png', followed:false, name: "Dmitry", status: 'Crazy', location: {city: 'Minsk', country: 'Belarus'} },
        { id: 2, photoUrl:'/images/zaglushka.jpg',  followed:true, name: "Sasha", status: 'Im hungry', location: {city: 'Moskva', country: 'Russia'} },
        { id: 3, photoUrl:'/images/zaglushka.jpg',  followed:false, name: "Nikita", status: 'Evil', location: {city: 'Alma-Ata', country: 'Kazakhstan'} },
        { id: 4, photoUrl:'/images/zaglushka.jpg',  followed:true, name: "Pavel", status: 'Sad', location: {city: 'Kiev', country: 'Ukraine'} },])
    }
    return(
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src="src/images/zaglushka.jpg" className={styles.userPhoto}></img>
                        </div>
                        <div>
                            {u.followed 
                            ? <button onClick={() => {props.unfollow(u.id)}}>Отписаться</button> 
                            : <button onClick={() => {props.follow(u.id)}}>Подписаться</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                             {/* <div>{"u.country"}</div>
                            <div>{"u.location.city"}</div> */}
                        </span>
                    </span>
                </div>)
            }
        </div>
)} 

export default Users;