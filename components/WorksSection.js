// Code: WorksSection.js
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
          fontFamily: "Luckiest Guy", // フォントをLuckiest Guyに変更
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
          <Typography variant="h3" sx={{ fontFamily: "Montserrat, sans-serif" }}>aewasongs.com</Typography>
            <Typography variant="body2" color="#202020" sx={{ mt: 1, fontFamily: "Montserrat, sans-serif"}}>
            　A website showcasing my music activities, built using React and Next.js.
            </Typography>
            <Button
              size="large"
              href="http://aewasongs.com"
              target="_blank"
              variant="contained"
              sx={{ mt: 2, bgcolor: "#202020", color: "#FFFEF4" }}
            >
              Visit Site
            </Button>
          </CardContent>
        </Card>

        {/* サブコンテンツエリア */}
        <Grid container spacing={2} justifyContent="center">
          {/* GitHub */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", textAlign: "center", backgroundColor: "transparent", p: 2 }}>
              <CardContent>
              <Typography variant="h4" sx={{ fontFamily: "Montserrat, sans-serif" }}>GitHub Repository</Typography>
                <Typography variant="body2" color="#202020" sx={{ mt: 1, fontFamily: "Montserrat, sans-serif"}}>
                  Check out the project code here.
                </Typography>
                <Button
                  size="small"
                  href="https://github.com/naounaox/aewa-music-site.git"
                  target="_blank"
                  variant="outlined"
                  sx={{ mt: 1, bgcolor: "#202020", color: "#FFFEF4" }}
                >
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Fiverr */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", textAlign: "center", backgroundColor: "transparent", p: 2 }}>
              <CardContent>
              <Typography variant="h4" sx={{ fontFamily: "Montserrat, sans-serif" }}>Fiverr</Typography>
                <Typography variant="body2" color="#202020" sx={{ mt: 1, fontFamily: "Montserrat, sans-serif"}}>
                 You can request work from me here.
                </Typography>
                <Button
                  size="small"
                  href="https://www.fiverr.com/just_nao/buying?source=avatar_menu_profile"
                  target="_blank"
                  variant="outlined"
                  sx={{ mt: 1, bgcolor: "#202020", color: "#FFFEF4"  }}
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
