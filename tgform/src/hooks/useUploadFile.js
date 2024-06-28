import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios';

const useUploadFile = () => {

  const UploadFile = async (userdata) => {


    const formData = new FormData();
    userdata.forEach((file, index) => {
      formData.append(`files`, file);
      
    });

    try {

      axios.post('/api/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => { })
        .catch(er => {
          throw new Error(er);

        })


    } catch (error) {
      toast.error(error.message);
    } finally {
    }
  };
  return { UploadFile };
};

export default useUploadFile;