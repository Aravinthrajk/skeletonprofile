import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import {grey} from "@mui/material/colors"
import {Container,Paper,Grid,List,ListItemAvatar,ListItem,Typography,ListItemText,Avatar} from '@mui/material';

export default function DashboardJobsLoading() {
  return (
<Container > 
<Typography variant='h4'> Appliedjobs- components/appliedJobs/appliedjobs.js</Typography>
    <Paper elevation={2}>
        <Grid container> 
            <Grid item xs={12}>
                <List>
                          <ListItem divider>
                              <ListItemText primary={
                                  <Grid container >
                                      <Grid item xs={8}>
                                          <Skeleton sx={{ fontSize: '1rem' }}  width={300}></Skeleton>
                                      </Grid>
                                        <Grid item xs={4}>
                                          <Stack direction="row" spacing={3} justifyContent="flex-end">
                                              <Skeleton sx={{ fontSize: '1rem' }} width={80}></Skeleton>
                                          </Stack>
                                        </Grid>
                                        <Grid item xs={12}> 
                                            <Stack>
                                                
                                            </Stack>
                                        </Grid>
                                  </Grid>

                              }></ListItemText>
                            </ListItem>
                    <ListItem divider>
                    kkk
                    </ListItem>
                    <ListItem divider>
                    kkk
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    </Paper>
    <Paper elevation={2}>
        <Grid container>
          <Grid item xs={3}>
            <List >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Skeleton variant="circular"></Skeleton>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Skeleton variant="text" sx={{ fontSize: '1rem' }}></Skeleton>}
                    secondary={<><Stack direction="row" spacing={2}><Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }}></Skeleton><Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }}></Skeleton><Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }}></Skeleton></Stack></>}
                    >
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sx={{p:2,}}>
                <List sx={{border:`solid 1px ${grey[300]}`, borderRadius:2}}>
                {Array.from({ length: 6 }).map((_, index) =>(
                  <ListItem divider>
                      <ListItemText primary={
                          <Grid container >
                            <Grid item xs={8}>
                        <Skeleton sx={{ fontSize: '1rem' }}></Skeleton>

                            </Grid>
                            <Grid item xs={4}>
                              <Stack direction="row" spacing={3} justifyContent="flex-end">
                              <Skeleton sx={{ fontSize: '1rem' }} width={60}></Skeleton>
                              <Skeleton sx={{ fontSize: '1rem' }} width={60}></Skeleton>
                              </Stack>
                            </Grid>
                          </Grid>

                      }></ListItemText>
                  </ListItem>
                ))}
                </List>
          </Grid>
        </Grid>
    </Paper>
   
    </Container> 
  )
}