import React from "react";
import ResumeListLoading from "@/components/resume/resumeListLoadind";
import DashboardJobsLoading from "@/components/landing/DashboardJobsLoading";
import TimeLine from "@/components/profilePage/timeLine";
import AppliedJobs from "@/components/appliedJobs/appliedjobs";
import { Typography } from "@mui/material";
import Interview from "@/components/videoInterview/Interview";
import { Apple } from "@mui/icons-material";
import AppliedSearchJobs from "@/components/appliedSearchjobs/AppliedSearchJobs";
import VideoInterviewpage from "@/components/videoInterviewPage/VideoInterviewpage";

export default function Home() {
  var apply = 1;
  if (apply>0) {
    return(
      <>
      <VideoInterviewpage/>
      <AppliedSearchJobs/>
      <AppliedJobs/>
      <Interview/>
      <TimeLine/>
      </>
    )
  
   } else {
    return(<AppliedSearchJobs/>)
     
   }
  
  // return (
  //   <>
    
   
  //   <Interview/>
  //   <AppliedJobs/>  
  //   <TimeLine/>
  //     </>
  // )
}
