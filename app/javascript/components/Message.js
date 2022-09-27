import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/message';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.updateMessage);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (<h1>{message.body}</h1>)
};

export default Message;