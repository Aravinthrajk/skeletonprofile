import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { grey } from "@mui/material/colors";

const TimeLine = () => {
  return (
    <Container maxWidth={'xl'}>
      <Typography variant="h4">
        ProfilePage - components/profilePage/timeline.js
      </Typography>
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
                  sx={{ justifyContent: "flex-end",p:2 }}
                  vertical={"bottom"}
                  spacing={2}
                 
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
                    <Stack direction="row"  spacing={1}>
                      <Skeleton
                        width={60}
                       
                        sx={{ fontSize: "1rem" }}
                      ></Skeleton>
                    </Stack>
                  </ListItemText>
                ))}
              </ListItem>
            </List>
          </Box>
          <Divider />
        </Grid>

        <Grid container>
          <Grid item xs={5} sx={{ pt: 2 }}>
            <Stack direction="column" sx={{ p: 2 }} spacing={5}>
              <Paper sx={{ p: 2 }} elevation={2}>
                <Typography variant="h4" >
                
                  <Skeleton width={120}></Skeleton>
                </Typography>

                <Divider sx={{ p: 1 }} />
                <Typography  sx={{ pt: 2 }} >
                  <Skeleton variant="text" width={120}></Skeleton>
                </Typography>
                <Typography  sx={{ pt: 2 }} >
                  <Skeleton variant="text" width={120}></Skeleton>
                </Typography>
              </Paper>

              <Paper sx={{ p: 2 ,pt:5}}  elevation={2}>
                <Typography variant="h4">
                  <Skeleton  width={120}></Skeleton>
                </Typography>

                <Divider sx={{ p: 1 }} />

                <Typography  mt={2}>
                  <Skeleton variant="text" width={120}></Skeleton>
                </Typography>
                <Typography  mt={2}>
                  <Skeleton variant="text" width={120}></Skeleton>
                </Typography>
              </Paper>
            </Stack>
          </Grid>
          <Grid item xs={7} sx={{ p: 2 }}>
            <Stack direction="column" spacing={5} m={2}>
              <Paper sx={{ p: 2 }} elevation={2}>
                <Stack direction="row" spacing={2}>
                  <Avatar>
                    <Skeleton variant="circular"></Skeleton>
                  </Avatar>
                  <Box
                    width={580}
                    height={100}
                    sx={{
                      border: `solid 1px ${grey[300]}`,
                      borderRadius: 2,
                      p: 2,
                    }}
                  >
                    <Typography>
                      <Skeleton
                        variant="rectangular"
                        width={80}
                        // height={80}
                        sx={{ fontSize: "1rem" }}
                      ></Skeleton>
                    </Typography>
                  </Box>
                </Stack>
                <Grid container>
                  <Grid item xs={10}>
                    <Stack direction="row" spacing={2} sx={{m:2,pl:5}}>
                      {Array.from({ length: 4 }).map((_, index) => (
                        <Avatar key={index}>
                          <Skeleton variant="circular"></Skeleton>
                        </Avatar>
                      ))}
                    </Stack>
                  </Grid>
                  <Grid item xs={2} paddingTop={2}>
                    <Button>
                      <Skeleton
                        variant="rectangular"
                        width={80}
                        sx={{justifyContent:'flex-end'}}
                      ></Skeleton>
                    </Button>
                  </Grid>
                </Grid>
              </Paper>

              <Paper sx={{ p: 2 }} elevation={2}>
                <Stack direction="row" spacing={2}>
                  <Avatar>
                    <Skeleton variant="circular"></Skeleton>
                  </Avatar>
                  <Stack
                    direction="column"
                    spacing={2}
                    sx={{m:2,pl:5}}
                    m={2}
                    paddingLeft={5}
                  >
                    <Typography>
                      <Skeleton
                        variant="rectangular"
                        width={270}
                        sx={{ fontSize: "1rem" }}
                      ></Skeleton>
                    </Typography>
                    <Typography>
                      <Skeleton
                        variant="rectangular"
                        width={80}
                        sx={{ fontSize: "1rem" }}
                      ></Skeleton>
                    </Typography>
                  </Stack>
                </Stack>
                <Grid container>
                  <Grid item xs={11}>
                    <Stack direction={"row"} p={2}>
                      <Typography paddingTop={2}>
                        <Skeleton
                          variant="rectangular"
                          width={300}
                          sx={{ fontSize: "1rem" }}
                        ></Skeleton>
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={1} justifyContent={"flex-end"} paddingTop={2}>
                    <Avatar>
                      <Skeleton variant="circular"></Skeleton>
                    </Avatar>
                  </Grid>
                </Grid>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TimeLine;
