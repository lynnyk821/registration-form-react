import "../assets/fonts/fonts.css";
import "../tailwind.css";

import {Route, Routes} from "react-router-dom";
import Registration from "../pages/registration";
import ProfileInfo from "../pages/profileInfo";

export default function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Registration />}/>
          <Route path={'/registration/:id'} element={<Registration />}/>
          <Route path={'/profileInfo/:id'} element={<ProfileInfo />}/>
      </Routes>
  );
}

