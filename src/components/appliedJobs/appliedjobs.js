import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import {grey} from "@mui/material/colors"
import {Container,Paper,Grid,List,Box,Divider,Button,ListItemAvatar,ListItem,Typography,ListItemText,Avatar} from '@mui/material';

export default function AppliedJobs() {
  return (
    <Container>
      <Typography variant='h4'> Appliedjobs- components/appliedJobs/appliedjobs.js</Typography>
    <Grid container>
      <Grid item xs={"4"} elevation={2}>
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
      <Grid item xs={"8"} justifyContent={"flex-end"}>
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
       
        <Paper xs={12} elevation={2}  >
          <Typography sx={{ padding:'30px 5px 5px 25px '  }}>
          <Skeleton variant="h3" width={120}></Skeleton>
          </Typography>
          <Divider sx={{ p: 2 }}/>
          <Stack direction={"row"}>
        <Grid item xs={6}paddingTop={5} paddingLeft={5} paddingBottom={5} paddingRight={2.5} >
          <Stack direction="column"  spacing={5}>
            <Paper sx={{ p: 2 }} elevation={2}>
              <Typography>
               
                <Skeleton variant="h4" width={120}></Skeleton>
              </Typography>
              <Typography paddingTop={2}>
               
               <Skeleton variant="text" width={200}></Skeleton>
             </Typography >

              <Typography paddingTop={2}>
                <Skeleton variant="text" width={120}></Skeleton>
              </Typography>
            </Paper>

            <Paper sx={{ p: 2 }} paddingTop={5} elevation={2}>
            <Typography>
               
               <Skeleton variant="h4" width={120}></Skeleton>
             </Typography>
             <Typography paddingTop={2}>
              
              <Skeleton variant="text" width={200}></Skeleton>
            </Typography >

             <Typography paddingTop={2}>
               <Skeleton variant="text" width={120}></Skeleton>
             </Typography>
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={6}paddingTop={5} paddingLeft={2.5} paddingBottom={5} paddingRight={5}  >
          <Stack direction="column"  spacing={5}>
            <Paper sx={{ p: 2 }} elevation={2}>
            <Typography>
               
               <Skeleton variant="h4" width={120}></Skeleton>
             </Typography>
             <Typography paddingTop={2}>
              
              <Skeleton variant="text" width={200}></Skeleton>
            </Typography >

             <Typography paddingTop={2}>
               <Skeleton variant="text" width={120}></Skeleton>
             </Typography>
            </Paper>

            <Paper sx={{ p: 2 }} paddingTop={5} elevation={2}>
            <Typography>
               
               <Skeleton variant="h4" width={120}></Skeleton>
             </Typography>
             <Typography paddingTop={2}>
              
              <Skeleton variant="text" width={200}></Skeleton>
            </Typography >

             <Typography paddingTop={2}>
               <Skeleton variant="text" width={120}></Skeleton>
             </Typography>
            </Paper>
          </Stack>
        </Grid>
        </Stack>
        
        </Paper>
      
      </Grid>
    </Grid>
  </Container>
  )
}