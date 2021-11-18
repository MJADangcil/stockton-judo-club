import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material';

const sections = [
  { to: '/', text: 'Home' },
  { to: '/class-schedule', text: 'Class Schedule' },
  { to: '/membership', text: 'Membership' },
  { to: '/instructors', text: 'Instructors' },
  { to: '/contact-info', text: 'Contact Info' },
];

function NavBar() {
  return (
    <Box
      sx={{
        bgcolor: 'color.primary',
        boxShadow: 2,
        p: 2,
        minWidth: 300,
      }}
    >
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
              {section.text}
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
}

export default NavBar;
