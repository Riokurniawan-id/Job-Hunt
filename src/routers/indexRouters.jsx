import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRouters from "./publicRouters";

// Don't Touch!

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRouters.map((data) => {
          return (
            <Route element={data.Element} path={data.path} key={data.key} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
