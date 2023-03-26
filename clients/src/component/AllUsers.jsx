import styled from '@emotion/styled';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { deletetUser, getUsers } from '../services/api';

const StyledTable = styled(Table)`
  width:90%;
  margin: 50px auto 0 auto;
`;
const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color:#fff;
    font-size:20px;
  }

`;

const TBody = styled(TableRow)`
  & > td {
    font-size:20px;
  }

`;

const AllUsers = () => {
const [users, setUsers] = useState([]);
  useEffect(() => {
    
  getAllUsers();
  
  }, []);
  const getAllUsers = async ()=> {
   const response = await getUsers();
   setUsers(response.data);
   console.log(response.data);
  }
  const deleteUserDetails  = async(id) => {
    await deletetUser(id);
  }
  return (
   <StyledTable>
    <TableHead>
      <THead>
      <TableCell> Id </TableCell>
        <TableCell> Name </TableCell>
        <TableCell> UserName </TableCell>
        <TableCell> Email </TableCell>
        <TableCell> Phone </TableCell>
        <TableCell>  </TableCell>
      </THead>
    </TableHead>
    <TableBody>
      {
        users.map(user => (
         <TBody key={user._id}>
          <TableCell>{user._id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.username}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
           <TableCell>
            <Button variant='contained' style={{ marginRight: 10}} component={Link}
             to={`/edit/${user._id}`}>Edit</Button>
            <Button variant='contained' color='secondary' onClick={() => deleteUserDetails(user._id)}>Delete</Button>
            </TableCell>
         </TBody>
        ))
      }
    </TableBody>
   </StyledTable>
  )
}

export default AllUsers