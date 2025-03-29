import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';

export default function AboutSection() {
  return (
    <Box
      id="about"
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
    fontFamily: "Luckiest Guy, sans-serif", // フォントをLuckiest Guyに変更
    fontSize: { xs: '3rem', sm: '5rem', md: '8rem' }, // 文字を大きく
    color: '#FFFEF4', // 文字色を白
  }}
>
  ABOUT
</Typography>
<Typography
  variant="h2"
  sx={{
    fontFamily: 
       'Montserrat, sans-serif', // 通常時のフォント
    fontSize: { xs: '1.255rem', sm: '1.6rem', md: '2.2rem' }, // デバイス幅ごとのフォントサイズ
    textAlign: 'center',
    lineHeight: 1.8,
    transition: 'opacity 0.3s ease, font-family 0.3s ease', // スムーズな切り替え
    maxWidth: '1200px', // テキストの最大幅
    margin: '0 auto', // 中央揃え
    color: '#FFFEF4', // 文字色を白
  }}

>
Hello! I&apos;m JUSTNAO, a web designer and developer with experience creating engaging and memorable designs.
My skillset includes C++ programming, web development with React and Next.js, and API integration.
I&apos;m comfortable communicating in business English and always focus on creating clear, visually appealing designs.
My goal is to bring your vision to life with sincerity, creativity, and efficiency.
        </Typography>
      </Container>
    </Box>
  );
}

