import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { grey } from "@mui/material/colors";
import {
  Container,
  Paper,
  Grid,
  List,
  Box,
  Divider,
  ListItemAvatar,
  ListItem,
  Typography,
  ListItemText,
  Avatar,
} from "@mui/material";

export default function Interview() {
  return (
    <Container>
      <Typography variant="h4">
        {" "}
        VideoInterview- components/videoInterview/interview.jsx
      </Typography>
      <Grid container>
        <Grid item xs={"4"} elevation={2}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ width: 56, height: 56 }}>
                  <Skeleton variant="circular"></Skeleton>
                </Avatar>
              </ListItemAvatar>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={"8"} >
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Stack
                    direction="row"
                    justifyContent={"flex-end"}
                    vertical={"bottom"}
                    spacing={2}
                    p={2}
                  >
                    <Skeleton
                      variant="text"
                      width={70}
                      height={32}
                      sx={{ fontSize: "1rem" }}
                    ></Skeleton>
                    <Skeleton
                      variant="text"
                      width={70}
                      sx={{ fontSize: "1rem" }}
                    ></Skeleton>
                    <Skeleton
                      variant="text"
                      width={70}
                      sx={{ fontSize: "1rem" }}
                    ></Skeleton>
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
                  <ListItemText>
                    <Skeleton
                      direction="row"
                      width={60}
                      spacing={1}
                      sx={{ fontSize: "1rem" }}
                    ></Skeleton>
                  </ListItemText>
                ))}
              </ListItem>
            </List>
          </Box>
          <Divider />
        </Grid>

        <Grid xs={12} paddingTop={5}>
          <Paper xs={12} elevation={2}>
            <Typography sx={{ padding: "30px 5px 5px 25px " }}>
              <Skeleton variant="h3" width={120}></Skeleton>
            </Typography>
            <Divider sx={{ p: 2 }} />
            <Grid item xs={12}>
              <Box width={1000} height={700} sx={{ p: 6, pl: "20vh" }}>
                <Skeleton
                  variant="rounded"
                  borderRadius={4}
                  sx={{borderRadius:'20px', p:2}}
                  width={700}
                  height={500}
                />
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
