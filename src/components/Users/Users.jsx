import React from "react";
import styles from './Users.module.css'
let Users = (props) => {
    if (props.users.length === 0) {
    props.setUsers([
        { id: 1, photoUrl:'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg', followed:false, fullName: "Dmitry", status: 'Crazy', location: {city: 'Minsk', country: 'Belarus'} },
        { id: 2, photoUrl:'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',  followed:true, fullName: "Sasha", status: 'Im hungry', location: {city: 'Moskva', country: 'Russia'} },
        { id: 3, photoUrl:'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',  followed:false, fullName: "Nikita", status: 'Evil', location: {city: 'Alma-Ata', country: 'Kazakhstan'} },
        { id: 4, photoUrl:'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',  followed:true, fullName: "Pavel", status: 'Sad', location: {city: 'Kiev', country: 'Ukraine'} },])
    }
    return(
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}></img>
                        </div>
                        <div>
                            {u.followed 
                            ? <button onClick={() => {props.unfollow(u.id)}}>Отписаться</button> 
                            : <button onClick={() => {props.follow(u.id)}}>Подписаться</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                             <div>{u.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
)} 

export default Users;