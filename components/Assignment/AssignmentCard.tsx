import React from "react";
import EditButton from "../common/EditButton";
import Link from "next/link";
import { formatDate } from "utils/formatDate";
import { secondsToHours } from "utils/secondsToHour";
import InventoryIcon from "@mui/icons-material/Inventory";
import DescriptionIcon from "@mui/icons-material/Description";
import Image from "next/image";
import ProfilePic from "public/profile-pic.jpg";
import { colorPicker } from "utils/colorPicker";
import { Box } from "@mui/material";

const AssignmentCard = ({
  assignmentData,
  submissionsData,
  handleStatusChange,
  status,
  handleUserChange,
  user_id,
}) => {
  return (
    <div className="shadow-lg w-[30%] p-[0.5rem] bg-foreground rounded-xl">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-h1 font-bold">{assignmentData?.title}</h1>
        <div className="flex flex-row items-center gap-[0.4rem]">
          <h2 className="text-h2 text-progress-green font-bold">
            {assignmentData?.status}
          </h2>
          <EditButton />
        </div>
      </div>
      <div className="flex flex-row justify-between text-p font-bold">
        <h2 className="text-secondary-text">Assignment Link</h2>
        <Link className="text-blue-500" href={assignmentData.link || ""}>
          {assignmentData.link}
        </Link>
      </div>
      <div className="flex flex-row justify-between text-p font-bold">
        <h2 className="text-secondary-text">Assignment Hour</h2>
        <p>{secondsToHours(assignmentData.duration_in_seconds)}</p>
      </div>
      <div className="flex flex-row justify-between text-p font-bold">
        <h2 className="text-secondary-text">Assignment Ends at</h2>
        <p>{formatDate(assignmentData.ends_at)}</p>
      </div>

      {/* Candidates  */}
      <div>
        {/* Buttons  */}
        <div className="flex flex-row gap-[1rem] p-[0.5rem] text-p font-bold">
          <button
            className={`bg-foreground flex flex-row items-center gap-[0.4rem] shadow-sm ${
              status === "review" ? "shadow-xl" : "shadow-lg"
            } p-[0.5rem] rounded-2xl`}
            onClick={() => {
              handleStatusChange("review");
            }}
          >
            <InventoryIcon />
            <p>TO REVIEW</p>
          </button>
          <button
            className={`bg-foreground flex flex-row items-center gap-[0.4rem] shadow-sm ${
              status === "shortlisted" ? "shadow-xl" : "shadow-lg"
            } p-[0.5rem] rounded-2xl`}
            onClick={() => {
              handleStatusChange("shortlisted");
            }}
          >
            <DescriptionIcon />
            <p>SHORTLISTED</p>
          </button>
        </div>
        {/* Candidates List  */}
        <div className="flex flex-col gap-[1rem] ">
          <div className="flex flex-row justify-between text-p text-secondary-text font-bold">
            <p>CANDIDATE</p>
            <p>SCORE</p>
          </div>
          <Box sx={{ height: "16rem", overflowY: "auto" }}>
            {submissionsData &&
              submissionsData.map((submission, index) => (
                <div
                  key={index}
                  className={`flex flex-row p-[0.2rem] items-center justify-between rounded-xl cursor-pointer
    ${submission.id == user_id ? "bg-hover-layer" : ""}`}
                  onClick={() => handleUserChange(submission.id)}
                >
                  <div className="flex flex-row gap-[0.5rem]">
                    <Image
                      className="rounded-xl"
                      src={ProfilePic}
                      alt=""
                      width={50}
                      height={50}
                    />
                    <div>
                      <h2 className="text-h2 font-bold">
                        {submission?.full_name}
                      </h2>
                      <p className="text-p text-secondary-text">
                        {submission?.email}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-${colorPicker(
                      submission?.score
                    )} text-h2 font-bold`}
                  >
                    {submission?.score}%
                  </p>
                </div>
              ))}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
