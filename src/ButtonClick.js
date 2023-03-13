import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function myMessage(){
    alert('A Faby eh muito mala!!!');
}

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <Button variant="contained" onClick={myMessage}>Mensagem</Button>
    </Stack>
  );
}
