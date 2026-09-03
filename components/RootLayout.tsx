import { Outlet } from "react-router";
import Navbar from "./NavBar";

function RootLayout() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
