import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";

function PDFViewer({ filelink }) {
  const [pdfUrl, setPdfUrl] = useState("");

  // Function to fetch the PDF file from the backend
  const fetchPdf = async () => {
    try {
      const response = await axios.get(`${filelink}`, {
        responseType: "blob",
      });
      const url = URL.createObjectURL(response.data);
      setPdfUrl(url);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  // Call fetchPdf function when component mounts
  useEffect(() => {
    fetchPdf();
  }, []);

  return (
    <div>
      {pdfUrl ? (
        <iframe title="PDF Viewer" src={pdfUrl} width="100%" height="600px" />
      ) : (
        <Spinner
          color="amber"
          className="h-12 w-12 flex items-center justify-center"
        />
      )}
    </div>
  );
}

export default PDFViewer;
