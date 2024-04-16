import "../assets/fonts/fonts.css";
import "../tailwind.css";

import {Route, Routes} from "react-router-dom";
import Registration from "../pages/registration";

export default function App() {
  return (
      <Routes>
        <Route path={'/registration/:id'} element={<Registration />}/>
      </Routes>
  );
}

