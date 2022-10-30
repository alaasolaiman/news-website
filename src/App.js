import { BrowserRouter } from "react-router-dom";
import AppFooter from "./layouts/Footer";
import AppHeader from "./layouts/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppRoutes />
      <AppFooter />
    </BrowserRouter>
  );
}
export default App;
