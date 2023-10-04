import * as React from "react";
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


export default function AppliedJobs() {
  
  return (
    <Container maxWidth={'xl'}>
      <Typography variant="h4">
      
        Appliedjobs- components/appliedJobs/appliedjobs.js
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
                    sx={{ justifyContent: "flex-end" }}
                    vertical={"bottom"}
                    spacing={2}
                    useFlexGap
                    flexWrap="wrap"
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
                    <Stack direction="row"  useFlexGap
                  flexWrap="wrap" spacing={2}>
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

        <Grid item xs={12} paddingTop={5}>
          <Paper xs={12} elevation={2}>
            <Typography variant="h3" sx={{ padding: "30px 5px 5px 25px " }}>
              <Skeleton width={120}></Skeleton>
            </Typography>
            <Divider sx={{ p: 2 }} />
            <Grid
              item
              xs={12}
              sx={{
                py: 5,
                paddingLeft: 5,
                paddingRight: 2.5,
                justifyContent: "center",
              }}
            >
             
              <Box>
                <Stack
                  spacing={{ xs: 1, sm: 3 }}
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                >
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Paper
                      key={index}
                      sx={{ p: 2, minWidth: 690 }}
                      elevation={2}
                    >
                      <Typography variant="h4">
                        <Skeleton width={120}></Skeleton>
                      </Typography>
                      <Typography sx={{ pt: 2 }}>
                        <Skeleton variant="text" sx={{ width: 120 }}></Skeleton>
                      </Typography>

                      <Typography sx={{ pt: 2 }}>
                        <Skeleton variant="text" sx={{ width: 120 }}></Skeleton>
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
