import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from '../../Common/Loader/Loader';
import ProfileStatusWithHooks from './ProfileStatusWithhooks';


const ProfileInfo = React.memo((props) => {
	if (!props.profile) {
		return <Loader />
	}
	return (
		<div>
			<div>
				<img
					src='https://www.indiewire.com/wp-content/uploads/2017/08/it.jpg?w=600&h=337&crop=1' />
			</div>
			<div className={s.descriptionBlock}>
				{/* <img src={props.profile.photos.large} /> */}
				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
			</div>
		</div>
	)
})

export default ProfileInfo;