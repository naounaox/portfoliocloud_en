import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      id="about"
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
    fontSize: { xs: '3rem', sm: '5rem', md: '8rem' }, // 文字を大きく
  }}
>
  ABOUT
</Typography>
<Typography
  variant="h2"
  sx={{
    fontFamily: isHovered
      ? 'DM Sans, cursive' // ホバー時のフォント
      : 'Kosugi Maru, sans-serif', // 通常時のフォント
    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // デバイス幅ごとのフォントサイズ
    textAlign: 'center',
    lineHeight: 1.8,
    transition: 'opacity 0.3s ease, font-family 0.3s ease', // スムーズな切り替え
    maxWidth: '800px', // テキストの最大幅
    margin: '0 auto', // 中央揃え
  }}
  onMouseEnter={() => setIsHovered(true)} // ホバー時の処理
  onMouseLeave={() => setIsHovered(false)} // ホバー解除時の処理
>
  {isHovered
    ? `Hello! I'm UM.
I leverage my experience from studying at a design university to specialize in creating fun, memorable designs. My technical projects include software development using C++, website creation with React, and API integration. I’m also capable of business-level communication in English. Additionally, I excel at logo creation and visual design, helping clients showcase their unique appeal to the fullest.`
    : `こんにちは！UMです。
私はデザイン系の大学で学んだ経験を活かし、ポップで心に残るデザインを得意としています。これまでに C++を使用したソフトウェア開発 や Reactを使ったウェブサイト制作、API連携の実装 といった技術的なプロジェクトに携わってきました。また、ビジネス英語でのコミュニケーションも可能です。特にロゴ制作やビジュアルデザインにも力を入れており、クライアント様の魅力を最大限に引き出すお手伝いをしています。`}
</Typography>

      </Container>
    </Box>
  );
}

