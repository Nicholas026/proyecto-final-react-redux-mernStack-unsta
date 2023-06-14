import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import useTitle from "./hooks/useTitle";
import Signup from "./features/auth/Signup";
import RequireAuthTwo from "./features/auth/RequireAuthTwo";
import OlvideMiContraseña from "./components/OlvideMiContraseña";
import WorkWithUs from "./components/WorkWithUs";
import NotFound from "./components/NotFound";
import Professionals from "./components/Professionals";
import ProfessionalDetails from "./components/ProfessionalsDetails";
import ContactRegister from "./components/ContactRegister";
import React from "react";
import ComentarYCalificar from "./components/ComentarYCalificar";

function App() {
  useTitle("Datazo con vos!");

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="workWithUs" element={<WorkWithUs />} />
        <Route path="/login/missPassword" element={<OlvideMiContraseña />} />
        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route
              path="dash"
              element={
                <RequireAuthTwo>
                  <DashLayout />
                </RequireAuthTwo>
              }
            >
              <Route
                path="professionals/:alt"
                element={
                  <RequireAuthTwo>
                    <Professionals />
                  </RequireAuthTwo>
                }
              />
              <Route
                path="professionals/:alt/:id"
                element={
                  <RequireAuthTwo>
                    <ProfessionalDetails />
                  </RequireAuthTwo>
                }
              ></Route>
              <Route
                path="professionals/:alt/:id/:token"
                element={
                  <RequireAuthTwo>
                    <ContactRegister />
                  </RequireAuthTwo>
                }
              ></Route>
              <Route
                path="professionals/:alt/:id/:token/calificacion"
                element={
                  <RequireAuthTwo>
                    <ComentarYCalificar />
                  </RequireAuthTwo>
                }
              ></Route>
            </Route>
            {/* End Dash */}
          </Route>
        </Route>
        {/* End Protected Routes */}
      </Route>
    </Routes>
  );
}

export default App;
