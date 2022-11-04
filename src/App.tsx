import GlobalStyles, { theme } from "GlobalStyles";
import { ThemeProvider } from "@mui/material";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import LoadingLazy from "Components/LoadingLazy/LoadingLazy";
import HomeTemplate from "Templates/HomeTemplate/HomeTemplate";

import HomePage from "Pages/HomePage/HomePage";
import LoginPage from "Pages/LoginPage/LoginPage";
import RegisterPage from "Pages/RegisterPage/RegisterPage";
import UserDetailPage from "Pages/UserDetailPage/UserDetailPage";
import CourseDetailPage from "Pages/CourseDetailPage/CourseDetailPage";
import CourseListPage from "Pages/CourseListPage/CourseListPage";
import CourseListByCatalogPage from "Pages/CourseListByCatalogPage/CourseListByCatalogPage";
import ProtectedLogin from "Routes/ProtectedLogin";
import ProtectedUserDetail from "Routes/ProtectedUserDetail";

// const HomePage = lazy(() => import("Pages/HomePage/HomePage"));
// const UserDetailPage = lazy(
//   () => import("Pages/UserDetailPage/UserDetailPage")
// );
// const CourseDetailPage = lazy(
//   () => import("Pages/CourseDetailPage/CourseDetailPage")
// );
// const CourseListPage = lazy(
//   () => import("Pages/CourseListPage/CourseListPage")
// );
// const CourseListByCatalogPage = lazy(
//   () => import("Pages/CourseListByCatalogPage/CourseListByCatalogPage")
// );
// const LoginPage = lazy(() => import("Pages/LoginPage/LoginPage"));
// const RegisterPage = lazy(() => import("Pages/RegisterPage/RegisterPage"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingLazy />}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="" element={<HomeTemplate />}>
                <Route index element={<HomePage />} />
                <Route path="course-list" element={<CourseListPage />} />
                <Route
                  path="course-list/:catalogID"
                  element={<CourseListByCatalogPage />}
                />
                <Route
                  path="course-detail/:courseID"
                  element={<CourseDetailPage />}
                />
                <Route
                  path="user-detail"
                  element={
                    <ProtectedUserDetail>
                      <UserDetailPage />
                    </ProtectedUserDetail>
                  }
                />
                <Route
                  path="login"
                  element={
                    <ProtectedLogin>
                      <LoginPage />
                    </ProtectedLogin>
                  }
                />
                <Route
                  path="register"
                  element={
                    <ProtectedLogin>
                      <RegisterPage />
                    </ProtectedLogin>
                  }
                />
              </Route>
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
            <GlobalStyles />
          </ThemeProvider>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
