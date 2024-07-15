import { AppRoutes } from "./app/routing/AppRoutes";
import { MetronicI18nProvider } from "./app/i18n/Metronici18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <MetronicI18nProvider>
      <AppRoutes />
    </MetronicI18nProvider>
  );
}
