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
    <Container maxWidth="xl">
      <Typography variant="h4">
        VideoInterview- components/videoInterview/interview.jsx
      </Typography>
      <Grid container>
        <Grid item xs={4}>
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
        <Grid item xs={8}>
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

        <Grid item xs={12} sx={{ mt: 5 }}>
          <Paper xs={12} elevation={2}>
            <Typography sx={{ padding: "30px 5px 5px 25px " }}>
              <Skeleton variant="h3" width={120}></Skeleton>
            </Typography>
            <Divider sx={{ p: 2 }} />
            <Grid item xs={12}>
              <Box sx={{ p: 6, pl: "20vh", width: 1000, height: 700 }}>
                <Skeleton
                  variant="rounded"
                  sx={{
                    borderRadius: "20px",
                    p: 2,
                    width: 700,
                    height: 500,
                    borderRadius: 4,
                  }}
                />
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
