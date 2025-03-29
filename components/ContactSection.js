import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState(''); // 状態管理用

  const handleSubmit = async (event) => {
    event.preventDefault(); // ページリロードを防止

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#202020',
      }}
    >
      <Container>
      <Typography
  variant="h2"
  align="center"
  gutterBottom
  sx={{
    fontFamily: "Luckiest Guy", // フォントをLuckiest Guyに変更
    fontSize: { xs: '3rem', sm: '5rem', md: '8rem' }, // 文字を大きく
    color: '#FFFEF4', // 文字色を白
  }}
>
  CONTACT
</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit} // 修正: onSubmitハンドラを使用
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 600,
            bgcolor: '#FFFEF4',
            p: 3,
            mx: 'auto',
            borderRadius: 2, // 角を丸くする
          }}
        >
          <TextField
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            required
            InputProps={{
              sx: { fontFamily: 'Montserrat, sans-serif' }, // 入力テキストのフォント
            }}
            InputLabelProps={{
              sx: { fontFamily: 'Montserrat, sans-serif' }, // ラベルのフォント
            }}
          />
          <TextField
            fullWidth
            name="email"
            label="Email Address"
            variant="outlined"
            type="email"
            required
            InputProps={{
              sx: { fontFamily: 'Montserrat, sans-serif' }, // 入力テキストのフォント
            }}
            InputLabelProps={{
              sx: { fontFamily: 'Montserrat, sans-serif' }, // ラベルのフォント
            }}
          />
          <TextField
            fullWidth
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
            InputProps={{
              sx: { fontFamily: 'Montserrat, sans-serif' }, // 入力テキストのフォント
            }}
            InputLabelProps={{
              sx: { fontFamily: 'Montserrat, sans-serif' }, // ラベルのフォント
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            SEND
          </Button>
        </Box>

        {/* 状態によるメッセージ表示 */}
        {status === 'success' && (
          <Typography color="green" align="center" mt={2}>
          Your message has been sent successfully. Thank you for contacting us!
          </Typography>
        )}
        {status === 'error' && (
          <Typography color="red" align="center" mt={2}>
            An error occurred. Please try again.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
