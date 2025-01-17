import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

export default function ErrorMsg() {
  const error = useSelector(state => state.error);

  if (!error) {
    return <div/>;
  }
  return (
    <Alert variant='danger'>
      Error: {error.message}
    </Alert>
  );
}