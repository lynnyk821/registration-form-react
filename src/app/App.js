import "../assets/fonts/fonts.css";
import "../tailwind.css";

import {Route, Routes} from "react-router-dom";
import Registration from "../pages/registration";
import ProfileInfo from "../pages/profileInfo";
import RegistrationFirstStep from "../components/Registration/steps/First/RegistrationFirstStep";
import Layout from "../components/сommons/Layout/Layout";

export default function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Layout> <RegistrationFirstStep /> </Layout>}/>
          <Route path={'/registration/:id'} element={<Registration />}/>
          <Route path={'/profileInfo/:id'} element={<ProfileInfo />}/>
      </Routes>
  );
}

