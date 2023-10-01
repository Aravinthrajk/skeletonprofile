import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import {
  Container,
  Paper,
  Grid,
  List,
  Box,
  Divider,
  Button,
  ListItemAvatar,
  ListItem,
  Typography,
  ListItemText,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const AppliedSearchJobs = () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Skeleton variant="circular"></Skeleton>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Skeleton
                      variant="text"
                      width={70}
                      sx={{ fontSize: "1rem" }}
                    ></Skeleton>
                  }
                  secondary={
                    <>
                      <Stack direction="row" spacing={2}>
                        <Skeleton
                          variant="text"
                          width={50}
                          sx={{ fontSize: "1rem" }}
                        ></Skeleton>
                      </Stack>
                    </>
                  }
                ></ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={8} sx={{ justifyContent: "flex-end" }}>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "flex-end" }}
                      vertical={"bottom"}
                      spacing={2}
                      p={2}
                    >
                      {Array.from({ length: 3 }).map((_, index) => (
                        <Typography key={index}>
                          <Skeleton
                            variant="text"
                            sx={{ width: 70, fontSize: "1.2rem" }}
                          ></Skeleton>
                        </Typography>
                      ))}
                    </Stack>
                  }
                ></ListItemText>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12}>
            <Box width={"60%"}>
              <List>
                <ListItem>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <ListItemText key={index}>
                      <Skeleton width={60} sx={{ fontSize: "1rem" }}></Skeleton>
                    </ListItemText>
                  ))}
                </ListItem>
              </List>
            </Box>
            <Divider />
          </Grid>
          <Grid item xs={12}>
          <Paper
  sx={{
    p: 3, // Increased padding for better spacing
    m: 2,
    width: 1, // Adjust the width to your preference
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: 3, // Adding a subtle box shadow
    borderRadius: 8, // Adding rounded corners
  }}
>
  <Typography variant="h5" component="div" gutterBottom>
    Welcome to our Job Portal
  </Typography>
  <Typography variant="subtitle1" gutterBottom>
    It looks like you haven't applied to any jobs yet.
  </Typography>
  <Typography variant="body1" color="textSecondary" gutterBottom>
    Don't miss out on great opportunities. Start your job search now!
  </Typography>
  <Link href={"/"}>
    <Button variant="contained" color="primary">
      Search Jobs
    </Button>
  </Link>
</Paper>

          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AppliedSearchJobs;
