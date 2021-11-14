import React from 'react';
import { Stack, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Stack
        alignItems='center'
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider orientation='vertical' flexItem />}
        justifyContent='center'
        spacing={{ xs: 0.5, sm: 1, md: 2 }}
      >
        <Button varient='outlined' href='/'>
          <Link to='/'>Home</Link>
        </Button>
        <Button varient='outlined' href='/class-schedule'>
          <Link to='/class-schedule'>Class Schedule</Link>
        </Button>
        <Button varient='outlined' href='/membership'>
          <Link to='/membership'>Membership</Link>
        </Button>
        <Button varient='outlined' href='/instructors'>
          <Link to='/instructors'>Instructors</Link>
        </Button>
        <Button varient='outlined' href='/contact-info'>
          <Link to='/contact-info'>Contact Info</Link>
        </Button>
      </Stack>
    </>
  );
}

export default NavBar;
