import { Box, Container, Grid, Typography } from "@mui/material";
import AccountProfile from "../components/account/account-profile";
import AccountProfileDetails from "../components/account/account-profile-detail";

export default function Profile() {
  const userInfo = {
    fullName: "Katarina Smith",
    email: "demo@devias.io",
    phone: "123456",
    image: "/static/mock-images/avatars/avatar_default.jpg",
    address: "Los Angeles USA",
  };
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Account
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile userDetail={userInfo} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails userDetail={userInfo} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
