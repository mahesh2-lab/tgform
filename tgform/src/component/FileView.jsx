import React from "react";
import { IconButton } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import PDFViewer from "./PDFView";

const FileView = ({ DocName, filelink }) => {
  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => setSize(value);
  return (
    <>
      <div className="w-full h-14 border mt-2 rounded-xl">
        <div className="w-full flex h-full items-center justify-between ms-8">
          <span className="w-2/4">
            {DocName ? DocName : "No document selected"}
          </span>
          <span className=" w-6/12 flex items-center justify-end me-12">
            <IconButton variant="outlined" onClick={() => handleOpen("lg")}>
              <i className="fas fa-eye" />
            </IconButton>
          </span>
          <Dialog className="h-[42rem] overflow-scroll"
            open={
              size === "lg" 
            }
            size={size || "md"}
            handler={handleOpen}
          >
            <DialogHeader className="w-full items-end justify-end"><IconButton variant="outlined"  onClick={() => handleOpen(null)}> <i className="fas fa-x" /></IconButton></DialogHeader>
            <DialogBody className="h-[42rem] overflow-scroll">
              <PDFViewer filelink={filelink} />
            </DialogBody>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default FileView;
