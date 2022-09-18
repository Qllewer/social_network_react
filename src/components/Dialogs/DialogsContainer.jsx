import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';
import { connect, Connect } from 'react-redux/es/exports';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(sendMessageCreator())},
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body))},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;