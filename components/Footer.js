import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#333',
        color: 'white',
        textAlign: 'center',
        py: 2,
      }}
    >
      <Typography variant="body2">
        © 2025 UM Portfolio | <a href="mailto:odumcloud@gmail.com" style={{ color: 'lightblue' }}>odumcloud@gmail.com</a>
      </Typography>
    </Box>
  );
}
