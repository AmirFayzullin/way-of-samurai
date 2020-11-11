import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
  return <span className={`${s.message} ${props.state.fromId === 0 ? s.my : s.interlocutor}`}>{props.state.message}</span>
};

export default Message;