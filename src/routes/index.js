import { Route, Routes } from "react-router-dom";
//import HomePage from "../pages/HomePage";

import PageNotFound from "../pages/PageNotFound";
import React, { lazy } from "react";
import SplashScreen from "../pages/SplashScreen";

const Articles = lazy(() => import("../layouts/Articles"));
//import { articleURLs } from "../config/axios";

const Homepage = React.lazy(() => import("../pages/HomePage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <React.Suspense fallback={<SplashScreen />}>
            <Homepage />
          </React.Suspense>
        }
      />

      <Route exact path="/hot-news" element={<Articles query="now" />} />
      <Route exact path="/general" element={<Articles query="general" />} />
      <Route
        exact
        path="/technology"
        element={<Articles query="technology" />}
      />
      <Route exact path="/business" element={<Articles query="business" />} />
      <Route
        exact
        path="/entertainment"
        element={<Articles query="entertainment" />}
      />
      <Route exact path="/sports" element={<Articles query="sports" />} />
      <Route exact path="/health" element={<Articles query="health" />} />
      <Route exact path="/science" element={<Articles query="science" />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
