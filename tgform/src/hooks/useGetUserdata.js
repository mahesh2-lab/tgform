import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetUserdata = () => {
  const [loading, setLoading] = useState(false);
  const [userdata, setUserData] = useState({});

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/data/getdata");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setUserData(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return { loading, userdata };
};

export default useGetUserdata;
