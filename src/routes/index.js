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

        <Route exact path="/hot-news" element={<Articles qqq="now" />} />
        <Route exact path="/general" element={<Articles qqq="general" />} />
        <Route
          exact
          path="/technology"
          element={<Articles qqq="technology" />}
        />
        <Route exact path="/business" element={<Articles qqq="business" />} />
        <Route
          exact
          path="/entertainment"
          element={<Articles qqq="entertainment" />}
        />
        <Route exact path="/sports" element={<Articles qqq="sports" />} />
        <Route exact path="/health" element={<Articles qqq="health" />} />
        <Route exact path="/science" element={<Articles qqq="science" />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
