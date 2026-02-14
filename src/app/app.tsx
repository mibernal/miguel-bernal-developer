import { BrowserRouter } from "react-router-dom";

import { AppProviders } from "@/app/providers";
import { AppRouter } from "@/app/router";

const basename = import.meta.env.BASE_URL || "/";

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter basename={basename}>
        <AppRouter />
      </BrowserRouter>
    </AppProviders>
  );
}
