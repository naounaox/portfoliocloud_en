import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function HomeSection() {

  const [showJapanese, setShowJapanese] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowJapanese(true); // 0.5秒後に日本語に切り替える
    }, 500); // 0.5秒の遅延
    return () => clearTimeout(timer);
  }, []);


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
        height: { xs: 350, sm: 600, md: 850 }, // デバイスごとの高さ
        width: 'auto', // 横幅は自動調整
        marginTop: { xs: 0, sm: 2, md: 2 }, // 上の余白
        marginBottom: { xs: 5, sm: 2, md: 0 }, // 下の余白
        display: 'block', // 中央に配置するための設定
        marginLeft: 'auto',
        marginRight: 'auto',
  }}
/>


      {/* タイトル */}
      <Typography
  variant="h2"
  sx={{
    fontFamily: 'Shadows Into Light, cursive',
    animation: 'fadeIn 1s ease-in-out 1s', 
    color: '#202020', // 文字色
    fontSize: { xs: '4rem', sm: '5rem', md: '6rem' }, // スマホ, タブレット, PCごとのフォントサイズ
    marginTop: { xs: '-10px', sm: '-20px', md: '-100px' }, // デバイスごとに調整
    marginBottom: { xs: '10px', sm: '10px', md: '10px' }, // デバイスごとに調整
    textAlign: 'center', // 画面中央に配置
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
    fontSize: { xs: '1.5rem', sm: '2.0rem', md: '2.5rem' }, // デバイスごとにフォントサイズを変更
    textAlign: 'center', // 画面中央に配置
    marginTop: { xs: '5px', sm: '10px', md: '15px' }, // 余白調整
  }}
>
  {showJapanese
    ? 'わかりやすく、楽しく、心に残るデザインを！'
    : 'Clear, Fun, and Memorable Designs!'}
</Typography>

    </Box>
  );
}
