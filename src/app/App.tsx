import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { I18nProvider } from "./i18n/i18nProvider";


const App = () => {
  return (
    <Suspense>
      <I18nProvider>
        <Outlet />
      </I18nProvider>
    </Suspense>
  );
};
export default App;
