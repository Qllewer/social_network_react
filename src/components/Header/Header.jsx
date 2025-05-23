import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return <header className={s.header}>
		<img src='https://www.gipsyteam.ru/upload/Pageimage/default/7/1/7114-1658760803.jpg' />
		<div className={s.loginBlock}>
			{props.isAuth ? 
			<div>{props.login}<button onClick={props.logout}>Logout</button></div>
			: <NavLink to={'/login'}>Login</NavLink>}
		</div>
	</header>
}

export default Header;