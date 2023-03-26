import React from 'react';
import {AppBar , styled} from '@mui/material';
import {NavLink} from 'react-router-dom';
const Header = styled(AppBar)`
    background: #111111;
    flex-direction:row ;
    padding: 20px;
`;
const Tab = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    text-decoration:none;
    color: white;

`;
const NavBar = () => {
  return (
  
    <Header position='static'>
        <Tab to='/'>code for interview</Tab>
        <Tab to='/all'>all users</Tab>
        <Tab to='/add'>add usres</Tab>
    </Header>

  )
}

export default NavBar