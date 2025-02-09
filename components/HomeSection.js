import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function HomeSection() {

  const [showJapanese, setShowJapanese] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowJapanese(true); // 0.5秒後に日本語に切り替える
  //   }, 500); // 0.5秒の遅延
  //   return () => clearTimeout(timer);
  // }, []);


  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFEF5', // 背景色を白
        color: '#202020', // 文字色を#202020
      }}
    >
      {/* ロゴ */}
      <Box
        component="img"
        src="/logo2.png" // ロゴ画像のパス
        alt="UM Logo"
        sx={{
          height: 850, // ロゴのサイズ
          width: 'auto',
          marginTop: 2, // 位置を下げる
          marginBottom: 2,
          // animation: 'fadeIn 1s ease-in-out', // フェードインアニメーション
        }}
      />

      {/* タイトル */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Shadows Into Light, cursive',
          animation: 'fadeIn 1s ease-in-out 1s', 
          color: '#202020', // 文字色
          marginTop: -15,
          marginBottom: 2,
        }}
      >
        UM Portfolio
      </Typography>

      {/* キャッチコピー */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Kosugi Maru, sans-serif',
          animation: 'fadeIn 1.5s ease-in-out 0.5s',
          color: '#202020', // 文字色
        }}
      >
         {showJapanese
          ? 'わかりやすく、楽しく、心に残るデザインを！'
          : 'Clear, Fun, and Memorable Designs!'}
      </Typography>
    </Box>
  );
}
