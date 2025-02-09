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
        bgcolor: '#FFFEF4',
      }}
    >
      <Container>
      <Typography
  variant="h2"
  align="center"
  gutterBottom
  sx={{
    fontFamily: "Shadows Into Light, cursive",
    fontSize: "8rem", // 文字を大きく
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
            mx: 'auto',
          }}
        >
          <TextField
            fullWidth
            name="name"
            label="お名前"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            name="email"
            label="メールアドレス"
            variant="outlined"
            type="email"
            required
          />
          <TextField
            fullWidth
            name="message"
            label="メッセージ"
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            送信
          </Button>
        </Box>

        {/* 状態によるメッセージ表示 */}
        {status === 'success' && (
          <Typography color="green" align="center" mt={2}>
            送信成功しました。お問い合わせありがとうございます！
          </Typography>
        )}
        {status === 'error' && (
          <Typography color="red" align="center" mt={2}>
            エラーが発生しました。もう一度お試しください。
          </Typography>
        )}
      </Container>
    </Box>
  );
}
