import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#202020', // 背景色をダークグレーに
        color: '#FFFEF4', // テキストを白に
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* 左側のメニュー */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" href="#about">ABOUT</Button>
          <Button color="inherit" href="#works">WORKS</Button>
        </Box>

        {/* 中央のテキスト（Reenie Beanie） */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Shadows Into Light, cursive', // フォントをReenie Beanieに
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '4rem' },
            letterSpacing: '0.07em',
          }}
        >
          UM Portfolio
        </Typography>

        {/* 右側のメニュー */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" href="#contact">CONTACT</Button>
          <Button color="inherit" href="#home">Home</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
