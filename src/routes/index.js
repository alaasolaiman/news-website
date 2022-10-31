import { Route, Routes } from "react-router-dom";

import PageNotFound from "../pages/PageNotFound";
import React, { lazy, Suspense } from "react";
import SplashScreen from "../pages/SplashScreen";

const Articles = lazy(() => import("../layouts/Articles"));

const Homepage = React.lazy(() => import("../pages/HomePage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes>
        <Route exact path="/" element={<Homepage />} />

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
    </Suspense>
  );
};

export default AppRoutes;
