import { Box, Card, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

const VideoInterviewpage = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6} sx={{ p: 2 }}>
        <Typography variant="h3" sx={{ ml: 4 }}>
          <Skeleton sx={{ width: 300 }}></Skeleton>
        </Typography>
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} sx={{ p: 1, mt: 4 ,ml:3}}>
            <Box
              sx={{
                pl: "2vh",
                width: "100%",
                height: 200,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Skeleton
                variant="rectangular"
                sx={{
                  pl: 10,
                  width:280,
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  flexDirection: "column",
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <Typography variant="h3">
                  <Skeleton sx={{ width: 200 }}></Skeleton>
                </Typography>
                <Typography variant="h5" sx={{pt:14}}>
                  <Skeleton
                    sx={{ width: 170,position:'static', bottom: "0px" }}
                  ></Skeleton>
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 2 }}>
        <Box sx={{
                  width: "100%",height:'75%',
                  flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
                }}>
        <Skeleton
                variant="rectangular"
                sx={{
                  
                  width:480,
                  height: 400,
                }}
              />
               <Typography variant="h3" sx={{pt:10}}>
                  <Skeleton sx={{ width: 200 }}></Skeleton>
                </Typography>
        </Box>

      </Grid>
    </Grid>
  );
};

export default VideoInterviewpage;
