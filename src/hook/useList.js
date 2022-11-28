import React, { useState, useEffect } from "react";
import axios from "axios";

function useList() {
  const [alquran, setAlquran] = useState([]);
  const getAlquran = async () => {
    try {
      const response = axios.get("http://api.alquran.cloud/v1/quran/en.asad");

      console.log("response =>", response);
      setAlquran(response.data);
    } catch (err) {
      console.log("error =>", err);
    }
  };

  useEffect(() => {
    getAlquran();
  }, []);

  return { alquran };
}

export default useList;
