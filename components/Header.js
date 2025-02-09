import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // 三本線アイコン

export default function Header() {
  const [open, setOpen] = useState(false); // メニューの開閉状態

  // メニューを開く関数
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // メニューを閉じる関数
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#202020', // 背景色をダークグレーに
        color: '#FFFEF4', // テキストを白に
        height: { xs: '70px', sm: '80px', md: '100px'}, // ヘッダーの高さ
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: 2, sm: 4 }, // スマホでは左右の余白を調整
        }}
      >
        {/* PC用のナビゲーション（スマホでは非表示） */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          <Button color="inherit" href="#about">ABOUT</Button>
          <Button color="inherit" href="#works">WORKS</Button>
        </Box>

        {/* 中央のテキスト（Shadows Into Light） */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Shadows Into Light, cursive',
            textAlign: 'center',
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            letterSpacing: '0.07em',
            whiteSpace: 'nowrap',
          }}
        >
          UM Portfolio
        </Typography>

        {/* 右側のPC用ナビゲーション（スマホでは非表示） */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          <Button color="inherit" href="#contact">CONTACT</Button>
          <Button color="inherit" href="#home">HOME</Button>
        </Box>

        {/* スマホ用のハンバーガーメニュー（PCでは非表示） */}
        <IconButton
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', sm: 'none' } }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* ドロワーメニュー（スライドするサイドメニュー） */}
        <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
          <List sx={{ width: 250 }}>
            {['Home', 'About', 'Works', 'Contact'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={handleDrawerClose} href={`#${text.toLowerCase()}`}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
