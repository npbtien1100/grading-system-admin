// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { UserCard, ClassCard, AdminCard, AppConversionRates } from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AdminCard total={714000} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <UserCard total={1352831} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ClassCard total={1723315} />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <AppConversionRates chartData={[{ data: [714000, 1352831, 1723315] }]} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
