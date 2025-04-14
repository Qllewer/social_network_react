import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormControls";
import { required } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth_reducer";
import { NavLink } from 'react-router-dom';
import style from '../Common/FormControls/FormsControl.module.css'


const LoginForm = React.memo((props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]} />
			</div>
			<div>
				<Field component={Input} name={"rememberMe"} type="checkbox" /> remember me
			</div>
			{ props.error && 
				<div className={style.formGeneralError}>
					{props.error}
				</div> 
			}
			<button>
				Login
			</button>
		</form>
	)
})

const LoginReduxForm = reduxForm ({ form: 'login'}) (LoginForm);

const Login = React.memo((props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	};
	if (props.isAuth) {
		return (
			<NavLink to="/profile"> </NavLink>
		)
	};
	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
})

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login}) (Login);