import React from "react";
import ResumeListLoading from "@/components/resume/resumeListLoadind";
import DashboardJobsLoading from "@/components/landing/DashboardJobsLoading";
import TimeLine from "@/components/profilePage/timeLine";
import AppliedJobs from "@/components/appliedJobs/appliedjobs";
import { Typography } from "@mui/material";
import Interview from "@/components/videoInterview/Interview";

export default function Home() {
  return (
    <>
    <Interview/>
    <AppliedJobs/>  
    <TimeLine/>
      </>
  )
}
