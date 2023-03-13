import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 700, alignContent: "center" }}>
      <Typography variant="h4" gutterBottom>
      COMO FUNCIONA O CADASTRO?
      </Typography>
      <Typography variant="body1" gutterBottom id="Text">
      Através de uma interface muito amigável, você vai criar um perfil online com seu número de telefone, whatsapp, foto do pet e até mesmo endereço,
 caso queira. Assim, todas essas informações ficam disponíveis no QRCode do PetSmart.
      </Typography>
    </Box>
  );
}
