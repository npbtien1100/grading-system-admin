import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import AccountProfile from "../components/account/account-profile";
import AdminProfileDetails from "src/components/_dashboard/admin/AdminDetail";

export default function AdminDetail() {
  const adminInfo = {
    fullName: "Katarina Smith",
    email: "demo@devias.io",
    phone: "123456",
    image: "/static/mock-images/avatars/avatar_default.jpg",
    address: "Los Angeles USA",
  };
  const { adminId } = useParams();
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
            Admin Detail
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile userDetail={adminInfo} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AdminProfileDetails adminDetail={adminInfo} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
