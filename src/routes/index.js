import { Route, Routes} from "react-router-dom";
//import HomePage from "../pages/HomePage";
import ArticlesPage from "../pages/ArticlesPage";
import PageNotFound from "../pages/PageNotFound";
import React from "react";
import SplashScreen from "../pages/SplashScreen/withSplashScreen";
//import { articleURLs } from "../config/axios";

const Homepage = React.lazy(() => import("../pages/Homepage"));

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<React.Suspense fallback={<SplashScreen />}><Homepage /></React.Suspense>}></Route>
            {/* {
                articleURLs.map((value) => {
                    (<Route exact path={value} element={<ArticlesPage />} key={value}></Route>);
                })
            } */}
            <Route exact path="/hot-news" element={<ArticlesPage/>}></Route>
            <Route exact path="/general" element={<ArticlesPage />}></Route>
            <Route exact path="/technology" element={<ArticlesPage />}></Route>
            <Route exact path="/business" element={<ArticlesPage />}></Route>
            <Route exact path="/entertainment" element={<ArticlesPage />}></Route>
            <Route exact path="/sports" element={<ArticlesPage />}></Route>
            <Route exact path="/health" element={<ArticlesPage />}></Route>
            <Route exact path="/science" element={<ArticlesPage />}></Route>
            <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
    );
};

export default AppRoutes;