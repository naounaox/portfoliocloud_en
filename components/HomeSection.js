import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function HomeSection() {

  // useEffect(() => {
  //   const svgPath = document.querySelector('#animated-path');
  //   const length = svgPath.getTotalLength();

  //   // Set up the initial stroke-dasharray and stroke-dashoffset
  //   svgPath.style.strokeDasharray = length;
  //   svgPath.style.strokeDashoffset = length;

  //   // Trigger the animation
  //   svgPath.style.transition = 'stroke-dashoffset 10s ease-in-out';
  //   svgPath.style.strokeDashoffset = '0';
  // }, []);

  useEffect(() => {
    const path = document.querySelector('#animated-path');
    const text = document.querySelector('#justnao-text');
    const length = path?.getTotalLength?.();
  
    if (path && length) {
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
  
      requestAnimationFrame(() => {
        path.style.transition = 'stroke-dashoffset 4s ease';
        path.style.strokeDashoffset = '0';
      });
  
      // ロゴ描き終わった後にflash
      setTimeout(() => {
        text?.classList.add('flash');
      }, 1500);
    }
  }, []);

  

  return (
    <Box
      id="home"
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
      {/* <Box
      component="img"
      src="/Vector3.png" // ロゴ画像のパス
      alt="UM Logo"
      sx={{
        height: { xs: 265, sm: 480, md: 660 }, // デバイスごとの高さ
        width: 'auto', // 横幅は自動調整
        marginTop: { xs: 0, sm: 6, md: 10 }, // 上の余白
        marginBottom: { xs: 5, sm: 2, md: 20 }, // 下の余白
        display: 'block', // 中央に配置するための設定
        marginLeft: 'auto',
        marginRight: 'auto',
  }}
/> */}

  {/* Inline SVG with animation */}
  <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 540 485"
        sx={{
          height: { xs: 265, sm: 480, md: 660 }, // デバイスごとの高さ
          width: 'auto', // 横幅は自動調整
          marginTop: { xs: 0, sm: 6, md: 10 }, // 上の余白
          marginBottom: { xs: 5, sm: 2, md: 20 }, // 下の余白
          display: 'block', // 中央に配置するための設定
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <path
          id="animated-path"
          d="M218.172 146.03V236.758C256.455 98.2064 282.059 184.635 289.082 233.922C325.248 97.7668 346.241 184.605 354.32 233.922M354.32 233.922C435.405 20.2929 469.782 136.456 476.286 233.922C455.664 443.667 362.106 352.57 354.32 233.922ZM260.718 216.911L416.721 191.393M218.172 112.007C165.982 -187.394 142.148 242.195 141.589 245.263M141.589 284.957C-103.096 139.29 31.9547 372.849 168.103 404.037C228.358 518.188 373.201 482.595 423.38 424.645M468.335 424.645C468.335 424.645 453.446 425.918 437.562 378.286C439.849 393.719 436.051 410.012 423.38 424.645M468.335 424.645C434.298 435.986 422.434 428.171 423.38 424.645M468.335 424.645C511.843 377.155 491.027 360.405 491.027 360.405C475.143 460.205 514.145 429.32 534 412.309M459.826 387.025H525.064"
          stroke="#202020"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Box>
      
      {/* <Typography
  variant="h2"
  sx={{
    fontFamily: 'Luckiest Guy', // フォントをLuckiest Guyに変更
    color: '#202020', // 文字色
    fontSize: { xs: '3.2rem', sm: '4.2rem', md: '6rem' }, // スマホ, タブレット, PCごとのフォントサイズ
    marginTop: { xs: '-30px', sm: '-85px', md: '-100px' }, // デバイスごとに調整
    marginBottom: { xs: '10px', sm: '10px', md: '10px' }, // デバイスごとに調整
    textAlign: 'center', // 画面中央に配置
  }}
>
  JUSTNAO
</Typography> */}

{/* キャッチコピー */}
<Typography
  variant="h4"
  sx={{
    fontFamily: 'Luckiest Guy', // フォントをLuckiest Guyに変
    color: '#202020', // 文字色
    fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, // デバイスごとにフォントサイズを変更
    textAlign: 'center', // 画面中央に配置
    marginTop: { xs: '-30px', sm: '-85px', md: '-100px' }, // 余白調整
  }}
>
  Want a cool website? Hit me up at {''} <span id="justnao-text" className="">JUSTNAO!</span>

</Typography>

    </Box>
  );
}
