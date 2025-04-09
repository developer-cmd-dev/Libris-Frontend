import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { toast } from "sonner";
import axiosHandler from "./utils/axiosHandler";
import Navbar from "./components/Navbar";
import { login } from "./Features/AuthenticationSlice";
import BackDropLoadingScreen from "./components/BackDropLoadingScreen";
import { setLoading } from "./Features/LoadingSlice";
import Footer from "./components/Footer";
function App() {
  const [response, setResponse] = useState([]);
  const [header, setHeader] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.authentication);
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAxiosData = async () => {
      try {
        dispatch(setLoading(true));
        const data = JSON.parse(localStorage.getItem("booksData"));
        if (data == null || data.length == 0) {
          const resp = await axiosHandler(
            "http://localhost:8080/home",
            "get",
            null,
            null,
            null
          );
          localStorage.setItem("booksData", JSON.stringify(resp.data));
          setResponse(resp.data);
          setHeader(resp.headers);
          dispatch(setLoading(false))
        } else {
          setResponse(data);
          dispatch(setLoading(false))
        }
      } catch (error) {
        console.log(error);
        dispatch(setLoading(false));
      }finally{
        dispatch(setLoading(false));
      }
    };
    getAxiosData();

    const verifyToken = async () => {
      const token = localStorage.getItem("access_token");
      try {
        if (token) {
          const header = {
            Authorization: token ? `Bearer ${token}` : null,
          };
          const authenticated = await axiosHandler(
            "http://localhost:8080/public/verify-token",
            "get",
            null,
            header,
            null
          );
          if (authenticated.status == 200) {
            toast.success("Login Successfully");
            dispatch(login( authenticated.data));
          }
        }
      } catch (error) {
        toast.error("Session expired, please login again");
      }
    };

    !isAuthenticated && verifyToken();
  }, []);

  return (
    <>
      <BackDropLoadingScreen handleBackDrop={isLoading} />
      <Navbar />
      <Outlet context={[response]} />
      <Footer/>
    </>
  );
}

export default App;
