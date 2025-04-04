

import { useEffect, useState } from "react";
import axiosHandler from "./utils/axiosHandler";
import { Link, Outlet } from "react-router";
import Navbar from "./components/Navbar";

export default function App() {
  const [response, setResponse] = useState([]);
  const [header, setHeader] = useState(null);
  useEffect(() => {
    const getAxiosData = async () => {
      const resp = await axiosHandler(
        "http://localhost:8080/home",
        "get",
        null,
        false
      );
      setResponse(resp.data);
      setHeader(resp.headers);
    };
    getAxiosData();
  }, []);

  return (
      <>
          <Navbar/>
          <Outlet context={[response]}/>
      </>

    
  );
}
