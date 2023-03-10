import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <Button variant="contained">Carregar</Button>
    </Stack>
  );
}