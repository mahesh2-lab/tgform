import React from "react";
import NavBar from "./NavBar.jsx";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const Notications = () => {
  return (
    <>
      <div className=" w-full h-full">
        <NavBar number={1} />
        <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg max-w-full w-9/12 mx-auto flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="w-[32rem] flex items-center justify-center">
            <Timeline>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Date.
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gary"
                    className="font-normal text-gray-600"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus fugit corrupti dolor non dolores ad commodi doloribus ut accusamus. Sunt nam similique ratione est laudantium illum suscipit, architecto ipsa?
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Date.
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gary"
                    className="font-normal text-gray-600"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus fugit corrupti dolor non dolores ad commodi doloribus ut accusamus. Sunt nam similique ratione est laudantium illum suscipit, architecto ipsa?
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Date.
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gary"
                    className="font-normal text-gray-600"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus fugit corrupti dolor non dolores ad commodi doloribus ut accusamus. Sunt nam similique ratione est laudantium illum suscipit, architecto ipsa?
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Date.
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gary"
                    className="font-normal text-gray-600"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus fugit corrupti dolor non dolores ad commodi doloribus ut accusamus. Sunt nam similique ratione est laudantium illum suscipit, architecto ipsa?
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Notications;
