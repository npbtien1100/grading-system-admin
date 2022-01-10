import { useState } from "react";
import { Icon } from "@iconify/react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink } from "react-router-dom";
// material
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import ClassItem from "src/components/_dashboard/class/ClassItem";
import ClassSearch from "src/components/_dashboard/class/ClassSearch";
import ClassSort from "src/components/_dashboard/class/ClassSort";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
];

// ----------------------------------------------------------------------
const mockclasses = [
  {
    id: 1,
    createdAt: "2021-11-22 09:46:28",
    description:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
    media: "/static/images/products/product_1.png",
    title: "Dropbox",
    totalDownloads: "594",
  },
  {
    id: 2,
    createdAt: "2021-11-20 09:46:28",
    description:
      "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
    media: "/static/images/products/product_2.png",
    title: "Medium Corporation",
    totalDownloads: "625",
  },
  {
    id: 3,
    createdAt: "2021-11-23 09:46:28",
    description:
      "Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.",
    media: "/static/images/products/product_3.png",
    title: "Slack",
    totalDownloads: "857",
  },
  {
    id: 4,
    createdAt: "2021-12-3 09:46:28",
    description:
      "Lyft is an on-demand transportation company based in San Francisco, California.",
    media: "/static/images/products/product_4.png",
    title: "Lyft",
    totalDownloads: "406",
  },
  {
    id: 5,
    createdAt: "2021-12-1 09:46:28",
    description:
      "GitHub is a web-based hosting service for version control of code using Git.",
    media: "/static/images/products/product_5.png",
    title: "GitHub",
    totalDownloads: "835",
  },
  {
    id: 6,
    createdAt: "2021-12-24 09:46:28",
    description:
      "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
    media: "/static/images/products/product_6.png",
    title: "Squarespace",
    totalDownloads: "835",
  },
];

export default function Class() {
  const [classes, setClasses] = useState(mockclasses);
  const [sortOrder, setSortOrder] = useState("latest");
  const handleSortByDate = (event) => {
    console.log(event.target.value);
    console.log(classes);
    const tempClasses = [...classes];
    tempClasses.sort((a, b) =>
      event.target.value === "oldest"
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt)
    );
    console.log(tempClasses);
    setSortOrder(event.target.value);
    setClasses(tempClasses);
  };
  return (
    <Page title="Dashboard: Classes">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Classes
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            New Class
          </Button>
        </Stack>

        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <ClassSearch classes={classes} />
          <ClassSort
            currentValue={sortOrder}
            options={SORT_OPTIONS}
            onSort={handleSortByDate}
          />
        </Stack>

        <Grid container spacing={3}>
          {classes.map((post, index) => (
            <Grid item key={post.id} lg={4} md={6} xs={12}>
              <ClassItem clss={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
