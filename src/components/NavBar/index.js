import React from 'react';
import { Stack, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const sections = [
  { to: '/', text: 'Home' },
  { to: '/class-schedule', text: 'Class Schedule' },
  { to: '/membership', text: 'Membership' },
  { to: '/instructors', text: 'Instructors' },
  { to: '/contact-info', text: 'Contact Info' },
];

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
        {sections.map((section) => {
          return (
            <Button varient='outlined' href={section.to}>
              <Link to={section.to}>{section.text}</Link>
            </Button>
          );
        })}
      </Stack>
    </>
  );
}

export default NavBar;
