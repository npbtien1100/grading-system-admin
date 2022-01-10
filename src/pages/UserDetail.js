import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import UserProfileDetail from "src/components/_dashboard/user/UserProfileDetail";
import UserProfile from "src/components/_dashboard/user/UserProfile";

export default function UserDetail() {
  const { userId } = useParams();
  const userDetail = {
    image: "/static/mock-images/avatars/avatar_default.jpg",
    name: "User name",
    email: "email address",
    phone: "011-962-7516",
    studentId: "student id",
    isLock: 1,
    isVerify: "true",
    mailSecretCode: "mail secret code",
    registerType: "register Type",
    createdAt: "2021-11-14 08:46:53",
    updatedAt: "2021-11-14 08:46:53",
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Button
            to="../"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            Back
          </Button>
          <Typography sx={{ my: 3 }} variant="h4">
            User Detail
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <UserProfile userDetail={userDetail} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <UserProfileDetail userDetail={userDetail} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
