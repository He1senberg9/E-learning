import GlobalStyles, { theme } from "GlobalStyles";
import { ThemeProvider } from "@mui/material";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import LoadingLazy from "Components/LoadingLazy/LoadingLazy";
import HomeTemplate from "Templates/HomeTemplate/HomeTemplate";
import LoginTemplate from "Templates/LoginTemplate/LoginTemplate";
import ProtectedLogin from "Routes/ProtectedLogin";
import Halo from "Pages/Halo";
import UserTemplate from "Templates/UserTemplate/UserTemplate";
import Courses from "Pages/UserDetail/Courses";
import AccountSecurity from "Pages/UserDetail/AccountSecurity";
import EditProfile from "Pages/UserDetail/EditProfile";

const HomePage = lazy(() => import("Pages/HomePage/HomePage"));
const DetailPage = lazy(() => import("Pages/DetailPage/DetailPage"));
const LoginPage = lazy(() => import("Pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("Pages/RegisterPage/RegisterPage"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingLazy />}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="" element={<HomeTemplate />}>
                <Route index element={<HomePage />} />
                <Route path="detail/:courseId" element={<DetailPage />} />
                <Route path="user" element={<UserTemplate />}>
                  <Route path="edit-profile" element={<EditProfile />} />
                  <Route path="courses" element={<Courses />} />
                  <Route
                    path="account-security"
                    element={<AccountSecurity />}
                  />
                </Route>
              </Route>
              <Route path="/" element={<LoginTemplate />}>
                <Route
                  path="login"
                  element={
                    <ProtectedLogin>
                      <LoginPage />
                    </ProtectedLogin>
                  }
                />
                <Route path="register" element={<RegisterPage />} />
              </Route>
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
            <GlobalStyles />
          </ThemeProvider>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
    // <ThemeProvider theme={theme}>
    //   <Halo />
    //   <GlobalStyles />
    // </ThemeProvider>
  );
}

export default App;
