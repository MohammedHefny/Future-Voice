import { lazy, Suspense, FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import ScrollToTop from "../shared/ScrollToTop";
const App = lazy(() => import("../App"));

const AppRoutes: FC = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<App />}>
              <Route path="/*" element={<PrivateRoutes />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export { AppRoutes };
