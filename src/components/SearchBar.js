import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

import { addCity } from '../actions/index';

export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <Form inline className="mt-3 mb-3">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" 
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <Button type="button" onClick={() => {
        dispatch(addCity(name));
      }}>추가</Button>
    </Form>
  );
}