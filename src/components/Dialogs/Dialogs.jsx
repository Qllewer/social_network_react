import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../Common/FormControls';
import { maxLengthCreator, required } from '../../utils/validators';

const Dialogs = (props) => {
	let state = props.dialogsPage
	let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = state.messages.map(m => <Message message={m.message} />);
	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}
	const maxLength50 = maxLengthCreator(50);
	const AddMessageForm = (props) => {
		return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name="newMessageBody" component={Textarea} validate={[required, maxLength50]} placeholder='Enter your message'></Field>
			</div>
			<div>
			<button>Send</button></div>
		</form>
		)
	}
	
	const AddMessageReduxForm = reduxForm ({ form: 'AddMessageForm'}) (AddMessageForm);


	if (!props.isAuth) return <Navigate to={"/login"} />;

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageReduxForm onSubmit={addNewMessage} />
		</div>
	)
}

export default Dialogs;