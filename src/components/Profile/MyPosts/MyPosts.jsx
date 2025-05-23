import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/index'
import { Textarea } from '../../Common/FormControls';

const maxLength = maxLengthCreator(10);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea} name="newPostText" validate={[required, maxLength]} />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	) 
}

const AddNewPostFormRedux = reduxForm ({form: "ProfileAddNewPostForm"}) (AddNewPostForm)

const MyPosts = React.memo((props) => {
	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
	let addPost = (values) => {
		props.addPost(values.newPostText)
	}
	
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostFormRedux onSubmit={addPost} />
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
})

export default MyPosts;