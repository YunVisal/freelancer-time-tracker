import { Outlet } from "react-router-dom";

import Header from "components/layout/Header";
import DesktopNavbar from "components/layout/DesktopNavbar";
import MobileNavbar from "components/layout/MobileNavbar";

function App() {
  return (
    <main>
      <Header />
      <DesktopNavbar />
      <Outlet />
      <MobileNavbar />
    </main>
  );
}

export default App;
