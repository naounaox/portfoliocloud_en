// import { Box, Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

// export default function WorksSection() {
//   return (
//     <Box
//       id="works"
//       sx={{
//         height: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: '#FFFEF4',
//       }}
//     >
//       <Container>
//         <Typography variant="h2" align="center" gutterBottom>
//           作品リンク集
//         </Typography>
        
//         <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
//           {/* aewasongs.com */}
//           <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//               component="img"
//               height="140"
//               image="/thumbnail.jpg" // サムネイル画像のパス
//               alt="aewasongs.com thumbnail"
//             />
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 aewasongs.com
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 音楽活動を紹介するウェブサイト。ReactとNext.jsを活用して構築。
//               </Typography>
//             </CardContent>
//             <Button size="small" href="http://aewasongs.com" target="_blank">
//               サイトを訪問
//             </Button>
//           </Card>

//           {/* GitHub リポジトリ */}
//           <Card sx={{ maxWidth: 345 }}>
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 GitHubリポジトリ
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 音楽活動を紹介するウェブサイト。楽曲のストリーミング、ニュース更新、レスポンシブデザイン。
//               </Typography>
//             </CardContent>
//             <Button size="small" href="https://github.com/naounaox/aewa-music-site.git" target="_blank">
//               GitHubを訪問
//             </Button>
//           </Card>

//           {/* クラウドワークス */}
//           <Card sx={{ maxWidth: 345 }}>
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 クラウドワークス
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 プロフィールページをご覧ください。
//               </Typography>
//             </CardContent>
//             <Button size="small" href="https://crowdworks.jp/public/employees/6194168?ref=login_header" target="_blank">
//               プロフィールを訪問
//             </Button>
//           </Card>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// import { Box, Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
// import Slider from 'react-slick'; // カルーセル用
// console.log("Slider:", Slider);
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function WorksSection() {
//   const items = [
//     {
//       title: 'aewasongs.com',
//       description: '音楽活動を紹介するウェブサイト。ReactとNext.jsを活用して構築。',
//       image: '/thumbnail.jpg', // サムネイル画像のパス
//       link: 'http://aewasongs.com',
//     },
//     {
//       title: 'GitHubリポジトリ',
//       description: '音楽活動を紹介するウェブサイト。楽曲のストリーミング、ニュース更新、レスポンシブデザイン。',
//       image: '', // GitHubに画像がない場合、空白のまま
//       link: 'https://github.com/naounaox/aewa-music-site.git',
//     },
//     {
//       title: 'クラウドワークス',
//       description: 'プロフィールページをご覧ください。',
//       image: '', // 画像なし
//       link: 'https://crowdworks.jp/public/employees/6194168?ref=login_header',
//     },
//   ];

//   // スライダーの設定
//   const settings = {
//     dots: true, // 下にドットナビゲーションを表示
//     infinite: true, // ループ可能
//     speed: 500, // スライドのアニメーション速度
//     slidesToShow: 1, // 1つのスライドを表示
//     slidesToScroll: 1, // 1回のスライド移動数
//     arrows: true, // 次へ・前へボタンを表示
//   };

//   return (
//     <Box
//       id="works"
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: '#FFFEF4',
//         py: 8,
//       }}
//     >
//       <Container>
//         <Typography variant="h2" align="center" gutterBottom>
//           作品リンク集
//         </Typography>

//         <Slider {...settings}>
//           {items.map((item, index) => (
//             <Box key={index} sx={{ px: 2 }}>
//               <Card
//                 sx={{
//                   maxWidth: 500,
//                   mx: 'auto',
//                   boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//                   textAlign: 'center',
//                   p: 2,
//                 }}
//               >
//                 {item.image && (
//                   <CardMedia
//                     component="img"
//                     height="180"
//                     image={item.image}
//                     alt={`${item.title} thumbnail`}
//                   />
//                 )}
//                 <CardContent>
//                   <Typography variant="h5" component="div">
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                     {item.description}
//                   </Typography>
//                 </CardContent>
//                 <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
//                   <Button
//                     size="small"
//                     href={item.link}
//                     target="_blank"
//                     variant="contained"
//                     sx={{ bgcolor: '#1976d2', color: 'white', '&:hover': { bgcolor: '#155aa8' } }}
//                   >
//                     詳細を見る
//                   </Button>
//                 </Box>
//               </Card>
//             </Box>
//           ))}
//         </Slider>
//       </Container>
//     </Box>
//   );
// }
import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Grid } from "@mui/material";

export default function WorksSection() {
  return (
    <Box
      id="works"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#FFFEF4",
        py: 8,
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
        WORKS
        </Typography>

        {/* メイン作品エリア */}
        <Card
          sx={{
            maxWidth: "100%",
            mx: "auto",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            p: 2,
            mb: 4,
            backgroundColor: "transparent",
          }}
        >
          {/* aewasongs.com のサムネイル画像を表示 */}
          <CardMedia
            component="img"
            height="400"
            image="https://aewasongs.com/thumbnail.jpg" // aewasongs.com のサムネイル画像を指定
            alt="aewasongs.com thumbnail"
          />
          <CardContent>
            <Typography variant="h4">aewasongs.com</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              音楽活動を紹介するウェブサイト。ReactとNext.jsを活用して構築。
            </Typography>
            <Button
              size="large"
              href="http://aewasongs.com"
              target="_blank"
              variant="contained"
              sx={{ mt: 2, bgcolor: "#1976d2", color: "white", "&:hover": { bgcolor: "#155aa8" } }}
            >
              サイトを見る
            </Button>
          </CardContent>
        </Card>

        {/* サブコンテンツエリア */}
        <Grid container spacing={2} justifyContent="center">
          {/* GitHub */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", textAlign: "center", backgroundColor: "transparent", p: 2 }}>
              <CardContent>
                <Typography variant="h5">GitHubリポジトリ</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  プロジェクトのコードはこちら
                </Typography>
                <Button
                  size="small"
                  href="https://github.com/naounaox/aewa-music-site.git"
                  target="_blank"
                  variant="outlined"
                  sx={{ mt: 1 }}
                >
                  GitHubを見る
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* クラウドワークス */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", textAlign: "center", backgroundColor: "transparent", p: 2 }}>
              <CardContent>
                <Typography variant="h5">クラウドワークス</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  こちらからお仕事の依頼が可能です
                </Typography>
                <Button
                  size="small"
                  href="https://crowdworks.jp/public/employees/6194168?ref=login_header"
                  target="_blank"
                  variant="outlined"
                  sx={{ mt: 1 }}
                >
                  プロフィールを見る
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
