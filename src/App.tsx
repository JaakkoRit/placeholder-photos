import { ReactElement } from "react";
import { AppProvider } from "./providers/appProvider";
import { AppRoutes } from "./routes";

export const App = (): ReactElement => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
