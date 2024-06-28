import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios';

const useSendData = () => {
  const [load, setLoad] = useState(false);

  const SendData = async (userdata) => {

    setLoad(true);
    try {
      const res = await fetch("/api/data/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdata),
      });

   
      const data = res.json();

      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoad(false);
    }
  };
  return { load, SendData };
};

export default useSendData;