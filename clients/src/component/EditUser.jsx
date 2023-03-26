import React from 'react'
import {FormGroup , FormControl, Input, InputLabel, Typography, Button, styled} from '@mui/material';
import { useState, useEffect } from 'react';
import  {editUser, getUser } from '../services/api';
import {useNavigate, useParams} from 'react-router-dom';
const Container = styled(FormGroup)`
  width : 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }

`;
const defaultValue = {
  name : '',
  username: '',
  email : '',
  phone : '',

}

const EditUser = () => {

const [user, setUser] = useState(defaultValue);

const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
loadUserDetails();
})

const loadUserDetails = async() => {
   
const response = await getUser(id);
setUser(response.data)
}
  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    
  }
const editUsersDetails = async () => {
  await editUser(user,id);
  navigate('/all');
}

  return (
    <Container>
      <Typography variant='h4' >Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='name' value={user.name}/>
          </FormControl>
          <FormControl>
        <InputLabel>UserName</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='username'  value={user.username}/>
          </FormControl>
          <FormControl>
        <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='email'  value={user.email}/>
          </FormControl>
          <FormControl>
        <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='phone'  value={user.phone}/>
          </FormControl>
          <FormControl>
            <Button variant='contained' onClick={() => editUsersDetails()}>Edit User</Button>
          </FormControl>
    </Container>
  )
}

export default EditUser