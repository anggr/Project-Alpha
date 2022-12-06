// import { ThemeProvider } from "@mui/material/styles";
// import { useRoutes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import routes from "./routes/index";
// import theme from "./theme";
// import _ from "lodash";
// import { Toaster } from "react-hot-toast";
// const App = () => {
//   const [auth, setAuth] = useState(true);
//   useEffect(() => {
//     async function request() {
//       const cookie = await localStorage.getItem("_q");
//       setAuth(_.isUndefined(cookie) || _.isEmpty(cookie));
//     }
//     request();
//   }, [auth]);
//   console.log(auth);
//   const routing = useRoutes(routes(auth));
//   return (
//     <ThemeProvider theme={theme}>
//       <Toaster position="top-right" />
//       {routing}
//     </ThemeProvider>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Header from "./components/navbar/navbar";
import routes from "./routes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const header = ["/auth/login"];
  useEffect(() => {
    const token = localStorage.getItem("_q");
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  const routing = useRoutes(routes(isAuth));
  return (
    <div>
      {!header.includes(location.pathname) && <Header />}
      <ToastContainer position="middle" />
      {routing}
    </div>
  );
}

export default App;
