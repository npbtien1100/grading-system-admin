import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import ClassDetailForm from "src/components/_dashboard/class/ClassDetail";

export default function ClassDetail() {
  const { classId } = useParams();
  const classDetail = {
    className: "Class name",
    classSection: "Class section",
    subject: "Class subject",
    room: "Class room",
    studentJoinCode: "student join code",
    teacherJoinCode: "teacher join code",
    createdAt: "Created at",
    updatedAt: "Updated at",
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
            Class Detail
          </Typography>
          <Grid container spacing={3}>
            <Grid item>
              <ClassDetailForm classDetail={classDetail} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
